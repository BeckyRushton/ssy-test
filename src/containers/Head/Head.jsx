import "./Head.scss";
import React from "react";
import Logo from "../../assets/images/ssy-logo-large.jpg";

const Head = () => {
  return (
    <div className="head">
      <img className="head__img" src={Logo} alt="ssy-logo" />
      <h1 className="head__title">SSY DRY FFA FREIGHT SUMMARY</h1>
    </div>
  );
};

export default Head;
