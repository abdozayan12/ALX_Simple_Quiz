// Get references to the input fields, buttons, and result span
const num1 = document.getElementById('number1');
const num2 = document.getElementById('number2');
const resultDisplay = document.getElementById('calculation-result');

// Get references to the operation buttons
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');

// Function to perform the calculation and display result
function calculate(operation) {
    const number1 = parseFloat(num1.value);
    const number2 = parseFloat(num2.value);

    // Check if input fields are filled and valid
    if (isNaN(number1) || isNaN(number2)) {
        resultDisplay.textContent = "Invalid input";
        return;
    }

    let result;
    // Perform calculation based on the operation
    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                resultDisplay.textContent = "Cannot divide by 0";
                return;
            }
            result = number1 / number2;
            break;
    }
    
    // Display the result
    resultDisplay.textContent = result;
}

// Add event listeners to the operation buttons
addButton.addEventListener('click', () => calculate('add'));
subtractButton.addEventListener('click', () => calculate('subtract'));
multiplyButton.addEventListener('click', () => calculate('multiply'));
divideButton.addEventListener('click', () => calculate('divide'));
