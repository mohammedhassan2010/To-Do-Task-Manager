const addInput = document.querySelector(".add-input")
const addBtn = document.querySelector(".add-btn")
const uncompleteList = document.querySelector(".uncomplete-list")
const completeList = document.querySelector(".complete-list")
const dateInput = document.querySelector(".date")
const imgUrlInput = document.querySelector(".add-img")
const select = document.querySelector("#select")

addBtn.addEventListener("click", () => {
    if (addInput.value.trim() == "" || dateInput.value.trim() == "") {
        alert("this empty")
        addInput.value = ""
        return;
    }


    const newLi = document.createElement("li")

    const newSpan = document.createElement("span")
    newSpan.classList.add("result")
    const dateParagraph = document.createElement("p")
    const importanceLevel = document.createElement("p")
    importanceLevel.textContent = select.value;

    const bigDiv = document.createElement("div")
    const divBtns = document.createElement("div")
    const removeBtn = document.createElement("button")
    const editBtn = document.createElement("button")
    const doneBtn = document.createElement("button")

    newLi.appendChild(bigDiv)
    bigDiv.appendChild(newSpan)
    bigDiv.appendChild(dateParagraph)
    bigDiv.appendChild(importanceLevel);




    bigDiv.appendChild(divBtns)

    divBtns.appendChild(removeBtn)
    divBtns.appendChild(editBtn)
    divBtns.appendChild(doneBtn)
    uncompleteList.appendChild(newLi)

    newSpan.textContent = addInput.value;
    dateParagraph.textContent = dateInput.value;
    removeBtn.textContent = "🗑️"
    editBtn.textContent = "✏️"
    doneBtn.textContent = "✔️"
    editBtn.classList.add("buttons")
    doneBtn.classList.add("buttons")
    removeBtn.classList.add("buttons")
    bigDiv.classList.add("big-div")
    divBtns.classList.add("btns-div")


    if (imgUrlInput.value !== "") {
        const taskImg = document.createElement("img")
        taskImg.src = imgUrlInput.value;
        newLi.appendChild(taskImg)
        taskImg.classList.add("task-img")
    }

    removeBtn.addEventListener("click", () => {
        newLi.remove()

    })
    doneBtn.addEventListener("click", (event) => {
        completeList.style.display = "block"
        newSpan.style.textDecoration = "line-through";
        newLi.remove();
        completeList.appendChild(newLi);

        event.target.remove();
    });

    editBtn.addEventListener("click", (e) => {
        const editInput = document.createElement("input")
        const saveBtn = document.createElement("button")
        newLi.appendChild(editInput)
        newLi.appendChild(saveBtn)
        saveBtn.textContent = "💾"

        saveBtn.addEventListener("click", (e) => {
            const editList = editInput.value;
            const oldList = e.target.parentElement.querySelector("span");
            // console.log(e);
            oldList.textContent = editList
            editInput.remove()
            saveBtn.remove()



        })




    })


    addInput.value = ""
    dateInput.value = ""
    imgUrlInput.value = ""
})


function searchFunc() {
    const input = document.querySelector(".search-input")
    const filter = input.value.toLowerCase()
    const resutls = document.getElementsByClassName("result")

    for (let i = 0; i < resutls.length; i++) {
        if (resutls[i].parentElement.innerText.toLowerCase().includes(filter)) {
            resutls[i].parentElement.style.display = "flex"
        } else {
            resutls[i].parentElement.style.display = "none"
        }
    }

}
const darkMode = document.getElementById('dark');
const body = document.querySelector('body',);

darkMode.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brigthness-hight-fill')){
    body.style.background = 'white';
    body.style.color = 'black';
    body.style.transition = '2s';


    }else{
    body.style.background = 'black';
    body.style.color = 'white';
    body.style.transition = '2s';

    }




})
