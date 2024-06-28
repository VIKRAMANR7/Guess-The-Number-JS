let numberInput = document.querySelector(".input-num");
let guessBtn = document.querySelector(".btn");
let noOfGuesses = document.querySelector(".noOfGuesses");
let alertBox = document.querySelector(".alert-box");
let guessedNumbers = document.querySelector(".guess-numbers");
let correctMessage = document.querySelector(".success-message");
let correctNumber = document.querySelector(".success-number");
let noOfTries = document.querySelector(".success-tries");
let errorContainer = document.querySelector(".error-container");
let successContainer = document.querySelector(".success-container");
let randomNumber = Math.floor(Math.random() * 100) + 1;
let restartButton = document.querySelector(".restart");
let guess = 0;
let arr = "";
guessBtn.addEventListener("click", () => {
  let numberInputVal = Number(numberInput.value);
  if (numberInputVal <= 0 || numberInputVal > 100) {
    alertBox.style.display = "block";
    alertBox.innerHTML = "Please enter valid input number";
  } else {
    arr = arr + numberInputVal + ",";

    if (numberInputVal > randomNumber) {
      guess++;
      alertBox.style.display = "block";
      alertBox.innerHTML = "Too high. Try Again!";
      guessedNumbers.innerHTML = `Guessed Numbers are: ${arr.substring(
        0,
        arr.length - 1
      )}`;
      noOfGuesses.innerHTML = `No. Of Guesses: ${guess}`;
    } else if (numberInputVal < randomNumber) {
      guess++;
      alertBox.style.display = "block";
      alertBox.innerHTML = "Too low. Try Again!";
      noOfGuesses.innerHTML = `No. Of Guesses: ${guess}`;
      guessedNumbers.innerHTML = `Guessed Numbers are: ${arr.substring(
        0,
        arr.length - 1
      )}`;
    } else {
      guess++;
      errorContainer.style.display = "none";
      successContainer.style.display = "block";
      correctMessage.innerHTML = "Congratulations";
      correctNumber.innerHTML = `The number was ${randomNumber}.`;
      noOfTries.innerHTML = `You guessed the number in ${guess} tries`;
      guessedNumbers.innerHTML = `Guessed Numbers are: ${arr.substring(
        0,
        arr.length - 1
      )}`;
    }
  }
});

restartButton.addEventListener("click", () => {
  errorContainer.style.display = "block";
  successContainer.style.display = "none";
  alertBox.style.display = "none";
  numberInput.value = "";
  noOfGuesses.innerHTML = "No. Of Guesses: 0";
  guessedNumbers.innerHTML = "Guessed Numbers are: None";
});
