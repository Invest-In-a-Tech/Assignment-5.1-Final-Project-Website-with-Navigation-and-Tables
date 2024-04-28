// function that checks if a string is a palindrome
function isPalindrome(str) {
  // remove spaces and convert to lowercase (clean up the input)
  var cleanedInput = str.toLowerCase().replace(/\s/g, "");

  // reverse the string
  var reversedInput = cleanedInput.split("").reverse().join("");

  // check if the string is a palindrome
  return cleanedInput === reversedInput;
}

// Trigger function when the button is clicked in the HTML file
function checkPalindrome() {
  
  // Gets the user input from the input field in the HTML file
  var userInput = document.getElementById('userInput').value;
  
  // Check for 'exit' or empty input
  if (userInput.toLowerCase() === "exit" || userInput === '') {
      // displays a message to the user in the HTML file
      document.getElementById('result').innerText = "Exiting or please enter a word.";
      return;
  }

  // Call the isPalindrome function and display the result
  if (isPalindrome(userInput)) {
      document.getElementById('result').innerText = "'" + userInput + "' is a palindrome.";
  } else {
      document.getElementById('result').innerText = "'" + userInput + "' is not a palindrome.";
  }

  // clear the input field after clicking the button
  document.getElementById('userInput').value = '';
}

// Created an event listener to handle the "Enter" key for input submission
document.getElementById('userInput').addEventListener('keypress', function(event) {
  if (event.key === "Enter") {
      checkPalindrome(); // Call the check function when Enter is pressed
  }
});
