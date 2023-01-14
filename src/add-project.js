export default class Projects {
    constructor(projectName) {
        this.projectName = projectName
        this.tasks = []
    }

    setProjectName(projectName) {
        this.projectName = projectName
    }

    getProjectName() {
        return this.projectName
    }

    setTasks(tasks) {
        this.tasks = tasks
    }

    getTasks() {
        return this.tasks
    }

    //Return the first task in the array that matches taskName.
    getSelectedTask(taskName) {
        // The find method returns the first element in the tasks array that matches by name
        return this.tasks.find((task) => task.getProjectName() === taskName)
    }

    //Check if the task already exists inside the tasks array.
    checkSelectedTask(taskName) {
        // The some method tests whether at least one element in the tasks array has a name equal to the name passed into the function
        return this.tasks.some((task) => task.getName() == taskName)
    }

    //Adds a new task to tasks array, if a task with the same name already exists inside the tasks array, return.
    addTask(newTask) {
        // using the find method check if a task inside the tasks array has a name equal to the name of newTask (the task added by user)
        if (this.tasks.find((task) => task.getName() === newTask.name)) return
        this.tasks.push(newTask)
    }

    deleteTask(taskName) {
        // using the filter method to create a shallow copy of the tasks array containing all tasks except the task chosen to be deleted
        this.tasks = this.tasks.filter((task) => task.name !== taskName)
    }



}