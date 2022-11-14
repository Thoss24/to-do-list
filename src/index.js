import toDo from "./to-dos/to-do";
import Project from "./to-dos/projects";
import "./styles/to-dos.css";

// DOM elements
const toDoButton = document.getElementById('to-do-button');
const taskUi = document.getElementById('task-container');
const addTaskButton = document.getElementById('add-task-button');
const cancelTaskButton = document.getElementById('cancel-task-button')







//Event listener to display add task ui
addTaskButton.addEventListener('click', () => {
    taskUi.style.display = "flex";
    cancelTaskButton.style.display = "flex";
 });

 //Event listener to cancel add task
 cancelTaskButton.addEventListener('click', (e) => {
    taskUi.style.display = "none";
    cancelTaskButton.style.display = "none";
 })

// Event listener to generate new task 
toDoButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('submit-toDo').value;
    const date = document.getElementById('due-date').value;
    
    taskUi.style.display = "none";

    const newToDo = new toDo(name, date)
    newToDo.greet()
});


// make it so that to-dos are unique to each project. i.e, different to-dos for each project

// similar logic to produce new Projects and then append tasks to those new projects.

// add make project section. make new tasks only appear within new project









