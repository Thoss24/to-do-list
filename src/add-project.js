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
        this.tasks =tasks
    }

    getTasks() {
        return this.tasks
    }

    getSelectedTask(taskName) {
        // The find method returns the first element in the tasks array that matches by name
        return this.tasks.find((task) => task.getProjectName() === taskName)
    }
}