function hasNetwork(online) {
    const element = document.querySelector(".status");
    
    // Update the DOM to reflect the current status
    if (online) {
      element.classList.remove("offline");
      element.classList.add("online");
      element.innerText = "You are online. :)";       //change the text value
    } else {
      alert("You are offline!!!");
      element.classList.remove("online");
      element.classList.add("offline");
      element.innerText = "You are offline. :(";      //change the text value
    }
  }
  
  window.addEventListener("load", () => {             //This will check the connectivity
    hasNetwork(navigator.onLine);
  
    window.addEventListener("online", () => {      
      // Set hasNetwork to online when they change to online.
      hasNetwork(true);
      alert("Connected to internet!!!");
    });
  
    window.addEventListener("offline", () => {
      // Set hasNetwork to offline when they change to offline.
      hasNetwork(false);
      //alert("You are offline!!!");
    });
  });
    