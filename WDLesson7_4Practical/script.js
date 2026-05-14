// ========================================
// CREATE LEAFLET MAP
// ========================================

const map = L.map("map").setView(
  [40.7128, -74.0060],
  11
);

// ========================================
// TILE LAYER
// ========================================

// ========================================
// SATELLITE TILE LAYER
// ========================================

L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  {
    attribution:
      'Tiles © Esri'
  }
).addTo(map);

// ========================================
// API URL
// ========================================

const url =
  "https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=1000";

// ========================================
// CARD CONTAINER
// ========================================

const cardContainer =
  document.getElementById("cards");

// ========================================
// FETCH DATA
// ========================================

fetch(url)

  .then(response => response.json())

  .then(data => {

    console.log(data);

    // ====================================
    // LOOP THROUGH COLLISIONS
    // ====================================

    data.forEach(collision => {

      // Skip if no coordinates
      if (
        !collision.latitude ||
        !collision.longitude
      ) {
        return;
      }

      // ====================================
      // GET DATA
      // ====================================

      const latitude =
        collision.latitude;

      const longitude =
        collision.longitude;

      const date =
        formatDate(collision.crash_date);

      const time =
        collision.crash_time || "Unknown";

      const borough =
        collision.borough || "Unknown";

      const street =
        collision.on_street_name || "Unknown";

      const crossStreet =
        collision.cross_street_name || "N/A";

      const injured =
        collision.number_of_persons_injured || 0;

      const killed =
        collision.number_of_persons_killed || 0;

      const factor =
        collision.contributing_factor_vehicle_1 || "Unknown";

      // ====================================
      // CREATE MARKER
      // ====================================

      const marker = L.circleMarker(
        [latitude, longitude],
        {
          radius: 7,

          fillColor:
            getMarkerColor(injured, killed),

          color: "#000",

          weight: 1,

          opacity: 1,

          fillOpacity: 0.85
        }
      ).addTo(map);

      // ====================================
      // POPUP
      // ====================================

      marker.bindPopup(`
        <div class="popup-content">

          <h3>🚗 Vehicle Collision</h3>

          <p>
            <strong>Date:</strong>
            ${date}
          </p>

          <p>
            <strong>Time:</strong>
            ${time}
          </p>

          <p>
            <strong>Borough:</strong>
            ${borough}
          </p>

          <p>
            <strong>Street:</strong>
            ${street}
          </p>

          <p>
            <strong>Cross Street:</strong>
            ${crossStreet}
          </p>

          <p>
            <strong>Injured:</strong>
            ${injured}
          </p>

          <p>
            <strong>Killed:</strong>
            ${killed}
          </p>

          <p>
            <strong>Cause:</strong>
            ${factor}
          </p>

        </div>
      `);

      // ====================================
      // CREATE CARD
      // ====================================

      const card =
        document.createElement("div");

      card.classList.add("card");

      card.innerHTML = `

        <h2>🚗 Motor Vehicle Collision</h2>

        <p>
          <strong>Date:</strong>
          ${date}
        </p>

        <p>
          <strong>Time:</strong>
          ${time}
        </p>

        <p>
          <strong>Borough:</strong>
          ${borough}
        </p>

        <p>
          <strong>Street:</strong>
          ${street}
        </p>

        <p>
          <strong>Cross Street:</strong>
          ${crossStreet}
        </p>

        <p>
          <strong>Persons Injured:</strong>
          ${injured}
        </p>

        <p>
          <strong>Persons Killed:</strong>
          ${killed}
        </p>

        <p>
          <strong>Cause:</strong>
          ${factor}
        </p>

      `;

      // ====================================
      // CARD CLICK EVENT
      // ====================================

      card.addEventListener("click", () => {

        // Zoom to marker
        map.setView(
          [latitude, longitude],
          16
        );

        // Open popup
        marker.openPopup();

      });

      // ====================================
      // ADD CARD TO PAGE
      // ====================================

      cardContainer.appendChild(card);

    });

  })

  // ========================================
  // ERROR HANDLING
  // ========================================

  .catch(error => {

    console.error(
      "Error fetching data:",
      error
    );

  });

// ========================================
// HELPER FUNCTIONS
// ========================================

// Format date nicely
function formatDate(dateString) {

  if (!dateString) {
    return "Unknown";
  }

  const date =
    new Date(dateString);

  return date.toLocaleDateString();
}

// Marker color based on severity
function getMarkerColor(
  injured,
  killed
) {

  const injuries =
    Number(injured || 0);

  const deaths =
    Number(killed || 0);

  // Fatality
  if (deaths > 0) {
    return "red";
  }

  // Injury
  if (injuries > 0) {
    return "orange";
  }

  // Minor/no injuries
  return "green";
}