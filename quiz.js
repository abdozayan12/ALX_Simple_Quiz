// Get references to the elements
const choices = document.querySelectorAll('input[name="quiz"]');  // Select all radio buttons
const submit = document.getElementById("submit-answer");
const feedback = document.getElementById("feedback");

// Add event listeners to the radio buttons to enable submit button when an answer is selected
choices.forEach(choice => {
  choice.addEventListener("change", () => {
    submit.disabled = false;  // Enable the submit button when an option is selected
    feedback.textContent = "";  // Clear feedback on new selection
  });
});

// Add event listener to the submit button
submit.addEventListener("click", checkAnswer);

function checkAnswer() {
  let selectedAnswer = document.querySelector('input[name="quiz"]:checked');

  if (selectedAnswer) {
    if (selectedAnswer.value === "4") {
      feedback.textContent = "Correct!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Incorrect";
      feedback.style.color = "red";
    }
    // Disable submit button after answering until a new selection is made
    submit.disabled = true;
    // Reset the radio buttons after submitting an answer
    selectedAnswer.checked = false;
  } else {
    feedback.textContent = "Please select an answer";
    feedback.style.color = "orange";
  }
}
