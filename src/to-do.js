class toDo {
    constructor(title, description, date, priority) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
    }

    checkToDoName() {
        console.log(this.title)
    }
}

export default toDo