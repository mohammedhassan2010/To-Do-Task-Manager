const addInput = document.querySelector(".add-input")
const addBtn = document.querySelector(".add-btn")
const uncompleteList = document.querySelector(".uncomplete-list")
const completeList = document.querySelector(".complete-list")

addBtn.addEventListener("click", () => {
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
    doneBtn.addEventListener("click", () => {
        newSpan.style.textDecoration = "line-through"
        newLi.remove()
        completeList.appendChild(newLi)
    })



    addInput.value = ""
})