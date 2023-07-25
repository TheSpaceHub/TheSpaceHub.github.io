const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.open("GET", "https://investors-exchange-iex-trading.p.rapidapi.com/stock/GOOG/short-interest");
xhr.setRequestHeader('X-RapidAPI-Key', '');
xhr.setRequestHeader('X-RapidAPI-Host', 'investors-exchange-iex-trading.p.rapidapi.com');
xhr.responseType = "json";

let data = null;

xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = xhr.response;
      console.log(data);
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };

localStorage.setItem("name", "fsjnsdfg");

const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    let latlon = position.coords.latitude + "," + position.coords.longitude;
  
    let img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";
  
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
  }

  getLocation();