import Project from "./projects"

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

    addProject(newProject) {
        if (this.projects.find((project) => project.name === newProject.name))
          return
        this.projects.push(newProject)
      }
}