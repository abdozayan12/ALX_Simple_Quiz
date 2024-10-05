const rightanswer = document.getElementById("choice1");
const wronganswer = document.getElementById("choice2");
const wronganswer2 = document.getElementById("choice3");
const submit = document.getElementById("submit-answer");

submit.addEventListener("click", checkAnswer);

function checkAnswer() {
  if (rightanswer.checked) {
    alert("Correct!");
  } else if (wronganswer.checked || wronganswer2.checked) {
    alert("Incorrect");
  } else {
    alert("Please select an answer");
  }
}
