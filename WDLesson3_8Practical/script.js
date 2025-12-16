
//  For each challenge fix the error and explain the correction in the comment


/* Challenge 4: Does the function name match the event handler referenced in the event listener? */
function volume(){

  /* Challenge 5: Are there any errors in retrieving and parsing the information from the text inputs? */
  let r = parseInt(document.getElementBy("r").value);
  let height = parseInt(document.getElementbyId("height").value);

  /* Challenge 6: Does the variable output correctly create a reference to the output container? */
  let output = document.getElementById("output").value;

  /* Challenge 7: Is the following calculation for volume of a cylinder correct? */
  let v = math.PI * math.pow(r,2) / h;

  /* Challenge 8: Are there any errors in displaying the output? */
  output.innerHTML = `Volume of the cylinder is ${v} 

}