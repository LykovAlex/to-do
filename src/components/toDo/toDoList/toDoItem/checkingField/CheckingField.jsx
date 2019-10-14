import React from 'react';
import './checkingField.css';


const CheckingField = ({handlerChecked, isChecked, id}) => {

  return(
    <label className="container">
      <input type="checkbox" onChange={ () => handlerChecked(id)} checked={isChecked}/>
      <span className="checkmark"></span>
    </label>
  )
}

export default CheckingField
