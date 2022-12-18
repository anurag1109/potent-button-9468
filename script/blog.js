
let login = document.querySelectorAll(".afterlogin")
console.log(login)
let loginname = JSON.parse(localStorage.getItem("email"))
// console.log(loginname.length==undefined)
if (loginname != null) {
    for (let i = 0; i < login.length; i++) {
        if (loginname.name == undefined)
            login[i].innerHTML = "Login"
        else
            login[i].innerHTML = loginname.name
    }
}

forfree = document.querySelector(".topcontainer button")
forfree.addEventListener("click", (e) => {
    e.preventDefault()
    // window.location.href = "../index.html"
    window.location.href = "../html/signup.html"
})

forfreebottom = document.querySelector(".bottomcontainer button")
forfreebottom.addEventListener("click", (e) => {
    e.preventDefault()
    // window.location.href = "../index.html"
    window.location.href = "../html/signup.html"
})