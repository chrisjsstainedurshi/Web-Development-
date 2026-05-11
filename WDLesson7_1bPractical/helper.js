// helper.js
// get( ) accepts an id of an element and returns the actual element with that id
function get(id){
  return document.getElementById(id);
}

// Format ISO date strings to something readable
function formatDate(dateStr) {
  if (!dateStr) return "N/A";
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString("en-US", {
    year: "numeric", month: "short", day: "numeric"
  });
}

// Challenge 1: Create a function card that accepts a JSON of a 311 complaint
// Returns a DOM element for the complaint
function card(complaint) {
  const div = document.createElement("div");
  div.className = "card complaint-card";
  
  // Color code by status
  const status = (complaint.status || "").toLowerCase();
  if (status.includes("closed")) div.classList.add("status-closed");
  else if (status.includes("open") || status.includes("pending")) div.classList.add("status-open");
  
  div.innerHTML = `
    <h3 class="heading">${complaint.complaint_type || "311 Complaint"}</h3>
    <p><span class="highlight">Created:</span> ${formatDate(complaint.created_date)}</p>
    <p><span class="highlight">Agency:</span> ${complaint.agency || "N/A"}</p>
    <p><span class="highlight">Status:</span> ${complaint.status || "N/A"}</p>
    <p><span class="highlight">Descriptor:</span> ${complaint.descriptor || "N/A"}</p>
    <p><span class="highlight">Location:</span> ${complaint.incident_address || complaint.borough || "N/A"}</p>
    ${complaint.resolution_description ? 
      `<p><span class="highlight">Resolution:</span> ${complaint.resolution_description}</p>` : ""
    }
  `;
  return div;
}

// Challenge 2: Create a function cards that accepts an array of violations
// Returns an array of card DOM elements
function cards(violations) {
  if (!Array.isArray(violations)) return [];
  
  return violations.map(v => {
    const div = document.createElement("div");
    div.className = "card violation-card";
    
    // Highlight high fine amounts
    const amount = parseFloat(v.fine_amount) || 0;
    if (amount >= 100) div.classList.add("high-fine");
    
    div.innerHTML = `
      <h3 class="heading">Violation #${v.summons_number || "N/A"}</h3>
      <p><span class="highlight">Plate:</span> ${v.plate || "N/A"} (${v.state || "N/A"})</p>
      <p><span class="highlight">Issue Date:</span> ${formatDate(v.issue_date)}</p>
      <p><span class="highlight">Violation:</span> ${v.violation || "N/A"}</p>
      <p><span class="highlight">Fine Amount:</span> $${amount.toFixed(2)}</p>
      <p><span class="highlight">Penalty:</span> $${parseFloat(v.penalty_amount || 0).toFixed(2)}</p>
      <p><span class="highlight">Amount Due:</span> $${parseFloat(v.amount_due || 0).toFixed(2)}</p>
      <p><span class="highlight">Precinct:</span> ${v.precinct || "N/A"}</p>
    `;
    return div;
  });
}