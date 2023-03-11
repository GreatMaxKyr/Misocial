let hamburger = document.querySelector(".hamburger")
let navigatemenu = document.querySelector(".navigatemenu")
hamburger.onclick = function () {
    navigatemenu.classList.toggle("active-burger")
    hamburger.classList.toggle("hamburger-open")
}

let black = document.querySelector(".black")
let bottommenu = document.querySelector(".bottommenu")
black.onclick = function () {
    navigatemenu.classList.toggle("active-burger")
    black.classList.toggle("hamburger-open")
}
