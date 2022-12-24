// Selectors
const projectInput = document.querySelector('.project-input');
const projectButton = document.querySelector('.project-button');
const projectList = document.querySelector('.project-list');

// Projects container
let myProjects = [];

// Event listeners
projectButton.addEventListener('click', (event) => {
    event.preventDefault();
    myProjects.push(new CreateProject());
});

projectButton.addEventListener('click', () => {
    for (let i in myProjects) {
        console.log(myProjects[i])
    }
});

projectButton.addEventListener('click', createProjectUi);

// Functions
let CreateProject = function() {
   this.projectName = projectInput.value;
   this.tasks = [];
}

// function test(lst) {
//    for (let i in lst) {
//     console.log(i)
//    }

// console.log(lst)
// }
// test(myProjects)

function createProjectUi(event) {
    // prevent page refresh
    event.preventDefault();
    // Create project icon
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-div');
    // New Project
    const newProject = document.createElement('li');
    newProject.innerText = "test project";
    newProject.classList.add('new-project');
    projectDiv.appendChild(newProject);
     // Trash button
     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
     trashButton.classList.add('trash-btn');
     projectDiv.appendChild(trashButton);
     // Append to list
     projectList.appendChild(projectDiv);
}

export {CreateProject, createProjectUi}

