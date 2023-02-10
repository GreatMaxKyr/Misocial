let hamburger = document.querySelector(".hamburger")
let navigatemenu = document.querySelector(".navigatemenu")
hamburger.onclick = function () {
    navigatemenu.classList.toggle("active-burger")
    hamburger.classList.toggle("hamburger-open")
}