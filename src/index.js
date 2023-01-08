import {CreateTodo } from "./add-todo";
import {CreateProject} from "./add-project";

//Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');
const todoDateInput = document.getElementById('to-do-date');
const toDoContainer = document.querySelector('.todo-container');
const projectInput = document.querySelector('.project-input');
const projectButton = document.querySelector('.project-button');
const projectList = document.querySelector('.project-list');
const projectTodoTitle = document.querySelector('.project-todo-title')

// Projects container
let myProjects = [];

//Event listeners
toDoButton.addEventListener('click', addTodo);

toDoButton.addEventListener('click', (event) => {
    event.preventDefault();
}); 

projectButton.addEventListener('click', createProjectUI);

projectButton.addEventListener('click', (e) => {
    e.preventDefault()
});

// Functions

function createProjectUI() {

    // New Project
    const newProject = new CreateProject(projectInput.value);
    myProjects.push(newProject);

    const projectUiButton = document.createElement('button');
    projectUiButton.classList.add('project-ui-button');

    const btn = projectList.getElementsByClassName("project-ui-button");
    projectUiButton.addEventListener('click', () => {
        projectTodoTitle.textContent = newProject.projectName;
       });

    // Loop through the buttons and add the active class to the current/clicked button
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function() {
        
        let current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
    });
    };
    projectUiButton.append(newProject.projectName)
    projectList.appendChild(projectUiButton);
 };


function addTodo(e) {

   const projectUiButton = document.querySelector('.project-ui-button.active');

   const newTodo = new CreateTodo(toDoInput.value, todoDateInput.value);

   const checked = document.createElement('input');
   checked.type = "checkbox";
   newTodo.checked = checked

   for (let i = 0; i < myProjects.length; i++) {

        if (projectUiButton.textContent == myProjects[i].projectName) { // add condition so that 2 projects cannot have the same name
         //   const newTodoValues = [newTodo.title, newTodo.date, newTodo.checked]

            myProjects[i].tasks.push(newTodo);

            const todoItemContainer = document.createElement('button');
            toDoContainer.classList.add('todo-item-container');

            toDoContainer.append(todoItemContainer)
        }; 
   };
};


