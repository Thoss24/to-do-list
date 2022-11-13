
export default class toDo {
    constructor(name, dueDate = "none") {
        this.name = name
        this.dueDate = dueDate
    }

    setToDoName(name) {
        this.name = name
    }

    getToDoName() {
        return this.name
    }

    setToDoDate(dueDate) {
        this.dueDate = dueDate
    }

    getToDoDate() {
        return this.dueDate
    }

    greet() {
        console.log(this.name)
        console.log(this.dueDate)
    }
}


