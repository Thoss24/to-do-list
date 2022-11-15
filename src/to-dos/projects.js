
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

   checkName() {
    console.log(this.name)
   }
}
