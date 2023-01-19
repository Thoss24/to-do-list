import Projects from "./add-project";
import Todo from "./add-todo";
import List from "./get-projects";

export default class LocalStorage {
    // our new project and new todo's will be passed into this method to save it to localStorage allowing users to see projects and todo's after refreshing or closing browser
    static saveList(info) {
        // localStorage.setItem method uses a key value pair that will add the key 'todo-list' to the given storage object 
        localStorage.setItem('todoList', JSON.stringify(info))
    }

    static retrieveTodoList() {
        // Object.assign used to apply the stringified data of the todo list to a instance of List
        const todoList = Object.assign(new List(), JSON.parse(localStorage.getItem('todoList')))

        // create a new array inside our List populated with an instance of the Projects class (in other words a new project inside the projects array) 
        todoList.setProjects(todoList.getProjects().map((project) => Object.assign(new Projects(), project)))

        // for each project inside the projects array create a new tasks array
        todoList.getProjects().forEach((project) => project.setTasks(project.getTasks().map((todo) => Object.assign(new Todo(), todo))))

        return todoList
    }

    static addProject(project) {
        const todoList = LocalStorage.retrieveTodoList()
        todoList.createProject(project)
        LocalStorage.saveList(todoList)
        // console.log(todoList)
    }

    static addTodo(projectName, todo) {
        const todoList = LocalStorage.retrieveTodoList()
        todoList.getSelectedProject(projectName).addTask(todo)
        console.log(todoList.getSelectedProject(projectName).getTasks(todo))
        console.log(todoList.getProjects())
        LocalStorage.saveList(todoList)
        // console.log(todoList)
    }

    static deleteTask(projectName, taskName) {
        const todoList = LocalStorage.retrieveTodoList()
        todoList.getSelectedProject(projectName).deleteTask(taskName)
        LocalStorage.saveList(todoList)
    }
}