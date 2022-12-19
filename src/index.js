import { addTodo, createToDo } from "./add-todo";
import { createProject, projectButton } from "./add-project";

addTodo();
createProject()

let testProject = createProject("test")
testProject.displayTasks()

let testToDo = createToDo("title-test ", " description-test ", " dueDate-test ", " priority-test")
testToDo.displayToDoInfo()