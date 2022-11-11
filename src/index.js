import toDo from "./to-dos/to-do";

const toDoButton = document.getElementById('to-do-button');

toDoButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('submit-toDo').value;
    const date = document.getElementById('due-date').value;

    const newToDo = new toDo(name, date)
    newToDo.greet()
})




