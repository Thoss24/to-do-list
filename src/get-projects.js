import Projects from "./add-project";
import Todo from "./add-todo";

export default class GetProjects {
    constructor() {
        this.projects = []
    }

    setProjects(projects) {
        this.projects = projects
    }

    // retrieve projects array
    getProjects() {
        return this.projects
    }

    // search projects array and return the project matching the name of the project passed into the getSelectedProject function
    getSelectedProject(name) {
        return this.projects.find((project) => project.getProjectName() === name)
    }
}