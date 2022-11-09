import ProjectDisplay from "./to-dos/display-projects";
import Projects from "./to-dos/projects";

const newProject = new Projects() // figure out how to take user input and pass that info into a new instance of the "Projects" class.


console.log(newProject.toDos) // logs the empty array defined in the Projects class, we can access it through the newProject variable, along with other methods defined in the "Projects" class.
console.log(typeof(Projects))
