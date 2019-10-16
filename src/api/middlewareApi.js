
  // async function getTasksFromServer() {
  //   const response = await tasksApi.get()
  //   console.log('Get data from server')
  //   if (response) setTasks([...response])
  // }

  // const addTaskToServer = async (newTask) => {
  //   const response = await tasksApi.add(newTask)
  //   if (response) setTasks([...tasks, response])
  // }

  // const updateStatus = async (id, data) => {
  //   const response = await tasksApi.updateStatus(id, data)
  //   if (response) getTasksFromServer()
  // }
  // const updateText = async (id, data) => {
  //   const response = await tasksApi.updateText(id, data)
  //   if (response) getTasksFromServer()
  // }

  // const deleteTask = async (id) => {
  //   const response = await tasksApi.delete(id)
  //   if (response) {
  //     const newTasks = tasks.filter(task => task._id !== response)
  //     setTasks([...newTasks])
  //   }
  // }

  // const updateStatuses = async (bool) => {
  //   const response = await tasksApi.updateStatuses({ status: bool })
  //   if (response) getTasksFromServer()
  // }

  // const deleteComplete = async () => {
  //   const response = await tasksApi.deleteComplete()
  //   if (response) getTasksFromServer()
  // }






    //   useEffect(() => {
  //     console.log('component was mounted')
  //     middlewareApi.getTasks()
  //   }, []);

  //   const middlewareApi = {
  //     async getTasks() {
  //         const response = await tasksApi.get()
  //         console.log('Get data from server')
  //         if (response) setTasks([...response])
  //     },
  //     async addTask(newTask) {
  //         const response = await tasksApi.add(newTask)
  //         if (response) setTasks([...tasks, response])
  //     },
  //     async updateStatus(id, data) {
  //         const response = await tasksApi.updateStatus(id, data)
  //         if (response) this.getTasks()
  //     },
  //     async updateText(id, data) {
  //         const response = await tasksApi.updateText(id, data)
  //         if (response) this.getTasks()
  //     },
  //     async deleteTask(id) {
  //         const response = await tasksApi.delete(id)
  //         if (response) {
  //             const newTasks = tasks.filter(task => task._id !== response)
  //             setTasks([...newTasks])
  //         }
  //     },
  //     async updateStatuses(bool) {
  //         const response = await tasksApi.updateStatuses({ status: bool })
  //         if (response) this.getTasks()
  //     },
  //     async deleteComplete() {
  //         const response = await tasksApi.deleteComplete()
  //         if (response) this.getTasks()
  //     }
  // }


  //   const addTask = (e) => {
  //     if (e === 'Enter') {
  //       if (fieldVFalue) {
  //         middlewareApi.addTask({text: fieldVFalue, isChecked: false});
  //         setFieldValue('');
  //       } else {
  //         console.log('Введите значение в поле ввода!')
  //       }
  //     }
  //   }

  //   const handlerChecked = (id, status) => {
  //     middlewareApi.updateStatus(id, { status })
  //   }

  //   const changeTaskText = (id, newText) => {
  //     middlewareApi.updateText(id, { text: newText })
  //   }

  //   const makeTasksCompleted = (bool) => {
  //     middlewareApi.updateStatuses(bool)
  //   }

  //   const handlerDelete = (id) => {
  //     middlewareApi.deleteTask(id)
  //   }

  //   const clearCompleted = () => {
  //     middlewareApi.deleteComplete()
  //   }

