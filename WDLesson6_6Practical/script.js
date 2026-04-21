let data;
async function init(){
  
  //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000"
  let link = "311.json"
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    build += `<div class="fitted card">
                 <h3>${complaint.complaint_type}</h3>
                 <hr>
                 <p>${complaint.borough}</p>
                 <p>${complaint.incident_zip}</p>
                 <p>${complaint.descriptor}</p>
                 <hr>
                 <p>${complaint.created_date}</p>
                 <hr>
                 <p>${complaint.agency}</p>
              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information.  Use as a guide for Challenge 2 and 4.
function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.borough == borough){
      build += `<div class="fitted card">
                    <h3>${complaint.complaint_type}</h3>
                    <hr>
                    <p>${complaint.borough}</p>
                    <p>${complaint.incident_zip}</p>
                    <p>${complaint.descriptor}</p>
                    <hr>
                    <p>${complaint.created_date}</p>
                    <hr>
                    <p>${complaint.agency}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

<!-- Filter UI for Complaint Type -->
<div id="complaint-filter-section">
  <label for="complaintTypeSelect">Filter by Complaint Type:</label>
  <select id="complaintTypeSelect">
    <option value="">--Select Complaint Type--</option>
    <option value="Pothole">Pothole</option>
    <option value="Streetlight outage">Streetlight outage</option>
    <option value="Graffiti removal">Graffiti removal</option>
    <option value="Broken sidewalk">Broken sidewalk</option>
    <option value="Waste collection issue">Waste collection issue</option>
    <!-- Add more options as needed -->
  </select>
  <button id="filterComplaintBtn">Filter</button>
</div>

<div id="complaintResults"></div>

<script>
  // Sample dataset
  const serviceRequests = [
    { id: 1, description: "Pothole on Main St", zip: "12345", complaintType: "Pothole" },
    { id: 2, description: "Streetlight outage", zip: "54321", complaintType: "Streetlight outage" },
    { id: 3, description: "Graffiti removal", zip: "12345", complaintType: "Graffiti removal" },
    { id: 4, description: "Broken sidewalk", zip: "67890", complaintType: "Broken sidewalk" },
    { id: 5, description: "Waste collection issue", zip: "54321", complaintType: "Waste collection issue" },
  ];

  // Add event listener for the filter button
  document.getElementById('filterComplaintBtn').addEventListener('click', function() {
    const selectedType = document.getElementById('complaintTypeSelect').value.trim();

    // Check if a complaint type was selected
    if (selectedType === "") {
      alert("Please select a complaint type");
      return;
    }

    // Filter requests based on complaint type
    const filteredRequests = serviceRequests.filter(request => request.complaintType === selectedType);

    // Display the filtered requests
    displayComplaintRequests(filteredRequests);
  });

  // Function to display filtered requests
  function displayComplaintRequests(requests) {
    const resultsDiv = document.getElementById('complaintResults');
    resultsDiv.innerHTML = ""; // Clear previous results

    if (requests.length === 0) {
      resultsDiv.innerHTML = "<p>No requests found for this complaint type.</p>";
      return;
    }

    const ul = document.createElement('ul');
    requests.forEach(request => {
      const li = document.createElement('li');
      li.textContent = `ID: ${request.id} - ${request.description}`;
      ul.appendChild(li);
    });
    resultsDiv.appendChild(ul);
  }
</script>