export default class toDo {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    setToDoTitle(title) {
        this.title = title
    }

    getToDoTitle() {
        return this.title
    }
}
