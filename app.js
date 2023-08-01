const addInput = document.querySelector(".add-input")
const addBtn = document.querySelector(".add-btn")
const taskList = document.querySelector(".task-list")

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
    taskList.appendChild(newLi)
    newSpan.textContent = addInput.value
    removeBtn.textContent = "Remove"
    editBtn.textContent = "Edit"
    doneBtn.textContent = "Done"
    removeBtn.addEventListener("click", () => {
        newLi.remove()
    
    })
    doneBtn.addEventListener("click" , ()=>
    {
    
        newSpan.style.textDecoration = "line-through"
        
    })



    addInput.value = ""
})