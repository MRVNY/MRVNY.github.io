function getDist(lat1, lon1, lat2, lon2) {
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

//return direction north, south, east, west, northeast, northwest, southeast, southwest
function getDir(lat1, lon1, lat2, lon2) {
    //Convert latitude and longitude to radians
    lat1 = lat1 * Math.PI / 180;
    lon1 = lon1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;

    let y = Math.sin(lon2 - lon1) * Math.cos(lat2);
    let x = Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    let theta = Math.atan2(y, x);

    let bearing = (theta * 180 / Math.PI + 360) % 360; // in degrees

    if (bearing >= 0 && bearing < 22.5) return "north";
    if (bearing >= 22.5 && bearing < 67.5) return "northeast";
    if (bearing >= 67.5 && bearing < 112.5) return "east";
    if (bearing >= 112.5 && bearing < 157.5) return "southeast";
    if (bearing >= 157.5 && bearing < 202.5) return "south";
    if (bearing >= 202.5 && bearing < 247.5) return "southwest";
    if (bearing >= 247.5 && bearing < 292.5) return "west";
    if (bearing >= 292.5 && bearing < 337.5) return "northwest";
    if (bearing >= 337.5) return "north";
}

function success(position) {
    const x = document.getElementById("demo");
    let dist = getDist(position.coords.latitude, position.coords.longitude, target.coords[0], target.coords[1]);

    //if the position is 1km away from the target
    if (dist < target.radius) {
        x.innerHTML = target.message;
    }
    else {
        x.innerHTML = "You are more than " + target.radius + "km away from the target";
    }
}

function successG(position) {
    console.log(position.coords.latitude + "," + position.coords.longitude);
    const x = document.getElementById("demo");
    let dist = getDist(position.coords.latitude, position.coords.longitude, target.coords[0], target.coords[1]);
    let dir = getDir(position.coords.latitude, position.coords.longitude, target.coords[0], target.coords[1]);

    if (dist < target.radius) {
        x.innerHTML = target.message;
    }
    else {
        x.innerHTML = "The target is to the " + dir;
    }
}

function error(err) {
    const x = document.getElementById("demo");
    x.innerHTML = "Unable to retrieve your location:" + err.message;
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(success, error);
}

function guessLocation() {
    navigator.geolocation.getCurrentPosition(successG, error);
}