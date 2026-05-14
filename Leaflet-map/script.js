let mapObj;
let markerObj;

// Runs when page loads
window.onload = function(){

  get("lat").addEventListener("keypress", handleEnter);
  get("lon").addEventListener("keypress", handleEnter);

};

// Handle Enter key
function handleEnter(event){

  if(event.key === "Enter"){
    displayMap();
  }

}

// Display map from user input
function displayMap(){

  let lat = parseFloat(get("lat").value);
  let lon = parseFloat(get("lon").value);

  // Validation
  if(isNaN(lat) || isNaN(lon)){
    alert("Please enter valid coordinates.");
    return;
  }

  if(lat < -90 || lat > 90){
    alert("Latitude must be between -90 and 90.");
    return;
  }

  if(lon < -180 || lon > 180){
    alert("Longitude must be between -180 and 180.");
    return;
  }

  showMap(lat, lon);

}

// Main map function
function showMap(lat, lon){

  let location = [lat, lon];

  // Create map once
  if(!mapObj){

    mapObj = L.map("map");

    // Tile layer
    L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    maxZoom: 18,
    attribution:
      "&copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics"
  }
).addTo(mapObj);
    // Click map for coordinates
    mapObj.on("click", function(e){

      let clickedLat = e.latlng.lat.toFixed(4);
      let clickedLon = e.latlng.lng.toFixed(4);

      alert(
        `Latitude: ${clickedLat}\nLongitude: ${clickedLon}`
      );

    });

  }

  // Set map view
  mapObj.setView(location, 14);

  // Remove old marker
  if(markerObj){
    mapObj.removeLayer(markerObj);
  }

  // Add marker
  markerObj = L.marker(location).addTo(mapObj);

  // Popup
  markerObj.bindPopup(`
    <b>Selected Location</b><br>
    Latitude: ${lat}<br>
    Longitude: ${lon}
  `).openPopup();

}

// =======================
// PRESET LOCATIONS
// =======================

// Statue of Liberty
function loadStatue(){
  showMap(40.6892, -74.0445);
}

// Eiffel Tower
function loadEiffel(){
  showMap(48.8584, 2.2945);
}

// Golden Gate Bridge
function loadGoldenGate(){
  showMap(37.8199, -122.4783);
}

// Times Square
function loadTimesSquare(){
  showMap(40.7580, -73.9855);
}

// Grand Canyon
function loadGrandCanyon(){
  showMap(36.1069, -112.1129);
}

// Disney World
function loadDisney(){
  showMap(28.3852, -81.5639);
}

// Mount Everest
function loadEverest(){
  showMap(27.9881, 86.9250);
}

// Tokyo Tower
function loadTokyo(){
  showMap(35.6586, 139.7454);
}

// Sydney Opera House
function loadSydney(){
  showMap(-33.8568, 151.2153);
}

// Taj Mahal
function loadTajMahal(){
  showMap(27.1751, 78.0421);
}

// Niagara Falls
function loadNiagara(){
  showMap(43.0962, -79.0377);
}

// Hollywood Sign
function loadHollywood(){
  showMap(34.1341, -118.3215);
}

// White House
function loadWhiteHouse(){
  showMap(38.8977, -77.0365);
}