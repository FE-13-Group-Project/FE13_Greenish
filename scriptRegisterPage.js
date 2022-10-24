let form = document.getElementById("form")
let fName = document.getElementById("first-name")
let lName = document.getElementById("last-name")
let email = document.getElementById("email")
let pass = document.getElementById("password")
const key = "https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/users"
function reset() {
    fName.value = ""
    lName.value = ""
    email.value = ""
    pass.value = ""
}

form.addEventListener('submit', (eve) => {
    eve.preventDefault()
    const data = {
        firstName: fName.value,
        lastName: lName.value,
        email: email.value,
        password : pass.value,
        role : 1
    }
    if (fName.value === "" ||lName.value === "" || email.value === "" || pass.value === "") {
        alert("silahklan isi semua field yang ada")
    } else {
        const postData = () => {
            console.log("test post");
            fetch(key, {
                method : "POST",
                body : JSON.stringify(data),
                headers : {"content-type":"application/json"}
            }).then((res)=>{
                return res.json()
            }).then((res)=>{
                console.log(res);
            })
            
        }
        postData()
        reset()
        alert("anda sudah register, akan diarahkan otomatis ke halaman login")
        window.location.href = "loginPage.html"
    }
    // console.log(data);

})