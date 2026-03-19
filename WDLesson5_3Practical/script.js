function balance() {
  let P = parseFloat(document.getElementById("p").value); 
  let R = parseFloat(document.getElementById("r").value) / 100; 
  let T = parseInt(document.getElementById("t").value); 
  let n = 1; 

  if (isNaN(P) || isNaN(R) || isNaN(T)) {
    document.getElementById("output").innerHTML = "<p style='color:red'>Please enter valid numbers for all fields.</p>";
    return;
  }

  
  let table = "<table border='1' cellpadding='5' cellspacing='0'>";
  table += "<tr><th>Year</th><th>Balance</th></tr>";

  for (let year = 1; year <= T; year++) {
    let A = P * Math.pow((1 + R / n), n * year);

    table += `<tr><td>${year}</td><td>$${A.toFixed(2)}</td></tr>`;
  }

  table += "</table>";
  document.getElementById("output").innerHTML = table;
}