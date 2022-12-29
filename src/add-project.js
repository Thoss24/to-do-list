// Selectors
const projectInput = document.querySelector('.project-input');
const projectButton = document.querySelector('.project-button');
const projectList = document.querySelector('.project-list');

// Functions
let CreateProject = function() {
    this.projectName = projectInput.value;
    this.tasks = ["dummy data"];
 }

 function createProjectUI() {
    // Create project icon
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-div');

    // New Project
    const newProject = new CreateProject();
    myProjects.push(newProject);
    // newProject.classList.add('new-project');
    // document.querySelector('.new-project').innerHTML = newProject.projectName
    projectDiv.append(newProject.projectName, newProject.tasks);

    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    projectDiv.appendChild(trashButton);

    // Append to list
    projectList.appendChild(projectDiv);
 }

// Projects container
let myProjects = [];
 
 // display the projects tasks as text
 

//  function createProjectUi(event) {
//      // prevent page refresh
//      event.preventDefault();
//      // Create project icon
//      const projectDiv = document.createElement('div');
//      projectDiv.classList.add('project-div');
//      // New Project
//      const newProject = document.createElement('li');
//      newProject.innerText = projectInput.value;
//      newProject.classList.add('new-project');
//      projectDiv.appendChild(newProject);
//       // Trash button
//       const trashButton = document.createElement('button');
//       trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//       trashButton.classList.add('trash-btn');
//       projectDiv.appendChild(trashButton);
//       // Append to list
//       projectList.appendChild(projectDiv);
// }


// Event listeners
projectButton.addEventListener('click', createProjectUI);

projectButton.addEventListener('click', (e) => {
    e.preventDefault()
});

projectButton.addEventListener('click', () => {
    for (let i in myProjects) {
        console.log(myProjects[i])
    }
});

// object is appending to screen, but we still need to figure out how to interact with it

// Selectors
const projectUi = document.querySelector('.new-project');

projectUi.addEventListener('click', () => {
    console.log("hello")
});

export {CreateProject, createProjectUI}