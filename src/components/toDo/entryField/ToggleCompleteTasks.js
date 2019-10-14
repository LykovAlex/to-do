import React from 'react';
import './toggleCompleteTasks.css';

const ToggleCompleteTasks = ({makeTasksCompleted, tasks}) => {

  const allChecked = tasks.every(task => task.isChecked === 'checked');

  const handlerClick = () => {
    allChecked ? makeTasksCompleted(false) : makeTasksCompleted(true);
  }

  return(
    <label className="container2">
      <input type="checkbox" onChange={handlerClick} checked={allChecked}/>
      <span className="checkmark2"></span>
    </label>
  )
}

export default ToggleCompleteTasks
