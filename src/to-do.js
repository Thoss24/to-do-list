function createToDo(title, description, dueDate, priority) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        displayInfo() {
            console.log(title, description, dueDate, priority)
        }
    }
}