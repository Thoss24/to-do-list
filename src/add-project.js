import { CreateTodo } from "./add-todo";

// Selectors
const projectInput = document.querySelector('.project-input');
const projectButton = document.querySelector('.project-button');
const projectList = document.querySelector('.project-list');
const toDoContainer = document.querySelector('.todo-container');
const toDoList = document.querySelector('.todo-list');
const projectTodoTitle = document.querySelector('.project-todo-title')

// Functions
let CreateProject = function() {
    this.projectName = projectInput.value;
    this.tasks = [];
 }

 function createProjectUI() {

    // New Project
    const newProject = new CreateProject();
    myProjects.push(newProject);

    const projectUiButton = document.createElement('button');
    projectUiButton.classList.add('project-ui-button');

    const btn = projectList.getElementsByClassName("project-ui-button");
    projectUiButton.addEventListener('click', () => {
        toDoContainer.innerHTML = newProject.tasks
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
    }

    projectUiButton.append(newProject.projectName)
    projectList.appendChild(projectUiButton);

   
    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    
 }


// Projects container
let myProjects = [];


// Event listeners
projectButton.addEventListener('click', createProjectUI);

projectButton.addEventListener('click', (e) => {
    e.preventDefault()
});



export {CreateProject, createProjectUI, myProjects}