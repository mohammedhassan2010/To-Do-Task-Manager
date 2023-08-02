const addInput = document.querySelector(".add-input")
const addBtn = document.querySelector(".add-btn")
const uncompleteList = document.querySelector(".uncomplete-list")
const completeList = document.querySelector(".complete-list")

addBtn.addEventListener("click", () => {
    if (addInput.value.trim() == "") {
        alert("this empty")
        addInput.value = ""
        return;
    }

    const newLi = document.createElement("li")
    const newSpan = document.createElement("span")
    const removeBtn = document.createElement("button")
    const editBtn = document.createElement("button")
    const doneBtn = document.createElement("button")
    newLi.appendChild(newSpan)
    newLi.appendChild(removeBtn)
    newLi.appendChild(editBtn)
    newLi.appendChild(doneBtn)
    uncompleteList.appendChild(newLi)
    newSpan.textContent = addInput.value
    removeBtn.textContent = "🗑️"
    editBtn.textContent = "✏️"
    doneBtn.textContent = "✔️"


    removeBtn.addEventListener("click", () => {
        newLi.remove()

    })
    doneBtn.addEventListener("click", (event) => {
        newSpan.style.textDecoration = "line-through";
        newLi.remove();
        completeList.appendChild(newLi);

        event.target.remove();
    });

    editBtn.addEventListener("click", (event) => {
        const editInput = document.createElement("input")
        const saveBtn = document.createElement("button")
        newLi.appendChild(editInput)
        newLi.appendChild(saveBtn)
        saveBtn.textContent = "💾"
        saveBtn.addEventListener("click", () => {
            const editList = editInput.value;
            const oldList = event.target.parentElement.firstChild;
            oldList.textContent = editList
            editInput.remove()
            saveBtn.remove()
        })



    })








    addInput.value = ""
})