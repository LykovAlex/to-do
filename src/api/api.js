import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:1234/tasks',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    }
});

export const tasksApi = {
  getTasks(){
    return instance.get('/')
  },
  addTask(data){
    return instance.post('/create',data)
  },
  changeCheckedTask(id, data){
    return instance.put(`/${id}/update`, data)
  },
  changeTextTask(id, data){
    return instance.put(`/${id}/update`, data)
  },
  changeCheckedTasksTrue(){
    return instance.put('/update_true');
  },
  changeCheckedTasksFalse(){
    return instance.put('/update_false');
  },
  deleteTask(id){
    return instance.delete(`/${id}/delete`)
  },
  deleteCompleteTask(){
    return instance.delete('/delete');
  }
}
