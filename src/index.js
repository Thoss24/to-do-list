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
submitProjectButton.addEventListener('click', (task) => {
    task.preventDefault();
    const newProjectName = projectName.value;

    const newProject = new Project(newProjectName);
    newProject.checkArray();
    
    taskUi.style.display = "flex";

    submitToDoButton.addEventListener('click', () => {
        const name = document.getElementById('submit-toDo').value;
        const date = document.getElementById('due-date').value;

        const newToDo = new toDo(name, date);
        newToDo.greet();

        newProject.toDos.push(newToDo);
        newProject.checkArray();
    });
    
});









