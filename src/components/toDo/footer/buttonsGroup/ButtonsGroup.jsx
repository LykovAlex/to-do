import React from 'react';
import Button from './button/Button';
import './button-group.css';


const ButtonsGroup = ({ buttons, changeClass, isActivClass }) => {

  const allButtons = buttons.map(button => <Button text={button.text} id={button.id} key={button.id} changeClass={changeClass} isActivClass={button.id === isActivClass} />)

  return (
    <div className='footer_button-group'>
      {allButtons}
    </div>
  )
}

export default ButtonsGroup
