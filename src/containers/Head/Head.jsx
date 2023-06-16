import "./Head.scss";
import React from "react";
import Logo from "../../assets/images/ssy-logo.jpeg";

const Head = () => {
  return (
    <div className="head">
      <h1 className="head__title">SSY</h1>
      <img className="head__img" src={Logo} alt="ssy-logo" />
    </div>
  );
};

export default Head;
