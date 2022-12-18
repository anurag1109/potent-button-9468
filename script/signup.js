let flag = false;
document.querySelector("form").addEventListener("submit", signupfunc)
let singuparr = JSON.parse(localStorage.getItem("signupdata")) || []
function signupfunc() {
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
        window.location.href = "login.html"
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