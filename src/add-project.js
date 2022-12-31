import { CreateTodo } from "./add-todo";

// Selectors
const projectInput = document.querySelector('.project-input');
const projectButton = document.querySelector('.project-button');
const projectList = document.querySelector('.project-list');
const toDoList = document.querySelector('.todo-list');

// Functions
let CreateProject = function() {
    this.projectName = projectInput.value;
    this.tasks = ["dummy data"];
 }

 function createProjectUI() {
    // Create project icon

    // const projectDiv = document.createElement('div');
    // projectDiv.classList.add('project-div');

    // New Project
    const newProject = new CreateProject();
    myProjects.push(newProject);
    // newProject.classList.add('new-project');
    // document.querySelector('.new-project').innerHTML = newProject.projectName
    const projectUiButton = document.createElement('button');
    projectUiButton.classList.add('projectUiButton');

    const btn = projectList.getElementsByClassName("projectUiButton");

    // Loop through the buttons and add the active class to the current/clicked button
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function() {
        
        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
    });
    }

    projectUiButton.append(newProject.projectName, newProject.tasks)
    projectList.appendChild(projectUiButton);

    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    // projectDiv.appendChild(trashButton);

    // Append to list
    // projectList.appendChild(projectDiv);
 }

// Projects container
let myProjects = [];
 
 // work around error in the console. we are on the right track though
 

//  function createProjectUi(event) {
//      // prevent page refresh
//      event.preventDefault();
//      // Create project icon
//      const projectDiv = document.createElement('div');
//      projectDiv.classList.add('project-div');
//      // New Project
//      const newProject = document.createElement('li');
//      newProject.innerText = projectInput.value;
//      newProject.classList.add('new-project');
//      projectDiv.appendChild(newProject);
//       // Trash button
//       const trashButton = document.createElement('button');
//       trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//       trashButton.classList.add('trash-btn');
//       projectDiv.appendChild(trashButton);
//       // Append to list
//       projectList.appendChild(projectDiv);
// }


// Event listeners
projectButton.addEventListener('click', createProjectUI);

projectButton.addEventListener('click', (e) => {
    e.preventDefault()
});

projectButton.addEventListener('click', () => {
    for (let i in myProjects) {
        console.log(myProjects[i])
    }
});

// object is appending to screen, but we still need to figure out how to interact with it

// Selectors
// const projectUi = document.querySelector('.new-project');

// projectUi.addEventListener('click', () => {
//     console.log("hello")
// });

export {CreateProject, createProjectUI}