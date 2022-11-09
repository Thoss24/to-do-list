
export default class Projects {
    constructor(projectName) {
        this.projectName = projectName;
        this.toDos = []
    }

    selectName(name) {
        this.name = name
        console.log(this.name)
    }

    retrieveName() {
        return this.name
    }

    selectToDos(toDos) {
        this.toDos = toDos
    }

    retrieveToDos() {
        return this.toDos
    }

    retrieveToDo(toDoName) {
        return this.toDos.find((toDo) => toDo.retrieveName() === toDoName)  
    }
}

