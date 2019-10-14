import React from 'react';
import './button.css';

const Button = ({text, changeClass, isActivClass, id}) => {
  
  const buttonClass = isActivClass ? 'footer_button  Active' : 'footer_button';
  return(
      <button onClick={() => changeClass(id)} className={buttonClass} >{text}</button>
  )
}

export default Button
