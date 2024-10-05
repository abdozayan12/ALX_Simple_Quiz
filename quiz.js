// Get references to the elements
const rightanswer = document.getElementById("choice1");
const wronganswer = document.getElementById("choice2");
const wronganswer2 = document.getElementById("choice3");
const submit = document.getElementById("submit-answer");
const feedback = document.getElementById("feedback");

// Add event listener to the submit button
submit.addEventListener("click", checkAnswer);

function checkAnswer() {
  // Reset feedback text before checking answers
  feedback.textContent = "";

  // Check which answer is selected and provide feedback
  if (rightanswer.checked) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "green";
  } else if (wronganswer.checked || wronganswer2.checked) {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Please select an answer";
    feedback.style.color = "orange";
  }
}
