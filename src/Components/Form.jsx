import React, { useState, useEffect } from "react";
import "../Styles/Form.scss";
import cut from "../assest/cut.png";
import close from "../assest/close.png";
import axios from "axios";
import { toast } from "react-hot-toast";

function Form({ closePopup, updateAssessmentData }) {
  const [formData, setFormData] = useState({
    name: "",
    purpose: "",
    description: "",
    duration: "",
    skills: [],
  });
  const [newSkill, setNewSkill] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleFormClick = (event) => {
    event.stopPropagation();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (event) => {
    setNewSkill(event.target.value);
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && newSkill.trim() !== "") {
      if (!formData.skills.includes(newSkill.trim())) {
        setFormData({
          ...formData,
          skills: [...formData.skills, newSkill.trim()],
        });
        setNewSkill("");
        setInputValue("");
      } else {
        toast.error("Skill already exists", {
          style: {
            borderRadius: "50px",
            background: "#000428",
            color: "#ffffff",
            padding: "1rem 1.5rem",
            fontWeight: "600",
          },
        });
      }
    }
  };

  const handleBlur = () => {
    if (newSkill.trim() !== "") {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()],
      });
      setNewSkill("");
      setInputValue("");
    }
  };

  const handleRemoveSkill = (skill) => {
    const updatedSkills = formData.skills.filter((s) => s !== skill);
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleSaveButtonClick = () => {
    axios
      .get("https://semi-mock2.onrender.com/cars")
      .then((response) => {
        const existingData = response.data;
        const isDuplicate = existingData.some((data) => {
          return (
            data.name === formData.name &&
            data.purpose === formData.purpose &&
            data.description === formData.description &&
            data.duration === formData.duration &&
            JSON.stringify(data.skills) === JSON.stringify(formData.skills)
          );
        });

        if (!isDuplicate) {
          axios
            .post("https://semi-mock2.onrender.com/cars", formData)
            .then((response) => {
              toast.success("Form data posted successfully", {
                style: {
                  borderRadius: "50px",
                  background: "#000428",
                  color: "#ffffff",
                  padding: "1rem 1.5rem",
                  fontWeight: "600",
                },
              });
              updateAssessmentData();
              closePopup();
            })
            .catch((error) => {
              toast.error("Error posting form data", {
                style: {
                  borderRadius: "50px",
                  background: "#000428",
                  color: "#ffffff",
                  padding: "1rem 1.5rem",
                  fontWeight: "600",
                },
              });
            });
        } else {
          toast.error("Duplicate data.", {
            style: {
              borderRadius: "50px",
              background: "#000428",
              color: "#ffffff",
              padding: "1rem 1.5rem",
              fontWeight: "600",
            },
          });
        }
      })
      .catch((error) => {
        toast.error("Error fetching existing data from API", {
          style: {
            borderRadius: "50px",
            background: "#000428",
            color: "#ffffff",
            padding: "1rem 1.5rem",
            fontWeight: "600",
          },
        });
      });
  };

  return (
    <div id="form" className="form" onClick={handleFormClick}>
      <div className="form-contain">
        <div className="heading">
          <h2>Create new assessment</h2>
          <img src={cut} alt="" onClick={closePopup} />
        </div>
        <form className="form-container">
          <div className="form-child">
            <div className="label">
              <p>Name of assessment</p>
            </div>
            <input
              className="inp"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Type here"
            />
          </div>
          <div className="form-child">
            <div className="label">
              <p>Purpose of the test is</p>
            </div>
            <select
              className="inp"
              name="purpose"
              value={formData.purpose}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="Job">Job</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div className="form-child">
            <div className="label">
              <p>Description</p>
            </div>
            <select
              className="inp"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="Part-time">Part-time</option>
              <option value="Full-time">Full-time</option>
            </select>
          </div>
          <div className="form-child">
            <div className="label">
              <p>Skills</p>
            </div>
            <div className="skills">
              <div className="skills-child">
                <div className="skills-data">
                  {formData.skills.map((skill, index) => (
                    <div key={index} className="skills-data-child">
                      <div className="skills-data-child-div">
                        <p>{skill}</p>
                        <img
                          src={close}
                          alt=""
                          onClick={() => handleRemoveSkill(skill)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <input
                className="inp-skills"
                type="text"
                name=""
                value={inputValue}
                onChange={handleSkillChange}
                onKeyPress={handleKeyPress}
                onBlur={handleBlur}
                placeholder="Type here  and press Enter"
              />
            </div>
          </div>
          <div className="form-child">
            <div className="label">
              <p>Duration of assessment</p>
            </div>
            <input
              className="inp"
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              placeholder="HH:MM:SS"
            />
          </div>
        </form>
        <div className="btn">
          <button className="save-btn" onClick={handleSaveButtonClick}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
