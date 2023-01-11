import {CreateTodo } from "./add-todo";
import {CreateProject} from "./add-project";


const dom = (() => {

    // Projects container
    let myProjects = [];

    //Selectors
    const toDoInput = document.querySelector('.todo-input');
    const toDoButton = document.querySelector('.todo-button');
    const toDoList = document.querySelector('.todo-list');
    const todoDateInput = document.getElementById('to-do-date');
    const toDoContainer = document.querySelector('.todo-container');
    const projectInput = document.querySelector('.project-input');
    const projectButton = document.querySelector('.project-button');
    const projectList = document.querySelector('.project-list');
    const projectTodoTitle = document.querySelector('.project-todo-title');
    const projectUiButton = document.querySelector('.project-ui-button.active');

    function createProjectUI() {
        // New Project
        const newProject = new CreateProject(projectInput.value);
        myProjects.push(newProject);
    
        const projectUiButton = document.createElement('button');
        projectUiButton.classList.add('project-ui-button');
    
        const btn = projectList.getElementsByClassName("project-ui-button");

        projectUiButton.addEventListener('click', () => {

            toDoContainer.innerHTML = 
            `<div class="tasks-list" id="tasks-list"></div>`

            // toDoContainer.innerHTML = newProject.tasks
            newProject.tasks.forEach(element => {
                const tasksList = document.getElementById('tasks-list');
                tasksList.innerHTML += `
                <button class="button-task" data-task-button>
                <div class="left-task-panel">
                <i class="far fa-circle"></i>
                <p class="input-title-text">${element.title}</p>
                </div>
                <div class="right-task-panel">
                <p class="input-date">${element.date}</p>
                <i class="fa fa-pencil"></i>
                <i class="fas fa-times"></i>
                </div>
                </button>`
                editTodo()
            });
            projectTodoTitle.textContent = newProject.projectName;
           });
    
        // Loop through the buttons and add the active class to the current/clicked button
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            // If there's no active class
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            };
            // Add the active class to the current/clicked button
            this.className += " active";
        });
        };

        projectUiButton.append(newProject.projectName)
        projectList.appendChild(projectUiButton);
        editTodo()
     };
    
    
    function addTodo(e) {
        const projectUiButton = document.querySelector('.project-ui-button.active');
        const newTodo = new CreateTodo(toDoInput.value, todoDateInput.value);

        toDoContainer.innerHTML = 
        `<div class="tasks-list" id="tasks-list"></div>`
        const tasksList = document.getElementById('tasks-list');
    
       for (let i = 0; i < myProjects.length; i++) {
            if (projectUiButton.textContent == myProjects[i].projectName) { // add condition so that 2 projects cannot have the same name
                myProjects[i].tasks.push(newTodo);
                console.log(myProjects[i].tasks);
                myProjects[i].tasks.forEach(element => {
                    tasksList.innerHTML += `
                    <button class="button-task" data-task-button>
                    <div class="left-task-panel">
                    <i class="far fa-circle"></i>
                    <p class="input-title-text">${element.title}</p>
                    </div>
                    <div class="right-task-panel">
                    <p class="input-date">${element.date}</p>
                    <i class="fa fa-pencil"></i>
                    <i class="fas fa-times"></i>
                    </div>
                    </button>`
                });
            };
       }; 
       editTodo()
    };

    function editTodo() {
        const editTodoFormContainer = document.getElementById('edit-todo-form-container');
        const editTodoTitle = document.getElementById('edit-todo-title');
        const editTodoDate = document.getElementById('edit-todo-date');
        const closeEditTodoButton = document.getElementById('close-edit-todo-button');
        const editTodoBtn = document.getElementsByClassName('fa fa-pencil')

        for (let i = 0; i < editTodoBtn.length; i++) {
            editTodoBtn[i].addEventListener('click', () => {
            editTodoFormContainer.style.display = "flex"
            editTodoTitle // i think we need to copy for loop and foreach loop from addTodo function in order to access each todo title and date so its value can be edited.
        })
       };
    };
    

    //Event listeners
    toDoButton.addEventListener('click', addTodo);

    toDoButton.addEventListener('click', (event) => {
        event.preventDefault();
    }); 

    projectButton.addEventListener('click', createProjectUI);

    projectButton.addEventListener('click', (e) => {
        e.preventDefault()
    });

    
    return {
        createProjectUI,
        addTodo,
        editTodo
    };

})();

