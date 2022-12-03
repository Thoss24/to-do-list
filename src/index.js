import Projects from "./project";
import toDo from "./to-do";

const projectName = document.getElementById('project-name');
const projectNameButton = document.getElementById('project-name-button');
const toDoName = document.getElementById('to-do-name');
const toDoNameButton = document.getElementById('to-do-name-button');



projectNameButton.addEventListener('click', () => {
    const userInputTitle = projectName.value

    const newProject = new Projects(userInputTitle)
    newProject.checkName();

});



toDoNameButton.addEventListener('click', () => {
    const userInputToDoName = toDoName.value;

    const newToDo = new toDo(userInputToDoName);
    
});


// how can we access the array inside the Projects class from the toDo class?







