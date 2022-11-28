import Projects from "./project";


const projectName = document.getElementById('project-name');
const projectNameButton = document.getElementById('project-name-button')



projectNameButton.addEventListener('click', () => {
    const userInputTitle = projectName.value

    const newProject = new Projects(userInputTitle)
    newProject.checkName()

    newProject.projects.push(newProject)
    newProject.test()
})


// Figure out how to store projects in a seperate folder







