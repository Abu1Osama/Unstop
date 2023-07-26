import React, { useState, useEffect } from "react";
import "../Styles/Form.scss";
import cut from "../assest/cut.png";
import close from "../assest/close.png";
import axios from "axios";
import { toast } from "react-hot-toast";

function Form({ closePopup, updateAssessmentData ,style}) {
 
  const [formData, setFormData] = useState({
    name: "",
    purpose: "",
    description: "",
    duration: "",
    skills: [],
  });
  const [newSkill, setNewSkill] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [formErrors, setFormErrors] = useState({
    name: "",
    purpose: "",
    description: "",
    skills: "",
    duration: "",
  });

  // Function to handle click events within the form
  const handleFormClick = (event) => {
    event.stopPropagation();
  };

  // Function to update form data when inputs change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle skill change in the skills input
  const handleSkillChange = (event) => {
    setNewSkill(event.target.value);
    setInputValue(event.target.value);
  };

  // Function to handle "Enter" key press in the skills input
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

  // Function to handle blur event in the skills input
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

  // Function to remove a skill from the skills list
  const handleRemoveSkill = (skill) => {
    const updatedSkills = formData.skills.filter((s) => s !== skill);
    setFormData({ ...formData, skills: updatedSkills });
  };

  // Function to validate the form data
  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (formData.name.trim() === "") {
      errors.name = "Name is required";
      isValid = false;
    }

    if (formData.purpose.trim() === "") {
      errors.purpose = "Purpose is required";
      isValid = false;
    }

    if (formData.description.trim() === "") {
      errors.description = "Description is required";
      isValid = false;
    }

    if (formData.skills.length === 0) {
      errors.skills = "At least one skill is required";
      isValid = false;
    }

    if (formData.duration.trim() === "") {
      errors.duration = "Duration is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  // Function to handle the Save button click
  const handleSaveButtonClick = () => {
    if (!validateForm()) {
      toast.error("Please fill in all required fields.", {
        style: {
          borderRadius: "50px",
          background: "#000428",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
      return;
    }
      // Capitalize the first letter of each field
  const capitalizedFormData = {
    name: capitalizeFirstLetter(formData.name),
    purpose: capitalizeFirstLetter(formData.purpose),
    description: capitalizeFirstLetter(formData.description),
    duration: formData.duration,
    skills: formData.skills.map((skill) => capitalizeFirstLetter(skill)),
  };


    axios
    .get("https://semi-mock2.onrender.com/cars")
    .then((response) => {
      const existingData = response.data;
      const isDuplicate = existingData.some((data) => {
        return (
          data.name === capitalizedFormData.name &&
          data.purpose === capitalizedFormData.purpose &&
          data.description === capitalizedFormData.description &&
          data.duration === capitalizedFormData.duration &&
          JSON.stringify(data.skills) === JSON.stringify(capitalizedFormData.skills)
        );
      });

      if (!isDuplicate) {
        axios
          .post("https://semi-mock2.onrender.com/cars", capitalizedFormData)
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

  // Set the form visibility when the component mounts
  

  return (

    <div id="form" className="form " style={style} onClick={handleFormClick}>
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
