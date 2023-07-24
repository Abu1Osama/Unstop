import React, { useState } from "react";
import dashboard from "../assest/dashboard.png";
import note from "../assest/note_alt.png";
import library from "../assest/quiz.png";
import vec from "../assest/Vector267.png";
import admin_meds from "../assest/admin_meds.png";
import "../Styles/Menubar.scss";

function Menubar({ setCurrentPage }) {
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
    setCurrentPage(index); // Pass the current index to the parent component (Assessment)
  };

  return (
    <div className="menubar" id="menubar">
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

      <div className="master">
        <div className="admin">
          <img src={vec} alt="" />
          <div className="admin-title">
          <p>Admin</p>
          </div>
        </div>
        <div className="admin-bottom">
          <img src={admin_meds} alt="" />
          <p>Round Status</p>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Menubar;
