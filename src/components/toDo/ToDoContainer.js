import React, { useState, useEffect } from "react";
import ToDo from "./ToDo";
import tasksApi from "../../api/api";

const ToDoContainer = () => {
  const [fieldVFalue, setFieldValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [statusTasks, setStatusTasks] = useState("All");
  const [countTasks, setCountTasks] = useState(0);

  const getTasks = async () => {
    const response = await tasksApi.get();
    console.log("Get data from server");
    if (response) setTasks([...response]);
  };

  useEffect(() => {
    console.log("component was mounted");
    getTasks();
  }, []);

  const addTask = async e => {
    if (e === "Enter") {
      if (fieldVFalue && fieldVFalue.trim()) {
        let ckeckedFieldValue = fieldVFalue.replace(/ +(?= )/g, "");
        const newTask = { text: ckeckedFieldValue.trim(), isChecked: false };
        const response = await tasksApi.add(newTask);
        if (response) setTasks([...tasks, response]);
        setFieldValue("");
      } else {
        console.log("Required field!");
      }
    }
  };

  const handlerChecked = async (id, status) => {
    try {
      const response = await tasksApi.updateStatus(id, { status });
      console.log(response);
      const newTasks = tasks.map(task => {
        if (task._id === response._id) {
          task.isChecked = response.isChecked;
          return task
        } else {
          return task
        }
      })
      setTasks([...newTasks]);
    } catch (error) {
      console.log(error)
    }
  };

  const changeTaskText = async (id, newText) => {
    try {
      if (newText && newText.trim()) {
        const response = await tasksApi.updateText(id, { text: newText });
        const newTasks = tasks.map(task => {
          if (task._id === response._id) {
            task.text = response.text;
            return task
          } else {
            return task
          }
        })
        setTasks([...newTasks]);
      } else {
        console.log("Required field!");
      }
    } catch (error) {
      console.log(error)
    }
  };

  const makeTasksCompleted = async bool => {
    const response = await tasksApi.updateStatuses({ status: bool });
    if (response) getTasks();
  };

  const handlerDelete = async id => {
    const response = await tasksApi.delete(id);
    if (response) {
      const newTasks = tasks.filter(task => task._id !== response);
      setTasks([...newTasks]);
    }
  };

  const clearCompleted = async () => {
    const response = await tasksApi.deleteComplete();
    if (response) getTasks();
  };

  return (
    <ToDo
      fieldVFalue={fieldVFalue}
      setFieldValue={setFieldValue}
      addTask={addTask}
      tasks={tasks}
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
  );
};

export default ToDoContainer;
