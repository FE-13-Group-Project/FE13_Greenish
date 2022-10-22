if (localStorage.getItem('roleUser')) {
    if (localStorage.getItem("roleUser")!= 0) {
        alert("anda bukan admin")
        window.location.href = "index.html"
    }
}else{
    window.location.href = "index.html"
}
const key = "https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/event"
let namaEvent = document.getElementById('nama-event')
let gambar = document.getElementById('gambar-event')
let organizer = document.getElementById('organizer')
let pic = document.getElementById('pic')    
let contact = document.getElementById('cp')
let loc = document.getElementById('location-event')
let maxperson = document.getElementById('max-person')
let desc = document.getElementById('desc-event')
let tgl = document.getElementById('tanggal')
document.getElementById("form").addEventListener('submit',(eve)=>{
    eve.preventDefault()
    let status = document.getElementById('status')

    const data = {

        "nameEvent": namaEvent.value,
        "posterEvent": gambar.value,
        "organizer": organizer.value,
        "CP": pic.value,
        "status": status.value,
        "locationEvent": loc.value,
        "personRegis": 0,
        "maxPerson": maxperson.value,
        "descEvent": desc.value,
        "dateEvent": tgl.value,
        "noTelp":contact.value
      }
      if (namaEvent.value === "" ||gambar.value === "" || organizer.value === "" || status.value === ""|| pic.value === ""|| contact.value === ""|| loc.value === ""|| tgl.value === ""|| maxperson.value === ""|| desc.value === "") {
        alert("silahklan isi semua field yang ada demi kelengkapan dokumen")
    }else{
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
        alert("event berhasil didaftarkan")
        document.getElementById("form").reset()
    }
    
})
function signOut() {
    localStorage.setItem("indexLogin", 1);
    window.location.href = "loginPage.html";
    localStorage.removeItem("roleUser");
  }