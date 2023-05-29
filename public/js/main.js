const toggler = document.getElementById("toggler")
const toggleCircle = document.getElementById("toggle-circle")
const lightLogo = document.getElementById("logoDark")
const darkLogo = document.getElementById("logoLight")

const app = document.documentElement

toggler.addEventListener("click", (e) => {

    // dark mode
    if (toggleCircle.classList.contains("right-0")) {
        toggleCircle.classList.remove("right-0")
        toggleCircle.classList.add("left-0")
        app.classList.remove("dark")
    }
    // light mode
    else {
        toggleCircle.classList.remove("left-0")
        toggleCircle.classList.add("right-0")
        app.classList.add("dark")
    }
})