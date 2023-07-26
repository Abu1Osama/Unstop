import React, { useEffect, useState } from "react";
import "../Styles/Assessment.scss";

import view_agenda from "../assest/view_agenda.png";
import user from "../assest/user.png";
import vector250 from "../assest/Vector250.png";
import vector251 from "../assest/Vector251.png";
import globe from "../assest/globe.png";
import attach from "../assest/attach.png";
import megnify from "../assest/search.png";
import filter_list_alt from "../assest/filter_list_alt.png";
import bar_chart from "../assest/bar_chart.png";
import add from "../assest/add.png";
import dot from "../assest/3 dot.png";
import calender from "../assest/calendar_today.png";
import box from "../assest/Frame 1000008703.png";
import link from "../assest/link.png";
import Navbar from "./Navbar";
import Menubar from "./Menubar";
import Desk from "./Desk";
import Lib from "./Lib";
import Form from "./Form";
import axios from "axios";

function Assessment() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [showTop, setShowTop] = useState(true);
  const [arr, setArr] = useState([]);
  const [style, setStyle] = useState({
    animation: "sam 0.5s forwards",
  });
  console.log(arr);

  const openPopup = () => {
    setStyle({
      animation: "sam 0.5s forwards",
    });
    setShowPopup(true);
  };

  const closePopup = () => {
    setStyle({
      animation: "sam-closing 0.5s forwards",
    });
    setTimeout(() => {
      setShowPopup(false);
    }, 500);
  };
  const opendata = () => {
    setShowTop((prevShowTop) => !prevShowTop);
  };
  const side_data = [
    {
      name: "Dashboard",
      active: "none",
    },
    {
      name: "Assessment",
      active: "none",
    },
    {
      name: "My Library",
      active: "none",
    },
  ];

  useEffect(() => {
    axios
      .get("https://semi-mock2.onrender.com/cars")
      .then((response) => {
        setArr(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);
  const updateAssessmentData = () => {
    axios
      .get("https://semi-mock2.onrender.com/cars")
      .then((response) => {
        setArr(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  };

  const getFormattedDate = () => {
    const currentDate = new Date();
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
    return formattedDate;
  };

  const formattedDate = getFormattedDate();
  return (
    <div className="main-assess" id="main-assess">
      <Menubar setCurrentPage={setCurrentPage} />

      <div className="page" id="page">
        <Navbar
          currentindex={currentPage}
          side_data={side_data}
          setCurrentPage={setCurrentPage}
        />
        {currentPage === 0 ? (
          <Desk />
        ) : currentPage == 1 ? (
          <div className="assessment" id="assessment">
            <h2 className="tag-heading">Assessment Overview</h2>
            {showTop && (
              <div className="top">
                <div className="top-data">
                  <div className="top-data-child1">
                    <h2 className="label">Total Assessment</h2>
                    <div className="child">
                      <img src={view_agenda} alt="" />
                      <div className="child-candid">
                        <div className="child-candid-data">
                          <h2>{arr.length + 2}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="vectornone" src={vector251} alt="" />
                  <svg
                    className="vector360"
                    xmlns="http://www.w3.org/2000/svg"
                    width="345"
                    height="2"
                    viewBox="0 0 345 2"
                    fill="none"
                  >
                    <path d="M0 1H345" stroke="#DADCE0" />
                  </svg>
                  <div className="top-data-child2">
                    <h2 className="label">Candidates</h2>
                    <div className="child">
                      <img src={user} alt="" />
                      <div className="child-candid">
                        <div className="child-candid-data">
                          <h2>11,145</h2>
                          <p>+89</p>
                        </div>
                        <p>Total Candidate</p>
                      </div>
                      <img src={vector250} alt="" />
                      <div className="child-candid">
                        <div className="child-candid-data">
                          <h2>1,14</h2>
                          <p>+89</p>
                        </div>
                        <p>Who Attamped</p>
                      </div>
                    </div>
                  </div>
                  <img className="vectornone" src={vector251} alt="" />
                  <svg
                    className="vector360"
                    xmlns="http://www.w3.org/2000/svg"
                    width="345"
                    height="2"
                    viewBox="0 0 345 2"
                    fill="none"
                  >
                    <path d="M0 1H345" stroke="#DADCE0" />
                  </svg>
                  <div className="top-data-child3">
                    <h2 className="label">Candidates Source</h2>
                    <div className="child">
                      <img src={globe} alt="" />
                      <div className="child-candid">
                        <div className="child-candid-data">
                          <h2>11,000</h2>
                          <p>+89</p>
                        </div>
                        <p>E-mail</p>
                      </div>
                      <img src={vector250} alt="" />
                      <div className="child-candid">
                        <div className="child-candid-data">
                          <h2>145</h2>
                          <p>+89</p>
                        </div>
                        <p>Social Share</p>
                      </div>
                      <img src={vector250} alt="" />
                      <div className="child-candid">
                        <div className="child-candid-data">
                          <h2>145</h2>
                          <p>+89</p>
                        </div>
                        <p>Unique Link</p>
                      </div>
                    </div>
                  </div>
                  <img className="vectornone" src={vector251} alt="" />
                  <svg
                    className="vector360"
                    xmlns="http://www.w3.org/2000/svg"
                    width="345"
                    height="2"
                    viewBox="0 0 345 2"
                    fill="none"
                  >
                    <path d="M0 1H345" stroke="#DADCE0" />
                  </svg>
                  <div className="top-data-child4">
                    <h2 className="label">Total Purpose</h2>
                    <div className="child">
                      <img src={attach} alt="" />
                      <div className="child-candid">
                        <div className="child-candid-data">
                          <h2>11</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="section-top">
              <div>
                <h2 className="tag-heading">My Assessment</h2>{" "}
              </div>
              <div className="for-mobile">
                <img src={megnify} alt="" />
                <img src={filter_list_alt} alt="" />
                <img
                  className="open-data"
                  onClick={opendata}
                  src={bar_chart}
                  alt=""
                />
              </div>
            </div>
            <div className="section">
              <div className="section-child">
                <div className="add">
                  <div className="add-div" onClick={openPopup}>
                    <img src={add} alt="" />
                  </div>
                  <h2>New Assessment</h2>
                  <p>
                    From here you can add questions of multiple types like MCQs,
                    subjective (text or paragraph)!
                  </p>
                </div>
              </div>
              <div className="section-child data-child">
                <div className="data-child-top">
                  <div className="top-left">
                    <img src={box} alt="" />
                    <div className="abcd">
                      <div>
                        <h2>Math Assessment</h2>
                      </div>
                      <div className="job-line">
                        <h2>Job</h2>
                        <div className="job-line">
                          <img src={calender} alt="" />
                          <p>20 Apr 2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="top-right">
                    <img src={dot} alt="" />
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="356"
                  height="2"
                  viewBox="0 0 356 2"
                  fill="none"
                >
                  <path d="M0 1H356" stroke="#DADCE0" stroke-dasharray="3 3" />
                </svg>
                <div className="data-child-bottom">
                  <div className="data-child-bottom-child">
                    <div>
                      <p>00</p>
                      <p className="duration">Duration</p>
                    </div>
                    <div>
                      <p>00</p>
                      <p className="duration">Questions</p>
                    </div>
                  </div>
                  <div className="data-child-bottom-child">
                    <div className="attach">
                      <img src={link} alt="" />
                      <p className="share">Share</p>
                    </div>
                    <div className="user-ico-div">
                      <div className="user-ico-a">
                        <div className="user-ico-nested">
                          <h2 className="user-ico">LP</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-child data-child">
                <div className="data-child-top">
                  <div className="top-left">
                    <img src={box} alt="" />
                    <div className="abcd">
                      <div>
                        <h2>Math Assessment</h2>
                      </div>
                      <div className="job-line">
                        <h2>Job</h2>
                        <div className="job-line">
                          <img src={calender} alt="" />
                          <p>20 Apr 2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="top-right">
                    <img src={dot} alt="" />
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="356"
                  height="2"
                  viewBox="0 0 356 2"
                  fill="none"
                >
                  <path d="M0 1H356" stroke="#DADCE0" stroke-dasharray="3 3" />
                </svg>
                <div className="data-child-bottom">
                  <div className="data-child-bottom-child">
                    <div>
                      <p>00</p>
                      <p className="duration">Duration</p>
                    </div>
                    <div>
                      <p>00</p>
                      <p className="duration">Questions</p>
                    </div>
                  </div>
                  <div className="data-child-bottom-child">
                    <div className="attach">
                      <img src={link} alt="" />
                      <p className="share">Share</p>
                    </div>
                    <div className="user-ico-div">
                      <div className="user-ico-a">
                        <div
                          style={{ background: "#6548EE" }}
                          className="user-ico-nested"
                        >
                          <h2 className="user-ico">LP</h2>
                        </div>
                      </div>
                      <div className="user-ico-a">
                        <div
                          style={{ background: "#3079E1" }}
                          className="user-ico-nested"
                        >
                          <h2 className="user-ico">LP</h2>
                        </div>
                      </div>
                      <div className="user-ico-a">
                        <div
                          style={{ background: "#E9407A" }}
                          className="user-ico-nested"
                        >
                          <h2 className="user-ico">LP</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-section">
              <div className="map-data">
                {arr.map((item) => (
                  <div className="section-child data-child">
                    <div className="data-child-top">
                      <div className="top-left">
                        <img src={box} alt="" />
                        <div className="abcd">
                          <div>
                            <h2>{item.name}</h2>
                          </div>
                          <div className="job-line">
                            <h2>{item.purpose}</h2>
                            <div className="job-line">
                              <img src={calender} alt="" />
                              <p>{formattedDate}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="top-right">
                        <img src={dot} alt="" />
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="356"
                      height="2"
                      viewBox="0 0 356 2"
                      fill="none"
                    >
                      <path
                        d="M0 1H356"
                        stroke="#DADCE0"
                        stroke-dasharray="3 3"
                      />
                    </svg>
                    <div className="data-child-bottom">
                      <div className="data-child-bottom-child">
                        <div>
                          <p>00</p>
                          <p className="duration">Duration</p>
                        </div>
                        <div>
                          <p>00</p>
                          <p className="duration">Questions</p>
                        </div>
                      </div>
                      <div className="data-child-bottom-child">
                        <div className="attach">
                          <img src={link} alt="" />
                          <p className="share">Share</p>
                        </div>
                        <div className="user-ico-div">
                          <div className="user-ico-a">
                            <div
                              style={{ background: "#6548EE" }}
                              className="user-ico-nested"
                            >
                              <h2 className="user-ico">LP</h2>
                            </div>
                          </div>
                          <div className="user-ico-a">
                            <div
                              style={{ background: "#3079E1" }}
                              className="user-ico-nested"
                            >
                              <h2 className="user-ico">LP</h2>
                            </div>
                          </div>
                          <div className="user-ico-a">
                            <div
                              style={{ background: "#E9407A" }}
                              className="user-ico-nested"
                            >
                              <h2 className="user-ico">LP</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Lib />
        )}
      </div>
      <div className={`popup ${showPopup && "showPopup"}`} onClick={closePopup}>
        <Form
          closePopup={closePopup}
          updateAssessmentData={updateAssessmentData}
          style={style}
        />
      </div>
    </div>
  );
}

export default Assessment;
