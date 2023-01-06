import {CreateProject, myProjects} from "./add-project";

//Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');
const todoDateInput = document.getElementById('to-do-date');

//Event listeners
toDoButton.addEventListener('click', addTodo);

toDoButton.addEventListener('click', (event) => {
    event.preventDefault();
}); 

// Functions
let CreateTodo = function(title, date) {
    this.title = toDoInput.value
    this.date = todoDateInput.value
}

function addTodo(e) {
    const projectUiButton = document.querySelector('.project-ui-button.active');
   // ToDo DIV
   const todoDiv = document.createElement('div');
   todoDiv.classList.add("todo");

   // New Todo
   const newTodo = new CreateTodo();
   todoDiv.append(newTodo.title);

   for (let i = 0; i < myProjects.length; i++) {
        if (projectUiButton.textContent == myProjects[i].projectName) { // add condition so that 2 projects cannot have the same name
            myProjects[i].tasks.push(newTodo)
        };
        console.log(myProjects[i].tasks)
        //is "active" and text content is equal to myProjects[i].projectName push newToDo to myProjects[i].tasks
   };

   // Checked button
//    const completedButton = document.createElement('button');
//    completedButton.innerHTML = '<i class="fas fa-check"></i>';
//    completedButton.classList.add('complete-btn');
//    todoDiv.appendChild(completedButton);

   // Trash button
//    const trashButton = document.createElement('button');
//    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//    trashButton.classList.add('complete-btn');
//    todoDiv.appendChild(trashButton);

   // Append to list
   toDoList.appendChild(todoDiv);
} 

 
export {addTodo, CreateTodo};