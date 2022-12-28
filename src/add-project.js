// Selectors
const projectInput = document.querySelector('.project-input');
const projectButton = document.querySelector('.project-button');
const projectList = document.querySelector('.project-list');

// Functions
let CreateProject = function() {
    this.projectName = projectInput.value;
    this.tasks = [];
 }

// Projects container
let myProjects = [];
 
 // WE NEED TO BE ABLE TO CLICK ON EACH PROJECT UI ON THE PAGE TO SWITCH BETWEEN EACH PROJECTS ARRAY OF TO-DOS. NEXT TASK IS TO DO THAT. WE ALSO NEE TO DISPLAY THE ARRAY OF EACH PROJECT ON THE PAGE.
 

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
projectButton.addEventListener('click', (event) => {
    event.preventDefault();
    myProjects.push(new CreateProject());
    // Create project icon
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-div');
    // New Project
    const newProject = document.createElement('li');
    newProject.innerText = projectInput.value;
    newProject.classList.add('new-project');
    newProject.innerHTML = new CreateProject();
    projectDiv.append(newProject);
    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    projectDiv.appendChild(trashButton);
    // Append to list
    projectList.appendChild(projectDiv);
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

export {CreateProject}