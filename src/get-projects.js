import Projects from "./add-project";
import Todo from "./add-todo";

export default class List {
    constructor() {
        this.projects = []
        this.projects.push(new Projects("Test1"))
    }

    setProjects(projects) {
        this.projects = projects
    }

    // retrieve projects array
    getProjects() {
        return this.projects
    }

    // search projects array and return the project matching the name of the project passed into the getSelectedProject function
    getSelectedProject(projectName) {
        return this.projects.find((project) => project.getProjectName() === projectName)
    }

    // search the projects array and test whether at least one element in the array has the same name as projectName (name passed in to containsProject method)
    containsProject(projectName) {
        return this.projects.some((project) => project.getProjectName() === projectName)
    }

    // check if there is a project inside projects array with the same name as newProject, if true then return, else push newProject into the projects array
    createProject(newProject) {
        if (this.projects.find((project) => project.projectName === newProject.projectName))
        return
        this.projects.push(newProject)
    }

    // using the find method, get the name of the project to be deleted and then use the splice method to remove it from the array
    deleteProject(projectName) {
        // a variable to hold the value of the project the user wants to delete
        const deleteThisProject = this.projects.find((project) => project.getProjectName() === projectName)
        // remove deleteThisProject from the projects array
        this.projects.splice(this.projects.indexOf(deleteThisProject), 1)
    }
}