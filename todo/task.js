
function createTextElement(text) {
    let resultText = `  <div class="task">
                            <div class="task__title">
                                ${text}
                            </div>
                            <a href="#" class="task__remove">&times;</a>
                        </div>`
    return resultText

}


let taskList = document.getElementById("tasks__list"),
    btnEnter = document.getElementById("tasks__add"),
    inputText = document.getElementById("task__input"),
    btnRemoveList = document.getElementsByClassName("task__remove")

btnEnter.addEventListener("click", (e) => {
    let textInput = inputText.value.trim()
    if (textInput) {
        let textElement = createTextElement(textInput)
        taskList.insertAdjacentHTML("afterbegin", textElement)
        inputText.value = ""
        let newTask = taskList.firstElementChild.querySelector(".task__remove")
        newTask.addEventListener("click", (e) => {
          newTask.closest(".task").remove()  
        })
    }
    e.preventDefault()

})


