import React from 'react';
import './checking-field.css';


const CheckingField = ({ handlerChecked, isChecked, id }) => {

  return (
    <label className="container">
      <input type="checkbox" onChange={() => handlerChecked(id, isChecked)} checked={isChecked} />
      <span className="checkmark"></span>
    </label>
  )
}

export default CheckingField
