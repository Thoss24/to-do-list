// const submitToDo = document.getElementById('submit-toDo');

// function addToDo(text) {
//     let toDoItems = [];
//     const toDo = {
//         text,
//         checked: false,
//         id: Date.now(),
//     };

//     toDoItems.push(toDo);
//     console.log(toDoItems);
// }
// addToDo()

// submitToDo.addEventListener('submit', event => {
//     const text = submitToDo.ariaValueMax.trim();
//     if (text !== "") {
//         addToDo(text);
//         submitToDo.value = "";
//         submitToDo.focus()
//     }
// })

// export default addToDo;


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


