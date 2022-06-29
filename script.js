/*Add your JavaScript here*/

var dogScore = 0; // Store the dog score
var catScore = 0; // Store the cat score

var questionCount = 0; // Store the number of answers clicked on

// Store HTML elements using the DOM
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

// Listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", dog);
q1a2.addEventListener("click", cat);

q2a1.addEventListener("click", cat);
q2a2.addEventListener("click", dog);

q3a1.addEventListener("click", cat);
q3a2.addEventListener("click", dog);

// Track dog score and check if quiz is complete
function dog() {
  dogScore += 1; 
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "dogScore = " + dogScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
    
  }

}

// Track cat score and check if quiz is complete
function cat() {
  catScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "catScore = " + catScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }

}

// Update quiz result
function updateResult() {

  if (dogScore >= 2) {
    result.innerHTML = "You are a dog person!";
    console.log("You are a dog person!");
  } else if (catScore >= 2) {
    result.innerHTML = "You are a cat person!";
    console.log("You are a cat person!");
  }

}
