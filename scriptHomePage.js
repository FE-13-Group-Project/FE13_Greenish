let container = document.getElementById("content-event");
if (localStorage.getItem("indexLogin") == 0) {
  document.getElementById("login").style.display = "none";
} else {
  document.getElementById("dash").style.display = "none";
  document.getElementById("edit").style.display = "none";
  document.getElementById("log").style.display = "none";
}
if (localStorage.getItem("roleUser")) {
  if (localStorage.getItem("roleUser") == 1) {
    document.getElementById("addEvent").style.display = "none";
  }
} else {
  document.getElementById("addEvent").style.display = "none";
}

function signOut() {
  localStorage.setItem("indexLogin", 1);
  window.location.href = "loginPage.html";
  localStorage.removeItem("roleUser");
}

let contentItem = document.getElementById("content-event");
let key = "https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/event";
// let getEvent = async () => {
//   let response = await fetch(
//     "https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/event"
//   );
//   let eventTampil = await response.json();
//   let dataEvent = eventTampil;

//   dataEvent.slice(0, 3).forEach((item) => {
function getEvent(key) {
  fetch(key)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      res.slice(0, 3).map((item, index) => {
        let col = document.createElement("div");
        col.className = "card mb-3";
        col.id = index;
        let link = document.createElement("a");
        link.href = `javascript:goDetail(${item.id});`;
        link.classname = "link";
        link.id = "link-content"
        let card = document.createElement("div");
        card.className = "row g-0";
        let cardImage = document.createElement("div");
        cardImage.className = "col-md-4";
        let image = document.createElement("img");
        image.className = "img-fluid rounded-start image-event";
        image.src = item.posterEvent;
        image.style.height = "190px";
        image.style.width = "100%";
        let cardCol = document.createElement("div");
        cardCol.className = "col-md-8";
        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        let title = document.createElement("h4");
        title.className = "card-title";
        title.innerText = item.nameEvent
        let text = document.createElement("p");
        text.className = "card-text";
        text.innerText = `${item.descEvent.slice(0, 230)}...`;
        let date = document.createElement("p");
        date.className = "date";
        date.innerText = `${item.dateEvent}`;
        date.style.color = "gray";

        container.appendChild(col);
        col.appendChild(link);
        link.appendChild(card);
        card.appendChild(cardImage);
        cardImage.appendChild(image);
        card.appendChild(cardCol);
        cardCol.appendChild(cardBody);
        cardBody.appendChild(title);
        cardBody.appendChild(text);
        cardBody.appendChild(date);
      });
    });
}
getEvent(key);


function goDetail(x) {
  localStorage.setItem("index", x);
  window.location.href = "detail.html";
}
