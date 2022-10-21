const key = "https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/event"
let container = document.getElementById("rownya")
if(localStorage.getItem("indexLogin")== 0){
    document.getElementById("login").style.display ="none"
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
  
function getData(key) {
    fetch(key).then((res) => {
        return res.json()
    }).then((res) => {
        res.map((item, index) => {
            let col = document.createElement("div")
            col.className = "col-auto"
            col.id = index
            let link = document.createElement("a")
            link.href = `javascript:goDetail(${item.id});`
            link.className = "link"
            let card = document.createElement("div")
            card.className = "card"
            let image = document.createElement("img")
            image.className = "card-img-top"
            image.src = item.posterEvent
            image.style.height = "165px"
            let cardBody = document.createElement("div")
            cardBody.className = "card-body d-flex"
            let date = document.createElement("div")
            date.className ="date"
            let month = document.createElement("p")
            month.className ="month"
            const monthi = new Date(item.dateEvent)
            const fixedMonth = monthi.toLocaleString('en-US', { month: 'long' })
            month.innerText = (fixedMonth.toUpperCase()).slice(0,3)
            let datenum = document.createElement("p")
            datenum.className ="dateNum"
            datenum.innerText = monthi.getDate()
            let desc = document.createElement("div")
            desc.className ="desc"
            let title = document.createElement("h5")
            title.className ="card-title"
            title.innerText = item.nameEvent
            let text = document.createElement("p")
            text.className ="card-text"
            text.innerText = `${(item.descEvent).slice(0,100)} ...`

            container.appendChild(col)
            col.appendChild(link)
            link.appendChild(card)
            card.appendChild(image)
            card.appendChild(cardBody)
            cardBody.appendChild(date)
            date.appendChild(month)
            date.appendChild(datenum)
            cardBody.appendChild(desc)
            desc.appendChild(title)
            desc.appendChild(text)
            
        })
    })

}
getData(key)
document.getElementById("form").addEventListener('submit',(eve)=>{
    eve.preventDefault()
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
    let value = document.getElementById("inputan").value
    let search_key = `https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/event?nameEvent=${value}`
    getData(search_key)
    document.getElementById("inputan").value = ""
})

function goDetail(x) {
    localStorage.setItem("index",x)
    window.location.href = "detail.html"
}
function signOut() {
    localStorage.setItem("indexLogin",1)
    window.location.href ="loginPage.html"
    localStorage.removeItem('roleUser')
  } 