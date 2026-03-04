/* Challenge 2: Create the function that will calculate the balance in an account using compound 
interest after t number of years.

Notes:
1) Don't let the formula scare you.  Simply translate it into JS
2) Create a for loop where the loop variable is t and the condition ends at the number of years 
the user specifies in the text input.
3) Use a build variable to create an output that looks like this
Year 1: $xxxxxx
Year 2: $xxxxxx
Year 3: $xxxxxx
...
Year N: $xxxxxx
*/

function calculateInterest() {

  // Get user input values
  let P = parseFloat(document.getElementById("principal").value);
  let r = parseFloat(document.getElementById("rate").value);
  let n = parseInt(document.getElementById("compound").value);
  let t = parseInt(document.getElementById("years").value);

  // Convert percentage rate to decimal
  r = r / 100;

  let build = "";

  // Loop from Year 1 to Year t
  for (let year = 1; year <= t; year++) {

    // Compound Interest Formula: A = P(1 + r/n)^(n * year)
    let A = P * Math.pow((1 + r / n), n * year);

    build += "Year " + year + ": $" + A.toFixed(2) + "<br>";
  }

  // Output result
  document.getElementById("output").innerHTML = build;
}