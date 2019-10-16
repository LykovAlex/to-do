import React,{useState, useEffect} from 'react';
import ToDo from './ToDo';
import {tasksApi} from '../../api/api';

const ToDoContainer = () => {

  const [fieldVFalue, setFieldValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [statusTasks, setStatusTasks] = useState('All');
  const [countTasks, setCountTasks] = useState(0);


    useEffect(()=> {
      console.log('component was mounted')
      getTasksFromServer()
    }, []);

    // useEffect(()=> {
    //   console.log('component was mounted2');
    //   console.log('component was update');
    //   getTasksFromServer();
    // }, [tasks.length]);


  async function getTasksFromServer() {
    const response = await tasksApi.getTasks()
    console.log('Get data from server')
    if(response) setTasks([...response])
  }
  
  const addTaskToServer = async (newTask) => {
    const response = await tasksApi.addTask(newTask)
     if(response) setTasks([...tasks, response])
    // getTasksFromServer()
  }

  const changeChecked = async (id, task) => {
    const response = await tasksApi.changeCheckedTask(id, task)
    if(response) getTasksFromServer()
  }
  const changeText = async (id,task) => {
    const response = await tasksApi.changeTextTask(id, task)
      if(response) getTasksFromServer()
  }

  const deleteTask = async (id) => {
    const response = await tasksApi.deleteTask(id)
    // getTasksFromServer()
    if(response) {
      const newTasks = tasks.filter(task => task._id !== response)
      setTasks([...newTasks])
    }
  }

  const completeAllTasks = async () => {
    const response = await tasksApi.changeCheckedTasksTrue()
     if(response) getTasksFromServer()
  }

  const incompleteAllTasks = async () => {
    const response = await tasksApi.changeCheckedTasksFalse()
     if(response) getTasksFromServer()
  }

  const deleteCompleteTask = async () => {
    const response = await tasksApi.deleteCompleteTask()
    if(response) getTasksFromServer()
  }

const addTask = (e) => {
  if(e === 'Enter') {
    if(fieldVFalue){
      const newTask = {
        text: fieldVFalue,
        isChecked: false
      }
      addTaskToServer(newTask);
      setFieldValue('');
    } else {
    console.log('Введите значение в поле ввода!')
    }
  }
}

  const handlerChecked =(id) => {
    let task = tasks.filter(task =>task._id === id);
    task = task[0];
    task.isChecked = !task.isChecked
    changeChecked(id,task);
  }

  const handlerDelete = (id) => {
    deleteTask(id);
  }

  const showActiveTasks = () => {
    setStatusTasks('Active')
  }

  const showCompletedTasks = () => {
    setStatusTasks('Completed')
  }

  const showAllTasks = () => {
    setStatusTasks('All')
  }

  const clearCompleted = () => {
    deleteCompleteTask();
  }

  const makeTasksCompleted = (bool) => {
    if(bool){
      completeAllTasks();
    }else{
      incompleteAllTasks();
    }
  }

  const changeTaskText = (id, newText) => {
    let task = tasks.filter(task =>task._id === id);
    task = task[0];
    task.text = newText;
    changeText(id, task);
  }


  return(
    <ToDo
      fieldVFalue={fieldVFalue} setFieldValue={setFieldValue} addTask={addTask} tasks={tasks}
      handlerChecked={handlerChecked} handlerDelete={handlerDelete} showActiveTasks={showActiveTasks}
      showCompletedTasks={showCompletedTasks} showAllTasks={showAllTasks} clearCompleted={clearCompleted}
      makeTasksCompleted={makeTasksCompleted} setStatusTasks={setStatusTasks} statusTasks={statusTasks}
      countTasks={countTasks} setCountTasks={setCountTasks} changeTaskText={changeTaskText}
    />
  )
}

export default ToDoContainer
