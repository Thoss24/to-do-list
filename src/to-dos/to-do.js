
function CreateToDo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority
};

const newToDo = new CreateToDo("Shopping", "Groceries", "Tuesday", "Urgent");



function loadToDo() {
    const container = document.getElementById('container');
    const toDoContainer = document.createElement('div');

    toDoContainer.textContent = newToDo.title + " " + newToDo.description + " " + newToDo.dueDate + " " + newToDo.priority;

    container.appendChild(toDoContainer)
    
}

export default loadToDo;