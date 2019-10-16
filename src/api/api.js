import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:1234/tasks',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    }
});

// export const tasksApi = {
//   getTasks(){
//     return instance.get('/')
//   },
//   addTask(data){
//     return instance.post('/create',data)
//   },
//   changeCheckedTask(id, data){
//     return instance.put(`/${id}/update`, data)
//   },
//   changeTextTask(id, data){
//     return instance.put(`/${id}/update`, data)
//   },
//   changeCheckedTasksTrue(){
//     return instance.put('/update_true');
//   },
//   changeCheckedTasksFalse(){
//     return instance.put('/update_false');
//   },
//   deleteTask(id){
//     return instance.delete(`/${id}/delete`)
//   },
//   deleteCompleteTask(){
//     return instance.delete('/delete');
//   }
// }

export const tasksApi = {
   async getTasks(){
     try {
      const response = await instance.get('/');
      if(response.status === 200){
        return response.data
      }
     } catch (error) {
        console.log(error)
     }
  },
  async addTask(data){
    try {
      const response = await instance.post('/create',data);
      if(response.status === 200){
        return response.data
      }
    } catch (error) {
        console.log(error)
    }  
  },
  async changeCheckedTask(id, data){
    try {
      const response = await instance.put(`/${id}/update`, data);
      if(response.status === 200){
        return response.data
      }
    } catch (error) {
        console.log(error)
    }
  },
  async changeTextTask(id, data){
    try {
      const response = await instance.put(`/${id}/update`, data);
      if(response.status === 200){
        return response.data
      }
    } catch (error) {
        console.log(error)
    }
  },
  async changeCheckedTasksTrue(){
    try {
      const response = await instance.put('/update_true');
      if(response.status === 200){
        return response.data
      }
    } catch (error) {
        console.log(error)
    }
  },
  async changeCheckedTasksFalse(){
    try {
      const response = await instance.put('/update_false');
      if(response.status === 200){
        return response.data
      }
    } catch (error) {
        console.log(error)
    }
  },

  async deleteTask(id){
    try {
      const response = await instance.delete(`/${id}/delete`);
      if(response.status === 200){
        return response.data
      }
    } catch (error) {
        console.log(error)
    }
  },
  async deleteCompleteTask(){
    try {
      const response = await instance.delete('/delete');
      if(response.status === 200){
        return response.data
      }
    } catch (error) {
      console.log(error)
    }
  }
}
