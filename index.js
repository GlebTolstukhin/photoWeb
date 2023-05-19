"use strict"
    let burgerCount = 0
document.getElementById("burgerButton").onclick = ()=>{
    document.getElementById("burgerMenu").classList.toggle("open")
    document.getElementById("burgerButton").classList.toggle("cross")
}
let button = document.getElementById("button")
button.addEventListener("click", function () {
    document.getElementsByClassName("formRow")[0].scrollIntoView({
        behavior: "smooth", block: "center", inline: "nearest" 
    })
})

