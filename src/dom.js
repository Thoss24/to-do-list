import Todo from "./add-todo";
import Projects from "./add-project";
import List from "./get-projects";
import LocalStorage from "./local-storage";

export default class Dom {

    static loadPage() {
        Dom.addProjectUi()
        Dom.loadProjects()
    };

    static loadProjects() {
        LocalStorage.retrieveTodoList().getProjects().forEach((project) => {
            Dom.createNewProject(project.projectName)
        });
    }

    static createNewProject(projectName) {
        const userProjectsList = document.getElementById('user-projects-container');

        userProjectsList.innerHTML += `
        <button class="user-project-button">
        <div class="project-name-icon"> 
        <i class="fa fa-th-list"></i>
        <span>${projectName}</span>
        </div>
        <div class="delete-project-icon>
        <i class="fa fa-times-circle"></i>
        </div>
        </button>
        `
    };

    static addProject() {
        const projectNameInput = document.getElementById('project-name-input');

        const projectName = projectNameInput.value

        if (projectName === "") {
            alert("Project name cannot be empty")
            return
        }

        if (LocalStorage.retrieveTodoList().getProjects().map((project) => project.projectName === projectName)) {
            alert("Project names must be different")
            projectNameInput.value = ""
            return
        }

        LocalStorage.addProject(new Projects(projectName))
        Dom.createNewProject(projectName)
    }

    static addProjectUi() {
        const addProjectContainer = document.getElementById('add-project-container');
        const addProjectButton = document.getElementById('add-projects-button');
        const cancelAddProjectButton = document.getElementById('cancel-add-project-button');
        const createProjectButton = document.getElementById('create-project-button');

        addProjectButton.addEventListener('click', () => {
            addProjectContainer.style.display = "flex"
        });

        cancelAddProjectButton.addEventListener('click', (event) => {
            addProjectContainer.style.display = "none"
        });

        createProjectButton.addEventListener('click', Dom.addProject); 
    };

   

    
}