const rightanswer = document.getElementById("choice1")
const wronganswer = document.getElementById("choice2")
const wronganswer2 = document.getElementById("choice3")
const submit = document.getElementById("submit-answer")

submit.addEventListener("click", checkAnswer)


function checkAnswer() {
if (rightanswer.checked == true) {
    alert("Correct!")
  if (wronganswer.checked == true) {
    alert("Incorrect")
  }
    if (wronganswer2.checked == true) {
        alert("Incorrect")
    }
    else {
        alert("Please select an answer")
    }  
    
}}