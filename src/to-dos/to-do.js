const submitToDo = document.getElementById('submit-toDo');



function addToDo(text) {
    let toDoItems = [];
    const toDo = {
        text,
        checked: false,
        id: Date.now(),
    };

    toDoItems.push(toDo);
    console.log(toDoItems);
}
addToDo()

submitToDo.addEventListener('submit', event => {
    const text = submitToDo.ariaValueMax.trim();
    if (text !== "") {
        addToDo(text);
        submitToDo.value = "";
        submitToDo.focus()
    }
})

export default addToDo;





