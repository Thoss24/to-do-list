// Selectors
const projectInput = document.querySelector('project-input');
const projectButton = document.querySelector('project-button');
const projectList = document.querySelector('project-list');

// Event listeners
projectButton.addEventListener('click', addProject);

// Functions
function createProject() {
    const projectsToDos = [];
    // Create project icon
    const projectUi = document.createElement('div')
    projectUi.classList.add('project-ui')
}