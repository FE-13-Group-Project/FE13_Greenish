document.getElementById("formulir").addEventListener('submit', (eve) => {
    eve.preventDefault()
    let gmail = document.getElementById("username").value
    let pass = document.getElementById("password").value
    if (document.getElementById("username").value === "" || document.getElementById("password").value === "") {
        alert("Silahkan isi field yang harus diisi terlebih dahulu")
    } else {
        fetch("https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/users").then((res) => {
            return res.json()
        }).then((res) => {
            let ketemu = false;
            let role;
            let id;

            res.map((item) => {
                if (item.email === gmail && item.password === pass) {
                    ketemu = true
                    role = item.role
                    id = item.id
                }
            })
            if (ketemu === true) {
                localStorage.setItem("indexLogin", 0)
                localStorage.setItem("roleUser", role)
                localStorage.setItem("idUser", id)
                window.location.href = "index.html"
                document.getElementById("username").value = ""
                document.getElementById("password").value = ""

            } else {
                alert("pastikan gmail dan password sudah sesuai")
            }
        })
    }
    // console.log(document.getElementById("username"));
    // console.log(document.getElementById("password"));
})