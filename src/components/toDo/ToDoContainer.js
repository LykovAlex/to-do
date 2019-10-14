import React,{useState} from 'react';
import ToDo from './ToDo';

const ToDoContainer = () => {

  const [fieldVFalue, setFieldValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [id,setId] = useState(1);
  const [statusTasks, setStatusTasks] = useState('All');
  const [countTasks, setCountTasks] = useState(0);

  const addTask = (e) => {
    if(e === 'Enter') {
      if(fieldVFalue){
        setId(id + 1)
        const newTask = {
          text: fieldVFalue,
          id: id,
          isChecked: ''
        }
        setTasks(
          [...tasks, newTask]
        )
        setFieldValue('');
      } else {
      console.log('Введите значение в поле ввода!')
    }
  }
}

  const handlerChecked =(id) => {
    const newTasks = tasks.map(task => {
      if(task.id === id){
        if(task.isChecked === 'checked'){
          task.isChecked = '';
        } else{
          task.isChecked = 'checked'
        }
       return task
      } else{
        return task
      }
    })
      return(
        setTasks(
          [...newTasks]
        )
      )
  }

  const handlerDelete = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks([...newTasks]);
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
    const clearCompletedTasks = tasks.filter(task => task.isChecked === '');
    setTasks([...clearCompletedTasks]);
  }

  const makeTasksCompleted = (bool) => {
    const isChecked = bool ? 'checked' : '';
    const completedTasks = tasks.map(task => {
      if(task.isChecked === isChecked){
        return task;
      } else {
        task.isChecked = isChecked;
        return task
      }
    });
    setTasks([...completedTasks]);
  }

  const changeTaskText = (id, newText) => {
    const updatedTasks = tasks.map(task => {
      if(task.id === id){
        task.text = newText;
        return task
      } else{
        return task
      }
    })
    setTasks([...updatedTasks])
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
