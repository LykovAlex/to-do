import React from 'react';
import ButtonsGroupContainer from './buttonsGroup/ButtonsGroupContainer';
import './footer.css'

const Footer = ({ countTasks, clearCompleted, setStatusTasks }) => {

  return (
    <div className='footer'>
      <div>{countTasks} items left</div>
      <ButtonsGroupContainer setStatusTasks={setStatusTasks} />
      <button onClick={clearCompleted} className='footer_button'>Clear completed</button>
    </div>
  )
}

export default Footer
