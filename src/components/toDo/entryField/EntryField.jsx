import React from 'react';
import ToggleCompleteTasks from './ToggleCompleteTasks';
import './entry-field.css';

const EntryField = ({ fieldVFalue, setFieldValue, addTask, countTasks, makeTasksCompleted, tasks }) => {

  return (
    <div className='entry-field'>
      <div className='complete-button'>
        {countTasks > 0 && <ToggleCompleteTasks makeTasksCompleted={makeTasksCompleted} tasks={tasks} />}
      </div>
      <input
        value={fieldVFalue} onKeyPress={(e) => addTask(e.key)} onChange={(e) => setFieldValue(e.target.value)}
        type="text" placeholder='What needs to be done ?' className='entry-field_input'
      />
    </div>
  )
}

export default EntryField
