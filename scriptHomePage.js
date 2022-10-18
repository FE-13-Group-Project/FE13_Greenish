let contentItem = document.getElementById("content-event");
let getEvent = async () => {
    let response = await fetch(
      "https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/event"
    );
    let eventTampil = await response.json();
    let dataEvent = eventTampil;
    console.log(dataEvent);
    dataEvent.slice(0, 3).forEach((item) => {
        console.log(item);
      contentItem.innerHTML += `<div class="card mb-3" style="max-width: 100%;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${item.posterEvent}" class="img-fluid rounded-start image-event" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">${item.nameEvent}</h4>
            <p class="card-text">${(item.descEvent).slice(0,250)} ...</p>
            <p class="card-text"><small class="text-muted">Tanggal event ${item.dateEvent}</small></p>
          </div>
        </div>
      </div>
    </div>`;
    });
  };
  getEvent();