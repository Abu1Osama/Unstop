import React from "react";
import "../Styles/Form.scss";
import cut from "../assest/cut.png";
import close from "../assest/close.png";

function Form({closePopup}) {
  const handleFormClick = (event) => {
    // Prevent the click event from propagating to parent elements
    event.stopPropagation();
  };
  return (
    <div id="form" className="form"  onClick={handleFormClick}>
      <div className="form-contain">
        <div className="heading">
          <h2>Create new assessment</h2>
          <img src={cut} alt="" onClick={closePopup}/>
        </div>

        <div className="form-container">
          <div className="form-child">
            <div className="label">
              <p>Name of assessment</p>
            </div>
            <input className="inp" type="text" placeholder="Type here" />
          </div>
          <div className="form-child">
            <div className="label">
              <p>Purpose of the test is</p>
            </div>
            <select className="inp" name="" id="">
              <option value="">Select</option>
              <option value="">Job</option>
              <option value="">Internship</option>
            </select>
          </div>
          <div className="form-child">
            <div className="label">
              <p>Description</p>
            </div>
            <select className="inp" name="" id="">
              <option value="">Select</option>
              <option value="">Part-time</option>
              <option value="">Full-time</option>
            </select>
          </div>
          <div className="form-child">
            <div className="label">
              <p>Skills</p>
            </div>
            <div className="skills">
              <div className="skills-child">
                <div className="skills-data">
                  <div className="skills-data-child">
                    <div className="skills-data-child-div">
                      <p>UI/UX and Design</p> <img src={close} alt="" />
                    </div>
                  </div>
                  <div className="skills-data-child">
                    <div className="skills-data-child-div">
                      <p>No of Question</p>
                      <img src={close} alt="" />
                    </div>
                  </div>
                  <div className="skills-data-child">
                    <div className="skills-data-child-div">
                      <p>Web Development</p>
                      <img src={close} alt="" />
                    </div>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-data-child">
                    <div className="skills-data-child-div">
                      <p>UI/UX and Design</p> <img src={close} alt="" />
                    </div>
                  </div>
                  <div className="skills-data-child">
                    <div className="skills-data-child-div">
                      <p>Web Development</p>
                      <img src={close} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <input
                className="inp-skills"
                type="text"
                name=""
                id=""
                placeholder="Type here"
              />
            </div>
          </div>
          <div className="form-child">
            <div className="label">
              <p>Duration of assessment</p>
            </div>
            <input className="inp" type="text" placeholder="HH:MM:SS" />
          </div>
        </div>
        <div className="btn">
          <button className="save-btn">Save</button>
        </div>
      </div>
      
    </div>
  );
}

export default Form;
