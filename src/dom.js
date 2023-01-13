import Todo from "./add-todo";
import Projects from "./add-project";

export default class Dom {

    static addProjectUi() {
        const addProjectContainer = document.getElementById('add-project-container');
        const addProjectButton = document.getElementById('add-projects-button');
        const cancelAddProjectButton = document.getElementById('cancel-add-project-button');
        const createProjectButton = document.getElementById('create-project-button');

        addProjectButton.addEventListener('click', () => {
            addProjectContainer.style.display = "flex"
        });

        cancelAddProjectButton.addEventListener('click', (event) => {
            event.preventDefault()
            addProjectContainer.style.display = "none"
        });

        createProjectButton.addEventListener('click', (event) => {
            event.preventDefault()
        })
        
    }
}