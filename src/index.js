import toDo from "./to-dos/to-do";
import Project from "./to-dos/projects";
import "./styles/to-dos.css";

// DOM elements
const toDoButton = document.getElementById('to-do-button');
const taskUi = document.getElementById('task-container');
const addTaskButton = document.getElementById('add-task-button');

// Event listener to generate new task 
toDoButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('submit-toDo').value;
    const date = document.getElementById('due-date').value;

    const newToDo = new toDo(name, date)
    newToDo.greet()
});

//Event listener to display add task ui
addTaskButton.addEventListener('click', () => {
   taskUi.style.display = "flex";
});





