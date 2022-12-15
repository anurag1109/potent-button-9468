const button = document.querySelectorAll(".button")
let button1 = document.querySelector(".button-1")
let button2 = document.querySelector(".button-2")
let button3 = document.querySelector(".button-3")
let button4 = document.querySelector(".button-4")
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", (e) => {
        button1.classList.remove("block")
        button2.classList.remove("block")
        button3.classList.remove("block")
        button4.classList.remove("block")
        button1.classList.add("none")
        button2.classList.add("none")
        button3.classList.add("none")
        button4.classList.add("none")
        if (i == 0) {
            button1.classList.toggle("block")
            button1.classList.toggle("none")
        }
        if (i == 1) {
            button2.classList.toggle("block")
            button2.classList.toggle("none")
        }
        if (i == 2) {
            button3.classList.toggle("block")
            button3.classList.toggle("none")
        }
        if (i == 3) {
            button4.classList.toggle("block")
            button4.classList.toggle("none")
        }


    })
}