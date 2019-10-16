import React from 'react';
import EntryField from './entryField/EntryField';
import ToDoList from './toDoList/ToDoList';
import Title from './title/Title';
import Footer from './footer/Footer';
import './to-do.css';

const ToDo = (props) => {

  return (
    <div className='to-do'>
      <Title />
      <div className="to-do-container">
        <EntryField
          makeTasksCompleted={props.makeTasksCompleted}
          countTasks={props.tasks.length}
          addTask={props.addTask}
          fieldVFalue={props.fieldVFalue}
          setFieldValue={props.setFieldValue}
          tasks={props.tasks}
        />
        <ToDoList
          tasks={props.tasks}
          statusTasks={props.statusTasks}
          handlerChecked={props.handlerChecked}
          handlerDelete={props.handlerDelete}
          setCountTasks={props.setCountTasks}
          changeTaskText={props.changeTaskText}
        />
        {props.tasks.length > 0 && (
          <Footer
            clearCompleted={props.clearCompleted}
            countTasks={props.countTasks}
            setStatusTasks={props.setStatusTasks}
          />
        )}
      </div>
    </div>
  )
}

export default ToDo
