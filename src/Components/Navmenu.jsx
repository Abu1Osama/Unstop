import React, { useState } from "react";
import dashboard from "../assest/dashboard.png";
import note from "../assest/note_alt.png";
import library from "../assest/quiz.png";
import vec from "../assest/Vector267.png";
import admin_meds from "../assest/admin_meds.png";
import "../Styles/Navmenu.scss";
import cut from "../assest/cut.png";

function Navmenu({ setCurrentPage, isMenuOpen, setMenuOpen }) {
  const [currentindex, setCurrentindex] = useState(1);
  const [side_data, setSidedata] = useState([
    {
      name: "Dashboard",
      image: dashboard,
      active: "none",
    },
    {
      name: "Assessment",
      image: note,
      active: "none",
    },
    {
      name: "My Library",
      image: library,
      active: "none",
    },
  ]);

  const handleItemClick = (index) => {
    setCurrentindex(index);
    setCurrentPage(index); 
    setMenuOpen(false);
  };
  const handleCloseMenu = () => {
    console.log("first")
    setMenuOpen(false);
  };
  return (
    <div className={`Navmenu ${isMenuOpen ? "open" : ""}`} id="Navmenu">
      <div className="top-menu">
        <p>Menu</p>
        <img className="close-popup"   onClick={handleCloseMenu} src={cut} alt="" />
      </div>
      <div className="menubar-main">
        <div className="card">
          {side_data.map((item, index) => (
            <div
              onClick={() => handleItemClick(index)}
              className={`map-item ${currentindex === index ? "active" : ""}`}
            >
              <img src={item.image} alt="" />
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>

        <svg
          className="vector360"
          xmlns="http://www.w3.org/2000/svg"
          width="275"
          height="2"
          viewBox="0 0 275 2"
          fill="none"
        >
          <path d="M0 1H275" stroke="#0aa5ff" stroke-dasharray="2 2" />
        </svg>
        <div className="master">
          <div className="admin-bottom">
            <img src={admin_meds} alt="" />
            <p>Round Status</p>
          </div>
          <div className="admin">
            <div className="admin-title">
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navmenu;
