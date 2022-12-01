import toDo from "./to-do";

class Projects {
    constructor(title) {
        this.title = title;
        this.toDoArray = [];
    }

    saveItem(item) {
        this.toDoArray.push(item);
    }

    


    checkName() {
        console.log(this.title)
        console.log(this.toDoArray)
    }



}

export default Projects