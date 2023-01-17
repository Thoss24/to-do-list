import Todo from "./add-todo";
import Projects from "./add-project";
import List from "./get-projects";
import LocalStorage from "./local-storage";

export default class Dom {

    static loadPage() {
        Dom.addProjectUi();
        Dom.addTodoUi();
        Dom.loadProjects();
        Dom.setActive()
    };

    // A method which creates the project ui for each project inside the projects array upon loading the page
    static loadProjects() {
        LocalStorage.retrieveTodoList().getProjects().forEach((project) => {
            Dom.createNewProject(project.projectName)
        });
    }

    // Create the inner html for each project added
    static createNewProject(projectName) {
        const userProjectsList = document.getElementById('user-projects-container');

        userProjectsList.innerHTML += `
        <button class="user-project-button">
        <div class="project-name-icon"> 
        <i class="fa fa-list-ul" id="list-icon"></i>
        <span>${projectName}</span>
        </div>
        <div class="delete-project-icon">
        <i class="fa fa-times-circle"></i>
        </div>
        </button>
        `;
    };

    // Create the inner html for each todo added
    static createNewTodo(todoName) {
        const todoListContainer = document.getElementById('tasks-list-container');

        todoListContainer.innerHTML += `
        <button class="user-todo-button">
        <div class="todo-left-div"> 
        <i class="fa fa-check-circle" id="checked-icon"></i>
        <span>${todoName}</span>
        </div>
        <div class="todo-right-div">
        <input type="date">
        <i class="fa fa-times-circle"></i>
        </div>
        </button>
        `
    }

    // A method which creates an instance of the Projects class and invokes the addProject function which pushes the newly created instance into the projects array
    // Also passing the value of the input field into the addProject and createNewProject functions as the project name
    static addProject() {
        const projectNameInput = document.getElementById('project-name-input');

        const projectName = projectNameInput.value;

        if (projectName === "") {
            alert("Project name cannot be empty.")
            return
        };

        if (LocalStorage.retrieveTodoList().containsProject(projectName)) {
            alert("Project names cannot be the same.")
            projectNameInput.value = ""
            return
        };

        LocalStorage.addProject(new Projects(projectName));
        Dom.createNewProject(projectName)
    };

    static addTodo() {
        const todoInput = document.getElementById('todo-input');

        const todoName = todoInput.value;

        LocalStorage.addTodo(todoName)
        Dom.createNewTodo(todoName)
    }

    // Event listeners to display the add project input
    static addProjectUi() {
        const addProjectContainer = document.getElementById('add-project-container');
        const addProjectButton = document.getElementById('add-projects-button');
        const cancelAddProjectButton = document.getElementById('cancel-add-project-button');
        const createProjectButton = document.getElementById('create-project-button');

        addProjectButton.addEventListener('click', () => {
            addProjectContainer.style.display = "flex"
        });

        cancelAddProjectButton.addEventListener('click', (event) => {
            addProjectContainer.style.display = "none"
        });

        createProjectButton.addEventListener('click', Dom.addProject); 
    };


    // Event listeners to display the add todo input
    static addTodoUi() {
        const createTodoButton = document.getElementById('create-todo-button');
        const addTodoButton = document.getElementById('add-todo-button');
        const todoContainer = document.querySelector('.todo-container');
        const cancelTodoButton = document.getElementById('cancel-add-todo-button');
        
        addTodoButton.addEventListener('click', () => {
            todoContainer.style.display = "flex"
        });

        cancelTodoButton.addEventListener('click', () => {
            todoContainer.style.display = "none"
        });

        createTodoButton.addEventListener('click', Dom.addTodo);
    };

    static selectedProject(event) {

        const thisProject = this.children[0].children[1].textContent

        // if (event.target.classList.containsProject() {
        //     // this method is to delete project based on the class of the selected button. need to change "x" icon on projects to a button
        // };

        Dom.setActive(thisProject, this)
    }

    static setActive(name, button) {
        const projectButtons = document.querySelectorAll('.user-project-button');

        projectButtons.forEach((button) => button.classList.remove('active'));

        projectButtons.forEach((button) => button.addEventListener('click', Dom.selectedProject));

        button.classList.add('active')

        console.log(button)
    }

   

    
}