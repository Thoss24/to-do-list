import Projects from "./project";


const projectName = document.getElementById('project-name');
const projectNameButton = document.getElementById('project-name-button')

const allProjects = []

projectNameButton.addEventListener('click', () => {
    const userInputTitle = projectName.value

    const newProject = new Projects(userInputTitle)
    newProject.checkName()

   allProjects.push(newProject)
   console.log(allProjects)
})


// Now store to-dos in each project







