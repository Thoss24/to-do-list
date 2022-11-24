import Project from "./projects"
import toDo from "./to-do"

export default class TodoList {
    constructor() {
        this.projects = []
        this.projects.push(new Project('Inbox'))
    }
    
    setProjects(project) {
        this.project = project
    }

    retrieveProjects() {
        return this.projects
    }

    retrieveProjectName(projectName) {
        return this.projects.find((project) => project.getToDoName() === projectName)
    }

    contains(projectName) {
        return this.projects.some((project) => project.getToDoName() === projectName)
    }

    addProject(newProject) {
        if (this.projects.find((project) => project.name === newProject.name))
          return
        this.projects.push(newProject)
      }

    checkProjects() {
        console.log(this.projects)
      }
}