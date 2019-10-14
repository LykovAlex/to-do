import React from 'react';
import ToDoItemContainer from './toDoItem/ToDoItemContainer';
import './toDoList.css';

const ToDoList = React.memo(({tasks, statusTasks, handlerChecked, handlerDelete, setCountTasks, changeTaskText}) => {

  const  filterTasks = (tasks) => {
    let newTasks = [];

    if(statusTasks === 'All') {
      newTasks = [...tasks];
    }
    if(statusTasks === 'Active'){
      newTasks = tasks.filter(task => task.isChecked === '')
    }
    if(statusTasks === 'Completed'){
      newTasks = tasks.filter(task => task.isChecked === 'checked')
    }
    setCountTasks(newTasks.length);
    return newTasks
  }
  const filteredTasks = filterTasks(tasks);

  const allTasks = filteredTasks.map((task)=>
    <ToDoItemContainer
      text={task.text} key={task.id} id={task.id} isChecked={task.isChecked}
      handlerChecked={handlerChecked} handlerDelete={handlerDelete}
      changeTaskText={changeTaskText}
    />
  )

  return(
    <div>
      <ul className='toDoList'>
        {allTasks}
      </ul>
    </div>
  )
})
export default ToDoList
