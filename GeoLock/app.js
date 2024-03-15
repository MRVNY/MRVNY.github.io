const x = document.getElementById("demo");
const lutes = [48.845221, 2.353397];
const massy = [48.724823, 2.259433];

let radius = 0.1; // in km
let target = lutes;

function getDist (lat1, lon1, lat2, lon2) {
    let R = 6371; // km (change this constant to get miles)
    let dLat = (lat2 - lat1) * Math.PI / 180;
    let dLon = (lon2 - lon1) * Math.PI / 180;
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    return d;

}

function getLocation() {
    const x = document.getElementById("demo");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const x = document.getElementById("demo");
    console.log("Location: ", position.coords.latitude, position.coords.longitude);
    //x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;

    console.log("Target: ", target[0], target[1]);
    // x.innerHTML += "<br>Target: " + target[0] + ", " + target[1];

    //calculate distance from target in km
    let dist = getDist(position.coords.latitude, position.coords.longitude, target[0], target[1]);
    // x.innerHTML += "<br>Distance: " + dist + " km";
    console.log("Distance: ", dist);


  //if the position is 1km away from the target
  if (dist < radius) {
      x.innerHTML = "<a href='https://on.soundcloud.com/yZ8c9nvpoTwEhHrS8'>https://on.soundcloud.com/yZ8c9nvpoTwEhHrS8</a>";
    }
    else {
        x.innerHTML = "You are more than "+radius+"km away from the target";
    }

}