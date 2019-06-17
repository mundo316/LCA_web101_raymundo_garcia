var myLocation = document.getElementById("my-coordinates")

function getLocation() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayPosition)
  } 
  else {
   myLocation.innerHTML = "Not available"
  }
}

function displayPosition(position) {
  myLocation.innerHTML = "longitude" + position.coords.longitude + " latitude" + position.coords.latitude
}