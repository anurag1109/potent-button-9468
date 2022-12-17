
let logindata = JSON.parse(localStorage.getItem("signupdata"))
document.querySelector("form").addEventListener("submit", loginfunc)

function loginfunc() {
    let username = document.querySelector("#username").value
    let password = document.querySelector("#password").value
    let flag = false
    logindata.forEach((el) => {
        if (el.username == username) {
            if (el.password == password) {
                localStorage.setItem("email", JSON.stringify(el))
                window.location.href = "index.html"
                flag = true
            }
        }

    })
    if (flag == true) {
        alert("Login successgully")
        login.innerHTML = username
    }
    else
        alert("Wrong credentials")
}