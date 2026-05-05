// display() accepts information and displays it to the console and the output container
function display(info){
  document.getElementById("output").innerHTML += `<div class="card">${info}</div>`;
  console.log(info);
}
// rnd( ) accepts the lower and upper bounds for a random number.  rnd() returns a random number between the lower and upper bounds provided as arguments.
function rnd( lower, upper){
  let range = upper - lower;
  return Math.floor(Math.random()*range + lower);
}
// area( ) accepts the length and width of a rectangle and returns the area of that rectangle.
function area( length, width){
  return length * width;
}
// celsius( ) accepts a temperature in Fahrenheit and returns the equivalent temperature in Celsius
function celsius( temp ){
  return (temp - 32) * 5 / 9;
}

/* ==========================================================*/

//Challenge 3: Create a function bmi that accepts a person's height and weight and then returns the person's bmi.Hint:  Look up the formula. You have done this in past activities.
function bmi(height, weight){
  return weight / (height * height);
}

//Challenge 5: Create a function bmiCategory that accepts a person's bmi and returns their category as either "under weight", "normal weight", "over weight" or "obese".  Hint: This requires decision.  You have done this in past activities.
function bmiCategory(b){
  if (b < 18.5){
    return "under weight";
  } else if (b < 25){
    return "normal weight";
  } else if (b < 30){
    return "over weight";
  } else {
    return "obese";
  }
}

//Challenge 7: Create a function lottery that accepts how many random numbers to produce and returns a string of that many random numbers.  Random numbers are from 1 to 48.  Hint: This solution requires a for loop and a build variable. Use the rnd( ) provided at the top to produce random numbers.  
function lottery(count){
  let result = "";

  for(let i = 0; i < count; i++){
    result += rnd(1,49) + " ";
  }

  return result;
}


//Challenge 9: Create a function results that accepts an array of "Y" or "N" response and returns the number of "Y" responses.
function results(arr){
  let count = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === "Y"){
      count++;
    }
  }

  return count;
}

