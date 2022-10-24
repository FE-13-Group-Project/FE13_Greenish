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
    location.reload();
    localStorage.removeItem("roleUser");
  }