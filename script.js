// product dropdown

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


// get started button


// const getstarted = document.querySelectorAll(".get_started_Button")
// for (let i = 0; i < getstarted.length; i++) {
//     getstarted[i].addEventListener("click", (e) => {
//         e.preventDefault()
//         console.log(1)
//         window.location.href = "/signup.html"

//     })
// }


// const productstarted = document.querySelector(".product_Button")
// if (productstarted != null) {
//     productstarted.addEventListener("click", (e) => {
//         e.preventDefault()
//         console.log(1)
//         window.location.href = "/signup.html"

//     })
// }

// homepage signup


// console.log(document.getElementsByClassName("text-white"))

let flag = false;
let form = document.getElementById("password")
form.addEventListener("click", signupfunc)
let singuparr = JSON.parse(localStorage.getItem("signupdata")) || []

function signupfunc(event) {
    console.log(1)
    event.preventDefault()
    let signobj = {
        name: document.querySelector("#name").value,
        username: document.querySelector("#username").value,
        website: document.querySelector("#website").value,
        password: document.querySelector("#password").value,

    }
    if (singuparr.length > 0) {
        emailcheck(signobj.username, signobj)
    }
    if (flag == false) {
        singuparr.push(signobj)
        localStorage.setItem("signupdata", JSON.stringify(singuparr))
        window.location.href = "index.html"
        alert("Email registered Successfully")

    }
    flag = false
}
function emailcheck(data, signobj) {
    let check = JSON.parse(localStorage.getItem("signupdata"))
    check.forEach(function (el) {
        if (el.username === data) {
            let x = alert("Email already registered")
            flag = true
        }
    })
}






// login


// let logindata = JSON.parse(localStorage.getItem("signupdata"))
// document.querySelector("form").addEventListener("submit", loginfunc)

// function loginfunc() {
//     let username = document.querySelector("#username").value
//     let password = document.querySelector("#password").value
//     let flag = false
//     logindata.forEach((el) => {
//         if (el.username == username) {
//             if (el.password == password) {
//                 localStorage.setItem("email", JSON.stringify(el))
//                 window.location.href = "index.html"
//                 flag = true
//             }
//         }

//     })
//     if (flag == true) {
//         alert("Login successgully")
//         login.innerHTML = username
//     }
//     else
//         alert("Wrong credentials")
// }

// let login = document.querySelectorAll(".afterlogin")
// console.log(login)
// let loginname = JSON.parse(localStorage.getItem("email"))
// // console.log(loginname.length==undefined)
// for (let i = 0; i < login.length; i++) {
//     if (loginname.name == undefined)
//         login[i].innerHTML = "Login"
//     else
//         login[i].innerHTML = loginname.name
// }

// console.log(loginid)
// login.value = loginid