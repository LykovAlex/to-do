import React, { useState, useEffect } from 'react';
import ToDo from './ToDo';
import tasksApi from '../../api/api';

const ToDoContainer = () => {

  const [fieldVFalue, setFieldValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [statusTasks, setStatusTasks] = useState('All');
  const [countTasks, setCountTasks] = useState(0);

  useEffect(() => {
    console.log('component was mounted')
    getTasks()
  }, []);

  async function getTasks() {
    const response = await tasksApi.get()
    console.log('Get data from server')
    if (response) setTasks([...response])
  }

  const addTask = async (e) => {
    if (e === 'Enter') {
      if (fieldVFalue) {
        const newTask = { text: fieldVFalue, isChecked: false }
        const response = await tasksApi.add(newTask)
        if (response) setTasks([...tasks, response])
        setFieldValue('');
      } else {
        console.log('Введите значение в поле ввода!')
      }
    }
  }

  const handlerChecked = async (id, status) => {
    const response = await tasksApi.updateStatus(id, { status })
    if (response) getTasks()
  }

  const changeTaskText = async (id, newText) => {
    const response = await tasksApi.updateText(id, { text: newText })
    if (response) getTasks()
  }

  const makeTasksCompleted = async (bool) => {
    const response = await tasksApi.updateStatuses({ status: bool })
    if (response) getTasks()
  }

  const handlerDelete = async (id) => {
    const response = await tasksApi.delete(id)
    if (response) {
      const newTasks = tasks.filter(task => task._id !== response)
      setTasks([...newTasks])
    }
  }

  const clearCompleted = async () => {
    const response = await tasksApi.deleteComplete()
    if (response) getTasks()
  }

  return (
    <ToDo
      fieldVFalue={fieldVFalue}
      setFieldValue={setFieldValue}
      addTask={addTask} tasks={tasks}
      handlerChecked={handlerChecked}
      handlerDelete={handlerDelete}
      clearCompleted={clearCompleted}
      makeTasksCompleted={makeTasksCompleted}
      setStatusTasks={setStatusTasks}
      statusTasks={statusTasks}
      countTasks={countTasks}
      setCountTasks={setCountTasks}
      changeTaskText={changeTaskText}
    />
  )
}

export default ToDoContainer
