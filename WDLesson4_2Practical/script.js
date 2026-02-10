// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */
function calculateArea() {
  // Get values from input fields
  let length = parseFloat(document.getElementById('length').value);
  let width = parseFloat(document.getElementById('width').value);
  
  // Get the result element to display the message
  let result = document.getElementById('result');
  
  // Check if any value is less than or equal to 0
  if (length <= 0 || width <= 0) {
    result.innerHTML = "Inappropriate measurement";
    result.style.color = "red";  // Optional: style the error message
  } else {
    // Calculate and display the area
    let area = length * width;
    result.innerHTML = `The area of the rectangle is: ${area}`;
    result.style.color = "green";  // Optional: style the result message
  }
}

/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/

   function pet() {
  // Get the selected animal and emotion from dropdowns
  const animal = document.getElementById("animal").value;
  const emotion = document.getElementById("emotion").value;
  
  // Check if both animal and emotion are selected
  if (animal === "Select animal" || emotion === "Select emotion") {
    document.getElementById("output").innerHTML = "Please select both an animal and an emotion.";
    return;
  }

  // Prepare image source or description based on the selected animal and emotion
  let imageSrc = "";
  let altText = "";
  
  if (animal === "bear" && emotion === "funny") {
    imageSrc ="funnyBear.jpg"; altText = "A funny bear";
  } else if (animal === "bear" && emotion === "sad") {
    imageSrc = "sadBear.jpg"; altText = "A sad bear"; 

  } else if (animal === "cat" && emotion === "funny") {
    imageSrc = "funnyCat.jpg"; altText = "A funny cat";
  } else if (animal === "cat" && emotion === "sad") {
    imageSrc = "sadCat.jpg"; altText = "A sad cat";
  } else if (animal === "dog" && emotion === "funny") {
    imageSrc = "funnyDog.jpg"; altText = "A funny dog";
  } else if (animal === "dog" && emotion === "sad") {
    imageSrc = "sadDog.jpg"; altText = "A sad dog";
  }

  // Display the image or message
  if (imageSrc) {
    document.getElementById("output").innerHTML = `<img src="${imageSrc}" alt="${altText}" style="max-width: 100%; height: auto;">`;
  }
}
