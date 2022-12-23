//Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');

//Event listeners
toDoButton.addEventListener('click', addTodo);

//Functions
toDoButton.addEventListener('click', (event) => {
    event.preventDefault();
    myProjects.push(new CreateProject());
}); // FIGURE OUT HOW TO PUSH TASKS TO PROJECT ARRAY

let CreateTodo = function() {
    this.title = toDoInput.value;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority
 }

function addTodo(e) {
   // ToDo DIV
   const todoDiv = document.createElement('div');
   todoDiv.classList.add("todo");
   // Create LI
   const newTodo = document.createElement('li');
   newTodo.innerText = 'hey';
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);
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
   // Prevent page refresh
//    e.preventDefault();

} 

 
export {addTodo, createToDo};