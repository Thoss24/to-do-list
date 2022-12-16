// Selectors
const projectInput = document.querySelector('.project-input');
const projectButton = document.querySelector('.project-button');
const projectList = document.querySelector('.project-list');

// Event listeners
projectButton.addEventListener('click', createProject);

// Functions
function createProject(event) {
    // prevent page refresh
    event.preventDefault();
    // Array to store project to-dos
    const projectsToDos = [];
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

export {createProject, projectButton}

