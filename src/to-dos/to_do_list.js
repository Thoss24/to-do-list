import Project from "./projects"

export default class TodoList {
    constructor() {
        this.projects = []
        this.projects.push(new Project('Inbox'))
    }
    
}