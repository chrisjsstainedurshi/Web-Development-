// Global variable to store correct answer
let correct;

// BONUS: store current operator
let operator;

// Function to generate a new problem
function generateProblem() {

  // 1) Get the span with id "problem"
  let problemSpan = document.getElementById("problem");

  // 2) Generate two random numbers between 0 and 20
  let num1 = Math.floor(Math.random() * 21);
  let num2 = Math.floor(Math.random() * 21);

  // BONUS: Randomize operation
  let opChoice = Math.floor(Math.random() * 4);

  if (opChoice === 0) {
    operator = "+";
    correct = num1 + num2;
  } 
  else if (opChoice === 1) {
    operator = "-";
    correct = num1 - num2;
  } 
  else if (opChoice === 2) {
    operator = "×";
    correct = num1 * num2;
  } 
  else {
    operator = "÷";
    
    // Prevent messy decimals in division
    num2 = Math.floor(Math.random() * 20) + 1; // avoid divide by 0
    correct = num1;
    num1 = num1 * num2;
  }

  // 4) Display the problem using string interpolation
  problemSpan.textContent = `${num1} ${operator} ${num2} =`;
}


// Function to check the user's response
function checkResposne() {

  // 1) Get user's response
  let userResponse = Number(document.getElementById("response").value);

  // 2) Create output div if it doesn't exist
  let output = document.getElementById("output");

  if (!output) {
    output = document.createElement("div");
    output.id = "output";
    document.querySelector(".card").appendChild(output);
  }

  // 3) Create message variable
  let msg;

  // 4) Check if correct
  if (userResponse === correct) {
    msg = `Correct! 🎉 <br>
           <img src="correct.webp" width="150">`;
  } 
  else {
    msg = `Incorrect. The answer is ${correct}. <br>
           <img src="incorrect.avif" width="150">`;
  }

  // 5) Display message
  output.innerHTML = msg;
}


