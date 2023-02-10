let listLink = document.querySelectorAll(".has-tooltip")
// console.log(listLink)
let x = "tooltip_active"
function createDiv(text, number, left, top) {
    let idDiv = `div${number}`
    let elem = `'<div class="tooltip" id="${idDiv}">${text}</div>'`
    return elem
}
idNum = 0
for (let link of listLink) {
    idNum += 1
    let title = link.title
    link.setAttribute("id", idNum)

    let textElem = createDiv(title, idNum)
    link.insertAdjacentHTML('afterend', textElem)


    link.addEventListener("click", (e) => {
        let idLink = link.getAttribute("id"),
            idDiv =  `div${idLink}`,
            commentLink = document.getElementById(idDiv),
            listActiveDiv = document.getElementsByClassName("tooltip_active"),
            pos = link.getBoundingClientRect()
        commentLink.style.left = `${pos.x}px`
        commentLink.style.top = `${pos.y + pos.height}px`
        
        for (let divOne of listActiveDiv) {
            if (divOne.getAttribute("id") !== idDiv) {
                divOne.className = "tooltip"
            }       
        }
        commentLink.classList.toggle("tooltip_active")        
        e.preventDefault()
    })
    }

