
let login = document.querySelectorAll(".afterlogin")
console.log(login)
let loginname = JSON.parse(localStorage.getItem("email"))
// console.log(loginname.length==undefined)
for (let i = 0; i < login.length; i++) {
    if (loginname.name == undefined)
        login[i].innerHTML = "Login"
    else
        login[i].innerHTML = loginname.name
}