import React from "react";
import { images } from "../utils/images";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={images.logo} alt="Logo" />
        <h1>Weather App</h1>
      </div>
    </header>
  );
};

export default Header;
