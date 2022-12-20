import { addTodo, createToDo } from "./add-todo";
import { createProject} from "./add-project";

addTodo();

let testProject = createProject("test")
testProject.displayTasks()

// let testToDo = createToDo("title-test ", " description-test ", " dueDate-test ", " priority-test")
// testToDo.displayToDoInfo()