
// Variables to store current input, operator, and operands
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';


// Function to append numbers or decimal to the display
function appendNumber(number) {
  currentInput += number; // Concatenate the number to the current input
  document.getElementById('display').value = currentInput; // Update the display with the current input
}


// Function to set the operator (+, -, *, /)
function setOperator(op) {
  if (currentInput !== '') {
    operator = op; // Set the operator
    firstOperand = currentInput; // Store the first operand
    currentInput = ''; // Reset the current input for the next number

     // Display the selected operator below the numbers
     document.getElementById('operator-display').innerText = op;
  }
}



// Function to clear the display and reset the input
function clearDisplay() {
  currentInput = ''; // Reset the current input
  document.getElementById('display').value = ''; // Clear the display
}




// Function to perform the calculation
function calculate() {
  if (operator !== '' && currentInput !== '') {
    secondOperand = currentInput; // Store the second operand
    let result = 0; // Variable to hold the result


      // Perform arithmetic operations based on the operator
    switch (operator) {
      case '+':
        result = parseFloat(firstOperand) + parseFloat(secondOperand);
        break;
      case '-':
        result = parseFloat(firstOperand) - parseFloat(secondOperand);
        break;
      case '*':
        result = parseFloat(firstOperand) * parseFloat(secondOperand);
        break;
      case '/':
        result = parseFloat(firstOperand) / parseFloat(secondOperand);
        break;
    }

     // Update the display with the result
    document.getElementById('display').value = result; 
    currentInput = result.toString(); // Set the current input to the result
    operator = '';  // Reset the operator
    firstOperand = ''; // Reset the first operand
    secondOperand = ''; // Reset the second operand
    
    // Clear the operator display
    document.getElementById('operator-display').innerText = '';
  }
}