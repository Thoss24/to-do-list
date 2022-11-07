function createToDo(title, description, dueDate, priority) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        getToDoItem() {
            return title + description
        },
    };
}

let toDoItem1 = createToDo("Shopping. ", "Need to buy groceries.", "Tuesday.", "Number one priority.");

console.log(toDoItem1.getToDoItem())

export default createToDo;