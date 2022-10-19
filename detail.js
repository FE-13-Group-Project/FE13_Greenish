let indexEvent = localStorage.getItem("index")
const reset = null
const keynya = "https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/event"
let hasil;

fetch(keynya).then((res)=>{
    return res.json()
}).then((res)=>{
    res.map((item)=>{
        if (item.id == indexEvent) {
            hasil = item
        }
    })
    let time = new Date(hasil.dateEvent)
    let date  = time.getDate()
    let fixedMonth = time.toLocaleString('en-US', { month: 'long' })
    let year = time.getFullYear()
    let theDate = `${date} ${fixedMonth} ${year}`
    document.getElementById("status").innerText = (hasil.status).toUpperCase()
    document.getElementById("judul").innerText = hasil.nameEvent
    document.getElementById("Organizer").innerText = hasil.organizer
    document.getElementById("pc").innerText = hasil.CP
    document.getElementById("image").style.backgroundImage = `url(${hasil.posterEvent})`

    document.getElementById("month").innerText = fixedMonth.toUpperCase().slice(0,3)
    document.getElementById("date").innerText = date

    document.getElementById("partic").innerText = hasil.personRegis
    document.getElementById("time").innerText = theDate
    document.getElementById("place").innerText = hasil.locationEvent
    document.getElementById("desc").innerText = hasil.descEvent
    // document.getElementById("time").innerText = hasil.personRegis
    // document.getElementById("time").innerText = hasil.personRegis


    
    
})