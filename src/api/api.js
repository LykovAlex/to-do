import * as axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:1234/tasks',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
});

const tasksApi = {
  async get() {
    try {
      const response = await instance.get('');
      if (response.status === 200) {
        return response.data
      }
    } catch (error) {
      console.log(error)
    }
  },
  async add(data) {
    try {
      const response = await instance.post('', data);
      if (response.status === 200) {
        return response.data
      }
    } catch (error) {
      console.log(error)
    }
  },
  async updateStatus(id, data) {
    try {
      const response = await instance.put(`/${id}/status`, data);
      if (response.status === 200) {
        return response.data
      }
    } catch (error) {
      console.log(error)
    }
  },
  async updateText(id, data) {
    try {
      const response = await instance.put(`/${id}/text`, data);
      if (response.status === 200) {
        return response.data
      }
    } catch (error) {
      console.log(error)
    }
  },
  async updateStatuses(data) {
    try {
      const response = await instance.put('', data);
      if (response.status === 200) {
        return response.data
      }
    } catch (error) {
      console.log(error)
    }
  },
  async delete(id) {
    try {
      const response = await instance.delete(`/${id}`);
      if (response.status === 200) {
        return response.data
      }
    } catch (error) {
      console.log(error)
    }
  },
  async deleteComplete() {
    try {
      const response = await instance.delete('');
      if (response.status === 200) {
        return response.data
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default tasksApi
