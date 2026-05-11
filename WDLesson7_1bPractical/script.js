// script.js
let data, output;

function init(){
  $.ajaxSetup({async: false});
  
  // Assuming data.js exports an array of violations
  // For 311 data you'd load a different file
  data = $.getJSON("data.js").responseJSON;
  output = get("output");
  
  // Challenge 2: Test the card( ) developed in Challenge 1
  // Assuming first item can be treated as 311 complaint for demo
  if (data && data.length > 0) {
    const testComplaint = {
      complaint_type: "Noise - Street/Sidewalk",
      created_date: "2026-05-10T14:30:00.000",
      agency: "NYPD",
      status: "Open",
      descriptor: "Loud Music/Party",
      incident_address: "123 Main St",
      borough: "MANHATTAN"
    };
    output.appendChild(card(testComplaint));
  }

  // Challenge 4: Display all Open Parking and Camera Violations using cards()
  if (data && data.length > 0) {
    const violationCards = cards(data);
    violationCards.forEach(c => output.appendChild(c));
  } else {
    output.innerHTML = "<p>No data found. Check data.js</p>";
  }
}