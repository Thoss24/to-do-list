import {CreateTodo } from "./add-todo";
import {CreateProject} from "./add-project";

// Projects container
let myProjects = [];


const dom = (() => {

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
            for (let i = 0; i < newProject.tasks.length; i++) {
                const tasksList = document.getElementById('tasks-list');
                tasksList.innerHTML += `
                <button class="button-task" data-task-button>
                <div class="left-task-panel">
                <i class="far fa-circle"></i>
                <p class="task-content">${newProject.tasks}</p>
                <input type="text" class="input-task-name" data-input-task-name>
                </div>
                <div class="right-task-panel">
                <p class="due-date" id="due-date">DATE HERE</p>
                <input type="date" class="input-due-date" data-input-due-date>
                <i class="fas fa-times"></i>
                </div>
                </button>`
            }
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
     };
    
    
    function addTodo(e) {
        const projectUiButton = document.querySelector('.project-ui-button.active');
        toDoContainer.innerHTML = 
        `<div class="tasks-list" id="tasks-list"></div>`

       const newTodo = new CreateTodo(toDoInput.value, todoDateInput.value);
    //    projectUiButton.classList.contains('active')
    
       for (let i = 0; i < myProjects.length; i++) {
            if (projectUiButton.textContent == myProjects[i].projectName) { // add condition so that 2 projects cannot have the same name
                const newTodoValues = [newTodo.title, newTodo.date, newTodo.completed]
                myProjects[i].tasks.push(newTodoValues);
                // const tasksList = document.getElementById('tasks-list');
                // tasksList.innerHTML += `
                // <button class="button-task" data-task-button>
                // <div class="left-task-panel">
                // <i class="far fa-circle"></i>
                // <p class="task-content">${newTodo.title}</p>
                // <input type="text" class="input-task-name" data-input-task-name>
                // </div>
                // <div class="right-task-panel">
                // <p class="due-date" id="due-date">${newTodo.date}</p>
                // <input type="date" class="input-due-date" data-input-due-date>
                // <i class="fas fa-times"></i>
                // </div>
                // </button>`
                toDoContainer.innerHTML = myProjects[i].tasks
            }
       };
    };


   function displayProjectTodo() {
    const projectUiButton = document.querySelector('.project-ui-button.active');
    toDoContainer.innerHTML = 
    `<div class="tasks-list" id="tasks-list"></div>`

    if (projectUiButton.classList.contains('active')) {
        const tasksList = document.getElementById('tasks-list');
        tasksList.innerHTML += `
        <button class="button-task" data-task-button>
        <div class="left-task-panel">
          <i class="far fa-circle"></i>
          <p class="task-content">${myProjects.tasks}</p>
          <input type="text" class="input-task-name" data-input-task-name>
        </div>
        <div class="right-task-panel">
          <p class="due-date" id="due-date">DATE HERE</p>
          <input type="date" class="input-due-date" data-input-due-date>
          <i class="fas fa-times"></i>
        </div>
      </button>`
    }
   }

    //Event listeners
    toDoButton.addEventListener('click', addTodo);

    toDoButton.addEventListener('click', (event) => {
        event.preventDefault();
    }); 

    projectButton.addEventListener('click', createProjectUI)

    // toDoButton.addEventListener('click', displayProjectTodo)

    projectButton.addEventListener('click', (e) => {
        e.preventDefault()
    });

    

    return {
        createProjectUI,
        addTodo, 
        displayProjectTodo
    };

})();

