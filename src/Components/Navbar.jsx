import React, { useState } from "react";
import "../Styles/Navbar.scss";
import vector250 from "../assest/Vector250.png";
import mobile from "../assest/mob.png";
import segment from "../assest/segment.png";
import Navmenu from "./Navmenu";

function Navbar({ currentindex, side_data, setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const selectedName = side_data[currentindex]?.name || "Assessment";
  const handleMenuIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="nav" id="nav">
      <div className="nav-main">
        <img
          className="menu-ico"
          src={segment}
          alt=""
          onClick={handleMenuIconClick}
        />
        <div className="nav-left">
          <div className="nav-assessment">
            <h2>{selectedName}</h2>
          </div>
          <img src={vector250} alt="" />
          <div className="nav-my">
            <h2>My Assessments</h2>
          </div>
        </div>

        <div className="menu">
          <Navmenu
            setCurrentPage={setCurrentPage}
            isMenuOpen={isMenuOpen}
            setMenuOpen={setIsMenuOpen}
          />
        </div>
        <div className="mobile_view">
          <img src={mobile} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
