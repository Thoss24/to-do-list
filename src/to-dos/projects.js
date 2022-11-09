
export default class Projects {
    constructor(projectName) {
        this.projectName = projectName;
        this.toDos = []
    }

    selectName(name) { // all methods will be applied to the prototype of the Projects class
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

