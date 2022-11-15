import toDo from "./to-dos/to-do";
import Project from "./to-dos/projects";
import "./styles/to-dos.css";

// DOM elements
const submitToDoButton = document.getElementById('submit-to-do-button');
const taskUi = document.getElementById('task-container');
const addTaskButton = document.getElementById('add-task-button');
const cancelTaskButton = document.getElementById('cancel-task-button');
const addProjectButton = document.getElementById('add-project');
const projectName = document.getElementById('project-name');
const cancelProjectButton = document.getElementById('cancel-add-project');
const submitProjectButton = document.getElementById('submit-project-button');

// Event listener to generate new Project and to display add project name
addProjectButton.addEventListener('click', () => {
    projectName.style.display = "flex";
    cancelProjectButton.style.display = "flex";
    submitProjectButton.style.display = "flex";
});

//Event listener to cancel add project
cancelProjectButton.addEventListener('click', () => {
    projectName.style.display = "none";
    cancelProjectButton.style.display = "none";
    submitProjectButton.style.display = "none";
    taskUi.style.display = "none"
});

//Event listener to generate new Project
submitProjectButton.addEventListener('click', (e) => {
    e.preventDefault();
    const newProjectName = projectName.value;

    const newProject = new Project(newProjectName);
    newProject.checkName();

    const name = document.getElementById('submit-toDo').value;
    const date = document.getElementById('due-date').value;
    
    taskUi.style.display = "flex";

    const newToDo = new toDo(name, date)
    newToDo.greet()
});

//Event listener to display add task ui
addTaskButton.addEventListener('click', () => {
    taskUi.style.display = "flex";
    cancelTaskButton.style.display = "flex";
 });

 //Event listener to cancel add task
 cancelTaskButton.addEventListener('click', () => {
    taskUi.style.display = "none";
    cancelTaskButton.style.display = "none";
 })

// Event listener to generate new task 
submitToDoButton.addEventListener('click', (e) => {
    
});




// make it so that to-dos are unique to each project. i.e, different to-dos for each project

// similar logic to produce new Projects and then append tasks to those new projects.

// add make project section. make new tasks only appear within new project









