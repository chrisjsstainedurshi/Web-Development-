/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function calculate() {
  const width = parseFloat(document.getElementById("width").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    alert("Please enter valid positive numbers for both width and height.");
    return;
  }

  const area = width * height;
  const perimeter = 2 * (width + height);

  document.getElementById("area").textContent = area;
  document.getElementById("perimeter").textContent = perimeter;
}

function recArea(){

}

function recPerimeter(){

}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/

// Function to calculate the area of the circle
function calculateArea() {
  // Step 1: Retrieve the radius input value
  const radius = parseFloat(document.getElementById("radius").value);

  // Step 2: Check if the radius is a valid number and greater than 0
  if (isNaN(radius) || radius <= 0) {
    alert("Please enter a valid positive number for the radius.");
    return;  // Exit the function if the input is invalid
  }

  // Step 3: Perform the area calculation: A = π * r²
  const area = Math.PI * Math.pow(radius, 2);

  // Step 4: Display the result in the appropriate element
  document.getElementById("circleArea").textContent = area.toFixed(2); // Show result with 2 decimal places
}

function calculateCircumference() {
  const radius = parseFloat(document.getElementById("radius").value);

  if (isNaN(radius) || radius <= 0) {
    alert("Please enter a valid positive number for the radius.");
    return;  
  }
  const circumference = 2 * Math.PI * radius;
  document.getElementById("circleCircumference").textContent = circumference.toFixed(2); // Show result with 2 decimal places
}

let pi = 3.1415926;

function cirArea(){

}

function cirPerimeter(){

}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/

function calculateArea() {
  const base = parseFloat(document.getElementById("base").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
    alert("Please enter valid positive numbers for the base and height.");
    return;
  }

  const area = (base * height) / 2;

  document.getElementById("triangleArea").textContent = area.toFixed(2); 
}

function calculatePerimeter() {
  const sideA = parseFloat(document.getElementById("sideA").value);
  const sideB = parseFloat(document.getElementById("sideB").value);
  const sideC = parseFloat(document.getElementById("sideC").value);

  if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
    alert("Please enter valid positive numbers for all three sides.");
    return;
  }

  const perimeter = sideA + sideB + sideC;

  document.getElementById("trianglePerimeter").textContent = perimeter.toFixed(2); 
}
function triArea(){

}

function triPerimeter(){

}