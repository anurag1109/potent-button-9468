
let login = document.querySelectorAll(".afterlogin")
console.log(login)
let loginname = JSON.parse(localStorage.getItem("email"))
if (loginname != null)
    for (let i = 0; i < login.length; i++) {
        if (loginname.name == undefined)
            login[i].innerHTML = "Login"
        else
            login[i].innerHTML = loginname.name
    }


const getstarted = document.querySelectorAll(".get_started_Button")
for (let i = 0; i < getstarted.length; i++) {
    getstarted[i].addEventListener("click", (e) => {
        e.preventDefault()
        console.log(1)
        window.location.href = "../html/signup.html"

    })
}

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
        window.location.href = "../index.html"
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
