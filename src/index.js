import {CreateTodo } from "./add-todo";
import {CreateProject} from "./add-project";

// Projects container
let myProjects = [];


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
    const projectTodoTitle = document.querySelector('.project-todo-title')

    function createProjectUI() {

        // New Project
        const newProject = new CreateProject(projectInput.value);
        myProjects.push(newProject);
    
        const projectUiButton = document.createElement('button');
        projectUiButton.classList.add('project-ui-button');
    
        const btn = projectList.getElementsByClassName("project-ui-button");
        projectUiButton.addEventListener('click', () => {
            
            projectTodoTitle.textContent = newProject.projectName;
           });
    
        // Loop through the buttons and add the active class to the current/clicked button
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            // If there's no active class
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            };
            // Add the active class to the current/clicked button
            this.className += " active";
        });
        };
        projectUiButton.append(newProject.projectName)
        projectList.appendChild(projectUiButton);
     };
    
    
    function addTodo(e) {
    
       const projectUiButton = document.querySelector('.project-ui-button.active');
       const newTodo = new CreateTodo(toDoInput.value, todoDateInput.value);

    //    (projectUiButton.textContent == myProjects[i].projectName)
    
       for (let i = 0; i < myProjects.length; i++) {
            if (projectUiButton.classList.contains('active')) { // add condition so that 2 projects cannot have the same name
                const newTodoValues = [newTodo.title, newTodo.date, newTodo.completed]
                myProjects[i].tasks.push(newTodoValues);
                const todoItems = document.createElement('div');
                const checked = document.createElement('input');
                checked.type = "checkbox";
                todoItems.classList.add('todo-items');
                const todoTitle = myProjects[i].tasks[0][0];
                const todoDate = myProjects[i].tasks[0][1];
                todoItems.append(todoTitle, todoDate);
                toDoContainer.innerHTML = 
                    '<div class="todo-items"> <input type="checkbox"> </div>' // inner HTML is the key, continue to test this for solution
                console.log(myProjects[i].tasks)
            }
       };
    };

    //Event listeners
    toDoButton.addEventListener('click', addTodo);

    toDoButton.addEventListener('click', (event) => {
        event.preventDefault();
    }); 

    projectButton.addEventListener('click', createProjectUI);

    projectButton.addEventListener('click', (e) => {
        e.preventDefault()
    });

    return {
        createProjectUI,
        addTodo
    };

})();

