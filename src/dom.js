import Todo from "./add-todo";
import Projects from "./add-project";
import List from "./get-projects";
import LocalStorage from "./local-storage";

export default class Dom {

    static loadPage() {
        Dom.addProjectUi();
        // Dom.addTodoUi();
        Dom.loadProjects();
        // Dom.loadToDos();
        Dom.setActive();
        Dom.selectedTask();
        // Dom.setActiveTodo();
    };

    // A method which creates the project ui for each project inside the projects array upon loading the page
    static loadProjects() {
        LocalStorage.retrieveTodoList().getProjects().forEach((project) => { 
            Dom.createNewProject(project.projectName)
        });
    }

    // For each todo in the tasks array of a selected project, invoke the createNewTodo function
    static loadToDos(projectName) {
        // LocalStorage.retrieveTodoList().getSelectedProject(projectName).getTasks().forEach((todo) => Dom.createNewTodo(todo.name));
        LocalStorage.retrieveTodoList().getSelectedProject(projectName).getTasks().forEach((todo) => Dom.createNewTodo(todo.name, "Add date"))
    }

    // Create the inner html for each project added
    static createNewProject(projectName) {
        const userProjectsList = document.getElementById('user-projects-container');

        userProjectsList.innerHTML += `
        <button class="user-project-button" data-project-button>
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

    // Display the form to create a new todo
    static displayProjectContent(projectName) {
        const addTodoContent = document.querySelector('.add-todo-container');

        addTodoContent.innerHTML = `
        <h2 id="project-title-heading">${projectName}</h2>
        <div id="tasks-list-container"></div>
        `;

        addTodoContent.innerHTML += `
        <button id="add-todo-button"><i class="fa fa-plus"></i>Add Todo</button>
        <div class="todo-container">
        <form action="" class="todo-form">
        <input type="text" id="todo-input">
        <label for="to-do-date"></label>
        <button id="create-todo-button" type="button">
        <i class="fas fa-plus-square"></i>
        </button>
        <button id="cancel-add-todo-button" type="button">
        <i class="fa fa-times-circle"></i>
        </button>
        </form>
        </div>
        `;
        Dom.loadToDos(projectName)
    }

    // Create the inner html for each todo added
    static createNewTodo(todoName, todoDate) {
        const todoListContainer = document.getElementById('tasks-list-container');

        todoListContainer.innerHTML += `
        <button class="user-todo-button" data-todo-button>
        <div class="todo-left-div">
        <div class="clear-todo-div"> 
        <i class="fa fa-circle" id="checked-icon"></i>
        </div>
        <span class="todo-text-content">${todoName}</span>
        <input class="edit-todo-input"></input>
        <i class="fa fa-check" id="close-edit-todo"></i>
        </div>
        <div class="todo-right-div">
        <span id="todo-date">${todoDate}</span>
        <div class="delete-todo-div">
        <i class="fa fa-times"></i>
        </div>
        </div>
        </button>
        `;
        Dom.setActiveTodo()
    }

    static clearTasksList() {
        const taskListContainer = document.getElementById('tasks-list-container');
        taskListContainer.textContent = ""
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
        Dom.createNewProject(projectName);
        Dom.setActive()
    };

    // Todo methods
    static addTodo() {
        const projectTitle = document.getElementById('project-title-heading');
        const projectTitleContent = projectTitle.textContent
        const todoInput = document.getElementById('todo-input');

        const todoName = todoInput.value;

        if (todoName === "") {
            alert("Task name cannot be empty")
            return
        }

        if (LocalStorage.retrieveTodoList().getSelectedProject(projectTitleContent).checkSelectedTask(todoName)) {
            alert("Task names cannot be the same")
            return
        }

        console.log(LocalStorage.retrieveTodoList().getSelectedProject(projectTitleContent))

        LocalStorage.addTodo(projectTitleContent, new Todo(todoName, "Add date"));
        Dom.createNewTodo(todoName, "Add date");
    }

    static deleteTodo(project) {
        const projectTitle = document.getElementById('project-title-heading');
        const projectTitleContent = projectTitle.textContent;
        const taskName = project.children[0].children[1].textContent // represents the text content of the selected task (project == the task button clicked by user)

        LocalStorage.deleteTask(projectTitleContent, taskName)
        Dom.clearTasksList()
        Dom.loadToDos(projectTitleContent)
    };

    static deleteProject(projectName) {
        const projectTitle = projectName.children[0].children[1].textContent;

        LocalStorage.deleteProject(projectTitle)
      
    }

    // Event listeners to display the add project input
    static addProjectUi() {
        const addProjectContainer = document.getElementById('add-project-container');
        const addProjectButton = document.getElementById('add-projects-button');
        const cancelAddProjectButton = document.getElementById('cancel-add-project-button');
        const createProjectButton = document.getElementById('create-project-button');

        addProjectButton.addEventListener('click', () => {
            addProjectContainer.style.display = "flex";
        });

        cancelAddProjectButton.addEventListener('click', (event) => {
            addProjectContainer.style.display = "none";
        });

        createProjectButton.addEventListener('click', Dom.addProject)
    };

    // Event listeners to display the add todo input
    static addTodoUi() {
        const createTodoButton = document.getElementById('create-todo-button');
        const addTodoButton = document.getElementById('add-todo-button');
        const todoContainer = document.querySelector('.todo-container');
        const cancelTodoButton = document.getElementById('cancel-add-todo-button');
        const todoButtons = document.querySelectorAll('[data-todo-button]')
        
        addTodoButton.addEventListener('click', () => {
            todoContainer.style.display = "flex";
            addTodoButton.style.display = "none";
        });

        cancelTodoButton.addEventListener('click', () => {
            todoContainer.style.display = "none";
            addTodoButton.style.display = "flex";
        });

        createTodoButton.addEventListener('click', Dom.addTodo);

        createTodoButton.addEventListener('click', () => {
            todoContainer.style.display = "none";
            addTodoButton.style.display = "flex";
        });

        todoButtons.forEach((button) => button.addEventListener('click', Dom.selectedTask));
    };

    // Select project and tasks methods
    static selectedProject(event) {
        const projectButtons = document.querySelectorAll('.user-project-button');
        const thisProject = this.children[0].children[1].textContent;

        if (event.target.classList.contains('fa-times-circle')) {
            Dom.deleteProject(this)
            event.target.parentNode.parentNode.remove()
            return
        }
        if (event.target.classList.contains('delete-project-icon')) {
            Dom.deleteProject(this)
            event.target.parentNode.remove()
            return
        }

        Dom.setActive(thisProject, this)
    }

    static selectedTask(event) {
        if (event.target.classList.contains('delete-todo-div') || event.target.classList.contains('fa-times')) {
            Dom.deleteTodo(this)
            return
        }
        if (event.target.classList.contains('todo-text-content')) {
            Dom.editTodo(this)
        }
    }

    // Add event to each todo button to invoking the selectedTask method
    static setActiveTodo() {
        const todoButtons = document.querySelectorAll('[data-todo-button]');

        todoButtons.forEach((todoButton) => todoButton.addEventListener('click', Dom.selectedTask));
    } 

    // Set project as to have active class
    static setActive(name, button) {
        const projectButtons = document.querySelectorAll('.user-project-button');

        projectButtons.forEach((button) => button.classList.remove('active'));

        projectButtons.forEach((button) => button.addEventListener('click', Dom.selectedProject));

        button.classList.add('active');

        console.log("working")
        console.log(button)
        console.log(name)
        Dom.displayProjectContent(name)
        Dom.addTodoUi()
    }

    static editTodo(todoText) {
        const todoTextContent = todoText.children[0].children[1];
        const editTodoInput = todoText.children[0].children[2];
        const closeTodoInput = todoText.children[0].children[3];
        const projectTitle = document.getElementById('project-title-heading').textContent;
        const oldTodoName = todoTextContent.textContent;
        
        todoTextContent.style.display = "none";
        editTodoInput.style.display = "flex";
        closeTodoInput.style.display = "flex";

        closeTodoInput.addEventListener('click', () => {

            if (editTodoInput.value === "") {
                alert("Todo name cannot be empty")
                return
            };

            if (LocalStorage.retrieveTodoList().getSelectedProject(projectTitle).getSelectedTask(editTodoInput.value)) {
                alert("Todo names cannot be the same")
                return
            };

            todoTextContent.textContent = editTodoInput.value;
            closeTodoInput.style.display = "none";
            editTodoInput.style.display = "none";
            todoTextContent.style.display = "flex";
            LocalStorage.editTodo(projectTitle, oldTodoName, editTodoInput.value)
        });
    }
}



