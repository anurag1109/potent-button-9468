
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


const productstarted = document.querySelector(".product_Button")
if (productstarted != null) {
    productstarted.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(1)
        window.location.href = "/signup.html"

    })
}


const getstarted = document.querySelectorAll(".get_started_Button")
for (let i = 0; i < getstarted.length; i++) {
    getstarted[i].addEventListener("click", (e) => {
        e.preventDefault()
        console.log(1)
        window.location.href = "/signup.html"

    })
}