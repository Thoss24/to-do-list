import {todo } from "./add-todo";
import {projects} from "./add-project";


const dom = (() => {

     //Selectors
    const toDoInput = document.querySelector('.todo-input');
    const toDoButton = document.querySelector('.todo-button');
    const toDoList = document.querySelector('.todo-list');
    const todoDateInput = document.getElementById('to-do-date');
    const toDoContainer = document.querySelector('.todo-container');
    const projectInput = document.querySelector('.project-input');
    const projectButton = document.querySelector('.project-button');
    const projectList = document.querySelector('.project-list');
    const projectTodoTitle = document.querySelector('.project-todo-title');
    const projectUiButton = document.querySelector('.project-ui-button.active');
    const closeEditTodoButton = document.getElementById('close-edit-todo-button');
    const editTodoFormContainer = document.getElementById('edit-todo-form-container');
    const editTodoTitle = document.getElementById('edit-todo-title');
    const editTodoDate = document.getElementById('edit-todo-date');

    todo()

})();

export {dom}

































    // Projects container
    // let myProjects = [];

    //Selectors
    // const toDoInput = document.querySelector('.todo-input');
    // const toDoButton = document.querySelector('.todo-button');
    // const toDoList = document.querySelector('.todo-list');
    // const todoDateInput = document.getElementById('to-do-date');
    // const toDoContainer = document.querySelector('.todo-container');
    // const projectInput = document.querySelector('.project-input');
    // const projectButton = document.querySelector('.project-button');
    // const projectList = document.querySelector('.project-list');
    // const projectTodoTitle = document.querySelector('.project-todo-title');
    // const projectUiButton = document.querySelector('.project-ui-button.active');
    // const closeEditTodoButton = document.getElementById('close-edit-todo-button');
    // const editTodoFormContainer = document.getElementById('edit-todo-form-container');
    // const editTodoTitle = document.getElementById('edit-todo-title');
    // const editTodoDate = document.getElementById('edit-todo-date');

    // function createProjectUI() {
    //     // New Project
    //     // const newProject = new CreateProject(projectInput.value);
    //     // myProjects.push(newProject);
    
    //     const projectUiButton = document.createElement('button');
    //     projectUiButton.classList.add('project-ui-button');
    
    //     const btn = projectList.getElementsByClassName("project-ui-button");
    //     const editButton = document.createElement('button');
    //     editButton.classList.add('edit-button')
    //     editButton.textContent = "Edit"

    //     projectUiButton.addEventListener('click', () => {

    //         toDoContainer.innerHTML = 
    //         `<div class="tasks-list" id="tasks-list"></div>`

    //         // toDoContainer.innerHTML = newProject.tasks
    //         newProject.tasks.forEach(element => {
    //             const tasksList = document.getElementById('tasks-list');
    //             tasksList.innerHTML += `
    //             <button class="button-task" data-task-button>
    //             <div class="left-task-panel">
    //             <i class="far fa-circle"></i>
    //             <p class="input-title-text"></p>
    //             <input type="text" class="todo-title-input" id="todo-title-input">
    //             </div>
    //             <div class="right-task-panel">
    //             <p class="input-date"></p>
    //             <input type="date" class="todo-date-input" id="todo-date-input">
    //             <i class="fa fa-pencil"></i>
    //             <i class="fas fa-times"></i>
    //             </div>
    //             </button>` 
    //             // editTodo()
    //         });
    //         projectTodoTitle.textContent = newProject.projectName;
    //        });
    
    //     // Loop through the buttons and add the active class to the current/clicked button
    //     for (let i = 0; i < btn.length; i++) {
    //         btn[i].addEventListener("click", function() {
    //         let current = document.getElementsByClassName("active");
    //         // If there's no active class
    //         if (current.length > 0) {
    //             current[0].className = current[0].className.replace(" active", "");
    //         };
    //         // Add the active class to the current/clicked button
    //         this.className += " active";
    //     });
    //     };

    //     projectUiButton.append(newProject.projectName)
    //     projectList.appendChild(projectUiButton);
    //     // editTodo()
    //  };
    
    
    // function addTodo(e) {
    //     // const projectUiButton = document.querySelector('.project-ui-button.active');
    //     // const newTodo = new CreateTodo(toDoInput.value, todoDateInput.value); 

    //     toDoContainer.innerHTML = 
    //     `<div class="tasks-list" id="tasks-list"></div>`
    //     const tasksList = document.getElementById('tasks-list');
    
    //    for (let i = 0; i < myProjects.length; i++) {
    //         if (projectUiButton.textContent == myProjects[i].projectName) { // add condition so that 2 projects cannot have the same name
    //             myProjects[i].tasks.push(newTodo);
    //             console.log(myProjects[i].tasks);
    //             myProjects[i].tasks.forEach(element => {
    //                 tasksList.innerHTML += `
    //                 <button class="button-task" data-task-button>
    //                 <div class="left-task-panel">
    //                 <i class="far fa-circle"></i>
    //                 <p class="input-title-text"></p>
    //                 <input type="text" class="todo-title-input" id="todo-title-input">
    //                 </div>
    //                 <div class="right-task-panel">
    //                 <p class="input-date"></p>
    //                 <input type="date" class="todo-date-input" id="todo-date-input">
    //                 <i class="fa fa-pencil"></i>
    //                 <i class="fas fa-times"></i>
    //                 </div>
    //                 </button>`
                    
    //                 // editTodo()
    //             });
    //         };
    //     };
    // }


