import toDo from "./to-do";

export default class Projects {
    constructor(title) {
        this.title = title;
        this.toDoArray = [];
    }

    setProjectTitle(title) {
        this.title = title
    }

    getProjectTitle() {
        return this.title
    }

}

