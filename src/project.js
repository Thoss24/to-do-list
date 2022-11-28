class Projects {
    constructor(title) {
        this.title = title;
        this.toDo = [];
        this.projects = []
    }

    checkName() {
        console.log(this.title)
        
    }

    test() {
        for (let i = 0; i < this.projects.length; i++) {
            console.log(i)
        }
    }
}

export default Projects