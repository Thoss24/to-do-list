import { CreateProject } from "./add-project";

//Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');

//Event listeners
toDoButton.addEventListener('click', addTodo);

toDoButton.addEventListener('click', (event) => {
    event.preventDefault();

}); 

let CreateTodo = function(title) {
    this.title = toDoInput.value
}

function addTodo(e) {
   // ToDo DIV
   const todoDiv = document.createElement('div');
   todoDiv.classList.add("todo");

   // New Todo
   const newTodo = new CreateTodo()
   todoDiv.append(newTodo.title)

   // Checked button
   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   completedButton.classList.add('complete-btn');
   todoDiv.appendChild(completedButton);

   // Trash button
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
   trashButton.classList.add('complete-btn');
   todoDiv.appendChild(trashButton);

   // Append to list
   toDoList.appendChild(todoDiv);
} 

 
export {addTodo, CreateTodo};