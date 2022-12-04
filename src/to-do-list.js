import Projects from "./project";
import toDo from "./to-do";

export default class ToDoList {
    constructor() {
        this.projectsArray = [];
    }

    setProjectsArray(projectsArray) {
        this.projectsArray = projectsArray
    }

    getProjectsArray() {
        return this.projectsArray
    }

    getProjectFromArray(projectTitle) {
        return this.projectsArray.find((project) => project.getProjectTitle() === projectTitle) 
    }

    addProjectToArray(newProject) {
        if (this.projectsArray.some((project) => project.name === newProject.name))
        return
        this.projectsArray.push(newProject)
    }


}