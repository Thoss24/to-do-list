import Todo from "./add-todo";
import Projects from "./add-project";


export default class Dom {

static loadPage() {
    Dom.addProjectUi()
}


static addProjectUi() {

    const addProjectButton = document.querySelector('.add-projects-button');
    const addProjectContainer = document.getElementById('add-project-container');

    addProjectButton.addEventListener('click', () => {
        addProjectContainer.sty
    })
}   
 
    
}