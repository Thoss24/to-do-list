//Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');

//Event listeners
toDoButton.addEventListener('click', addTodo, false);

//Functions
function createToDo(title, description, dueDate, priority ) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        displayToDoInfo() {
            console.log(this.title + this.description + this.dueDate + this.priority)
        }
    }
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
   e.preventDefault();

} 

 
export {addTodo, createToDo};