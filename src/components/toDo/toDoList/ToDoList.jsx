import React from 'react';
import ToDoItemContainer from './toDoItem/ToDoItemContainer';
import './to-do-list.css';

const ToDoList = React.memo(({ tasks, statusTasks, handlerChecked, handlerDelete, setCountTasks, changeTaskText }) => {

  const filterTasks = (tasks) => {
    let newTasks = [];

    if (statusTasks === 'All') {
      newTasks = [...tasks];
    }
    if (statusTasks === 'Active') {
      newTasks = tasks.filter(task => task.isChecked === false)
    }
    if (statusTasks === 'Completed') {
      newTasks = tasks.filter(task => task.isChecked === true)
    }
    setCountTasks(newTasks.length);
    return newTasks
  }
  const filteredTasks = filterTasks(tasks);

  const allTasks = filteredTasks.map((task) =>
    <ToDoItemContainer
      text={task.text}
      key={task._id}
      id={task._id}
      isChecked={task.isChecked}
      handlerChecked={handlerChecked}
      handlerDelete={handlerDelete}
      changeTaskText={changeTaskText}
    />
  )

  return (
    <div>
      <ul className='to-do-list'>
        {allTasks}
      </ul>
    </div>
  )
})
export default ToDoList
