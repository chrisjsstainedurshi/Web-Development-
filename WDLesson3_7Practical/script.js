/* Challenge 2: Create a function to serve as the event handler for the distance UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function calculateDistance() {
  const x1 = parseFloat(document.getElementById("x1").value);
  const y1 = parseFloat(document.getElementById("y1").value);
  const x2 = parseFloat(document.getElementById("x2").value);
  const y2 = parseFloat(document.getElementById("y2").value);

  const distance = Math.sqrt(
    Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
  );

  document.getElementById("result").textContent =
    "Distance: " + distance.toFixed(2);
}
/* Challenge 4: Create a function to serve as the event handler for the compound interest UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function calculateCompoundInterest() {
  // 1) Retrieve values from text inputs
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const compounds = parseInt(document.getElementById("compounds").value);
  const time = parseFloat(document.getElementById("time").value);

  const r = rate / 100;

  const amount = principal * Math.pow((1 + r / compounds), compounds * time);

  document.getElementById("compoundResult").textContent =
    "Total Amount: $" + amount.toFixed(2);
}