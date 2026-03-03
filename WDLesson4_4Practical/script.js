/* Challenge 2: Complete the function generateProblem by ,
       1) Create a variable for the <span> with id of problem
       2) Generate two random numbers between 0 and 20
       3) Store the correct answer in the variable correct declared below.  This will be used in checkProblem( )
       4) Using string interpolation, display an addition problem like "2 + 2 =" except using the random numbers generated. 
*/
function generateProblem(){
       let problem = document.getElementById("problem");
       let num1 = Math.floor(Math.random() * 10 + 1);
       let num2 = Math.floor(Math.random() * 10 + 1);
       correct = num1 + num2;
       let build = `${num1} + ${num2} = `
       problem.innerHTML = build;
}


/* Challenge 3: Complete the function checkResponse by ,
       1) Create a variable for the users response
       2) Create a variable for the <div> with id of output
       3) Create a variable msg for the output
       4) Using an if / else statement check to see if the user response is correct. 
           a) if the reponse is correct, set msg to "Correct!" along with the correct image
           b) otherwise set msg to "Incorrect. The answer is " followed by the correct answer.  
           Also include incorrect image afterwards
       4) Display msg in the output
*/
function checkProblem(){
       let response = parseInt(document.getElementById("response").value);
       let output = document.getElementById("output");

       let build = "";

       if(response == correct){
              build = "<img src=correct.webp>"
       }else{
              build = "<img src=incorrect.avif>"
       }
       output.innerHTML = build;
}


/* Challenge Bonus: Could you randomize the operations so it is not only addition.  
Hint: Generate a random number to decide whether the problem is an addition, substraction, multiplication or division problem.
*/



