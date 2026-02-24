/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
function calculateBMI() {

  // Get user input
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);

  // Check that inputs are valid
  if (height > 0 && weight > 0) {

    // 1) Calculate BMI
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(1);

    let status = "";
    let image = "";

    // 2) Determine BMI status using else if and &&
    if (bmi < 18.5) {
      status = "Underweight";
      image = "images/underweight.png";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
      status = "Healthy Weight";
      image = "images/healthy.png";
    }
    else if (bmi >= 25.0 && bmi <= 29.9) {
      status = "Overweight";
      image = "images/overweight.png";
    }
    else if (bmi >= 30) {
      status = "Obesity";
      image = "images/obesity.png";
    }

    // 3) Display results
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi;
    document.getElementById("status").innerHTML = "Status: " + status;
    document.getElementById("bmiImage").src = image;

  } else {
    alert("Please enter valid height and weight values.");
  }
}

/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/

