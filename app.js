


const hambarger = document.getElementById("hamberger")
const hamMenu = document.getElementById("ham-menu")
const body = document.getElementById("body")




function toggle (){
    hamMenu.classList.toggle("hide-menu")
    body.classList.toggle("body")

}


hambarger.addEventListener("click", toggle)