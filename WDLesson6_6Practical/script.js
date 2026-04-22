let data; // Declare data globally

// Initialize function to fetch and display data
async function init() {
  const link = "311.json"; // Make sure this file is accessible
  const info = await fetch(link);
  data = await info.json();

  const output = document.getElementById("output");
  let build = "";

  for (let i = 0; i < data.length; i++) {
    const complaint = data[i];
    build += `<div class="fitted card">
                <h3>${complaint.complaint_type}</h3>
                <hr>
                <p>Borough: ${complaint.borough}</p>
                <p>Zip: ${complaint.incident_zip}</p>
                <p>Descriptor: ${complaint.descriptor}</p>
                <hr>
                <p>Date: ${complaint.created_date}</p>
                <hr>
                <p>Agency: ${complaint.agency}</p>
              </div>`;
  }
  output.innerHTML = build;
}

// Call init on window load
window.onload = async () => {
  await init();

  // Attach event listener for complaint type filter button
  document.getElementById('filterComplaintBtn').addEventListener('click', filterByComplaintType);
};

// Function to filter by borough
function filterByBorough() {
  const output = document.getElementById("output");
  const result = document.getElementById("result");
  const borough = document.getElementById("borough").value.trim().toLowerCase();

  let build = "";
  let ct = 0;

  for (let i = 0; i < data.length; i++) {
    const complaint = data[i];
    if (complaint.borough && complaint.borough.toLowerCase() === borough) {
      build += `<div class="fitted card">
                  <h3>${complaint.complaint_type}</h3>
                  <hr>
                  <p>Borough: ${complaint.borough}</p>
                  <p>Zip: ${complaint.incident_zip}</p>
                  <p>Descriptor: ${complaint.descriptor}</p>
                  <hr>
                  <p>Date: ${complaint.created_date}</p>
                  <hr>
                  <p>Agency: ${complaint.agency}</p>
                </div>`;
      ct++;
    }
  }
  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}

// Function to filter by complaint type
function filterByComplaintType() {
  const selectedType = document.getElementById('complaintTypeSelect').value.trim();
  const resultsDiv = document.getElementById('complaintResults');

  // Clear previous results
  resultsDiv.innerHTML = "";

  if (selectedType === "") {
    alert("Please select a complaint type");
    return;
  }

  let build = "";
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    const complaint = data[i];
    if (complaint.complaint_type && complaint.complaint_type === selectedType) {
      build += `<div class="fitted card">
                  <h3>${complaint.complaint_type}</h3>
                  <hr>
                  <p>Borough: ${complaint.borough}</p>
                  <p>Zip: ${complaint.incident_zip}</p>
                  <p>Descriptor: ${complaint.descriptor}</p>
                  <hr>
                  <p>Date: ${complaint.created_date}</p>
                  <hr>
                  <p>Agency: ${complaint.agency}</p>
                </div>`;
      count++;
    }
  }
  resultsDiv.innerHTML = `${count} Results found.`;
  // Optionally, also update main output
  document.getElementById('output').innerHTML = build;
}