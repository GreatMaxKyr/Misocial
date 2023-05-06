let hamburger = document.querySelector(".hamburger")
let navigatemenu = document.querySelector(".navigatemenu")
hamburger.onclick = function () {
    navigatemenu.classList.toggle("active-burger")
    hamburger.classList.toggle("hamburger-open")
    document.body.classList.toggle("noscroll")
}

let black = document.querySelector(".black")
let bottommenu = document.querySelector(".bottommenu")
black.onclick = function () {
    window.scrollTo(0,0)
    navigatemenu.classList.toggle("active-burger")
    hamburger.classList.toggle("hamburger-open")
    document.body.classList.toggle("noscroll")
}