//     function editTodo() {

//     const editTodoIcon = document.getElementsByClassName('fa fa-pencil');
//     const inputTitleText = document.getElementsByClassName('input-title-text');

//     for (let j = 0; j < editTodoIcon.length; j++){
//         editTodoIcon[j].addEventListener('click', (e) => {
//             editTodoFormContainer.style.display = "flex";
//         });
//     };

//     for (let i = 0; i < myProjects.length; i++) {
//         for (let j = 0; j < myProjects[i].tasks.length; j++) {
//             for (let x = 0; x < inputTitleText.length; x++) {

//                 if (inputTitleText[x].textContent == myProjects[i].tasks[j].title) {

//                     console.log(inputTitleText[x].parentNode.parentNode.childNodes[3].childNodes[3])
//                     // console.log(myProjects[i].tasks[j].title)

//                     closeEditTodoButton.addEventListener('click', (e) => {
//                         e.preventDefault()
//                         inputTitleText[x].parentNode.childNodes[3].textContent = editTodoTitle.value
//                         inputTitleText[x].parentNode.parentNode.childNodes[3].childNodes[3].value = editTodoDate.value
//                         // myProjects[i].tasks[j].date = editTodoDate.value
//                         // myProjects[i].tasks[j].title = editTodoTitle.value
//                         // console.log(myProjects[i].tasks)
//                         editTodoFormContainer.style.display = "none";
//                     });
//                     break
//                 }
//             }
//         } 
//     }      
// };


    // for (let i = 0; i < inputTitleText.length; i++){
    //     inputTitleText[i].addEventListener('click', (e) => {
    //         // editTodoFormContainer.style.display = "flex";
    //         console.log(inputTitleText[i].parentNode.parentNode.parentNode)
    //     });
    // };


    // closeEditTodoButton.addEventListener('click', (e) => {
    //     e.preventDefault()
    //     editTodoFormContainer.style.display = "none";
    // });


    // editTodoBtn[i].parentNode.parentNode.childNodes[1].childNodes[3].textContent
    // };

    
     //Event listeners
    //  toDoButton.addEventListener('click', addTodo);

    //  toDoButton.addEventListener('click', (event) => {
    //      event.preventDefault();
    //  }); 
 
    //  projectButton.addEventListener('click', createProjectUI);
 
    //  projectButton.addEventListener('click', (e) => {
    //      e.preventDefault()
    //  });
    
    // return {
    //     createProjectUI,
    //     addTodo,
    //     editTodo
    // }