

document.getElementById("formulir").addEventListener('submit', (eve) => {
    eve.preventDefault()
    let gmail = document.getElementById("col-weight").value
    let pass = document.getElementById("col-height").value
    if (document.getElementById("col-weight").value === "" || document.getElementById("col-height").value === "") {
        alert("Silahkan isi field yang harus diisi terlebih dahulu")
    } else {
        fetch("https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/users").then((res) => {
            return res.json()
        }).then((res) => {
            let ketemu = false;
            let role;
            res.map((item) => {
                if (item.email === gmail && item.password === pass) {
                    ketemu = true
                    role = item.role
                }
            })
            if (ketemu === true) {
                localStorage.setItem("indexLogin", 0)
                localStorage.setItem("roleUser", role)
                window.location.href = "index.html"
                document.getElementById("col-weight").value = ""
                document.getElementById("col-height").value = ""

            } else {
                alert("pastikan gmail dan password sudah sesuai")
            }
        })
    }
    // console.log(document.getElementById("col-weight"));
    // console.log(document.getElementById("col-height"));
})