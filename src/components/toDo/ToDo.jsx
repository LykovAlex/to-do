import React from 'react';
import EntryField from './entryField/EntryField';
import ToDoList from './toDoList/ToDoList';
import Title from './title/Title';
import Footer from './footer/Footer';
import './toDo.css';

const ToDo = (props) => {
  console.log(props.tasks);
  return(
  <div className='toDo'>
    <Title/>
    <div className="toDoContainer">
      <EntryField
        makeTasksCompleted={props.makeTasksCompleted} countTasks={props.tasks.length}
        addTask={props.addTask} fieldVFalue={props.fieldVFalue} setFieldValue={props.setFieldValue}
        tasks={props.tasks}
      />
    <ToDoList
      tasks={props.tasks} statusTasks={props.statusTasks}
      handlerChecked={props.handlerChecked} handlerDelete={props.handlerDelete}
      setCountTasks={props.setCountTasks} changeTaskText={props.changeTaskText}
    />
  {props.tasks.length > 0 &&(
      <Footer
        clearCompleted={props.clearCompleted} countTasks={props.countTasks} showActiveTasks={props.showActiveTasks}
        showCompletedTasks={props.showCompletedTasks} showAllTasks={props.showAllTasks} setStatusTasks={props.setStatusTasks}
      />
  )}
    </div>
  </div>
  )
}

export default ToDo
