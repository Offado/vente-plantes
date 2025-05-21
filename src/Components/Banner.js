import logo from "../assets/logo_Plante.png";
import React from "react";
import "../Styles/Banner.css";

function Banner() {
  const title = "la maison des plantes";
  return (
    <div className="lmj-banner">
      <img src={logo} alt="la maison des plantes" className="lmj-logo" />
      <h1 className="lmj-title">{title}</h1>
    </div>
  );
}

export default Banner;
