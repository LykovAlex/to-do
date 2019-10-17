import React from "react";
import "./button.css";
// import classnames from 'classnames';

const Button = ({ text, changeClass, isActivClass, id }) => {
  const buttonClass = `footer_button ${isActivClass ? "  Active" : ""}`;
  return (
    <button onClick={() => changeClass(id)} className={buttonClass}>
      {text}
    </button>
  );
};

export default Button;
