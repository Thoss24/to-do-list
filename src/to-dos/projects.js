
export default class Project {
    constructor(name) {
        this.name = name
        this.toDos = []
    }

    setName(name) {
        this.name = name
    }

    retrieveName() {
        return this.name
    }

    setToDos(toDos) {
        this.toDos = toDos
    }

    retrieveToDos() {
        return this.toDos
    }

    getToDo(toDoName) {
        return this.toDos.find((toDo) => toDo.retrieveName() === toDoName)
    }

    contains(toDoName) {
        return this.toDos.some((toDo) => toDo.retrieveName() === toDoName)
    }

    addToDo(newToDo) {
        if (this.toDos.find((toDo) => toDo.retrieveName() === newToDo.name)) return
        this.toDos.push(newToDo)
    }           

//    checkArray() {
//     console.log(this.toDos)
//     console.log(this.name)
//    }
}
