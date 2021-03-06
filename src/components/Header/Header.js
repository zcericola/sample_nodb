import React from "react";
import "./Header.css";

const Header = ({ viewChange }) => (
  <header className="flex">
    <div className="logo-container">
      <img
        src="https://heydesign.com/wp-content/uploads/2017/08/Cool-Logos-and-Graphic-Trends-about-Music-DJs-750x500.jpg"
        alt="logo"
      />
    </div>
    <div className="nav-list flex">
      <div className="nav-list-item" onClick={viewChange}>
        Home
      </div>
      <div className="nav-list-item" onClick={viewChange}>
        Coins
      </div>
      <div className="nav-list-item" onClick={viewChange}>
        Tracker
      </div>
    </div>
  </header>
);

export default Header;
