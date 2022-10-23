let indexEvent = localStorage.getItem("index")
const reset = null
const keynya = "https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/event"
const key = "https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/paticipant"
let hasil;
if(localStorage.getItem("indexLogin")== 0){
    document.getElementById("login").style.display ="none"
    document.getElementById("blocking").style.display ="none"

  }else{
    document.getElementById("dash").style.display ="none"
    document.getElementById("edit").style.display ="none"
    document.getElementById("log").style.display ="none"
  }
  if (localStorage.getItem('roleUser')) {
    if (localStorage.getItem("roleUser") == 1) {
      document.getElementById("addEvent").style.display="none"
    }
  }else{
    document.getElementById("addEvent").style.display="none"
  }
  
  
  function signOut() {
    localStorage.setItem("indexLogin",1)
    location.reload();
    localStorage.removeItem('roleUser')
    localStorage.removeItem('idUser')
  }

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
    document.getElementById("no").innerText = hasil.noTelp    
})
fetch("https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/users").then((res)=>{
  return res.json()
}).then((res)=>{
  res.map((item)=>{
    if (item.id === localStorage.getItem("idUser")) {
      document.getElementById("fname").value = item.firstName
      document.getElementById("lname").value = item.lastName
      document.getElementById("email").value = item.email
    }
  })
})
document.getElementById("form").addEventListener('submit',(eve)=>{
  eve.preventDefault()
  let name = document.getElementById("fname").value
  let address = document.getElementById("address").value
  let telp = document.getElementById("phone").value
  let emai = document.getElementById("email").value
  const data = {
    "eventId": localStorage.getItem('index'),
    "nameParticipant": name,
    "emailPaticipant": emai,
    "phoneParticipant": telp,
    "addressParticipant": address
   }
   if (name === "" ||address === "" || telp === "" || emai === "") {
    alert("silahklan isi semua field yang ada")
   }
   else{
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
  alert("anda sudah terdaftar, tunggu email atau sms dari pihak penyelenggara ")
  location.reload();
   }


// document.getElementById("fname").value = ""
// document.getElementById("fname").disabled = "false" 
// document.getElementById("lname").value =""
// document.getElementById("lname").disabled = "false"
// document.getElementById("address").value =""
// document.getElementById("email").value =""
// document.getElementById("email").disabled ="false"
// document.getElementById("phone").value =""


})