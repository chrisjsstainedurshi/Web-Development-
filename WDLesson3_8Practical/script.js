
//  For each challenge fix the error and explain the correction in the comment


/* Challenge 4: Does the function name match the event handler referenced in the event listener? */
function cylinder() {

  /* Challenge 5: Are there any errors in retrieving and parsing the information from the text inputs? */
    let r = parseFloat(document.getElementById("r").value);
    let h = parseFloat(document.getElementById("h").value);
  /* Challenge 6: Does the variable output correctly create a reference to the output container? */
    let output = document.getElementById("output");

  /* Challenge 7: Is the following calculation for volume of a cylinder correct? */
    let v = Math.PI * Math.pow(r, 2) * h;

  /* Challenge 8: Are there any errors in displaying the output? */
    output.innerHTML = `Volume of the cylinder is ${v.toFixed(2)}`;
}