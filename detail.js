let indexEvent = localStorage.getItem("index")
const reset = null
const key = "https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/event"
let hasil;

fetch(key).then((res)=>{
    return res.json()
}).then((res)=>{
    res.map((item)=>{
        if (item.id == indexEvent) {
            hasil = item
        }
    })
    document.getElementById("Judul").innerText = hasil.nameEvent
    document.getElementById("gbr").src = hasil.posterEvent
    document.getElementById("desc").innerText = hasil.descEvent
    
    
})