import { addTodo, createToDo } from "./add-todo";
import { createProject, createProjectUi } from "./add-project";

addTodo();
createProjectUi()

let testProject = createProject("test")
testProject.displayTasks()

let testToDo = createToDo("title-test ", " description-test ", " dueDate-test ", " priority-test")
testToDo.displayToDoInfo()