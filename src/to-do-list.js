import Projects from "./project";
import toDo from "./to-do";

class ToDoList {
    constructor() {
        this.projectsArray = [];
        this.projectsArray.push(new Projects("test"))
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


}