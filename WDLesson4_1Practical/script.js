function discount() {
  let price1 = parseFloat(document.getElementById("price1").value);
  let price2 = parseFloat(document.getElementById("price2").value);
  let price3 = parseFloat(document.getElementById("price3").value);
  <button type="button">Calculate</button>
  let output = document.getElementById("output");
}

function collision() {
  let x1 = parseFloat(document.getElementById("x1").value);
  let y1 = parseFloat(document.getElementById("y1").value);
  let x2 = parseFloat(document.getElementById("x2").value);
  let y2 = parseFloat(document.getElementById("y2").value);
  let output = document.getElementById("output");
  let filename = "";

  let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

  if (distance < 5) {
    filename = "explosion.gif";
  } else {
    filename = "snoopy-pilot.gif";
  }

  output.innerHTML = `<img src="${filename}" alt="Collision Result">`;
}

let secret = Math.floor(Math.random() * 10 + 1); // Secret number between 1 and 10

function guess() {
  let g = parseFloat(document.getElementById("guess").value); // Get user's guess
  let output = document.getElementById("output");
  let message = "";


let secret = Math.floor(Math.random() * 10 + 1); // Secret number between 1 and 10


  // Challenge 5: If the guess is lower than secret
  if (g < secret) {
    message = "Guess higher!";
  }
  // Challenge 6: If the guess is higher than secret
  else if (g > secret) {
    message = "Guess lower!";
  }
  // Challenge 7: If the guess is equal to secret
  else if (g === secret) {
    message = "You got it!";
  }

  // Display the message
  output.innerHTML = `<h3>${message}</h3>`;
}