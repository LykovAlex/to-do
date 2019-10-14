import React from 'react';
import Button from './button/Button';
import './buttonGroup.css';


const ButtonsGroup = ({buttons, changeClass, isActivClass}) => {

  const allButtons = buttons.map(button => <Button text={button.text} id={button.id}  key={button.id}  changeClass={changeClass} isActivClass={button.id === isActivClass} />)

  return(
    <div className='footer_buttonGroup'>
      {allButtons}
    </div>
  )
}

export default ButtonsGroup
