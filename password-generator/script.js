const passwordInput = document.querySelector(".password-box input");
const copyIcon = document.querySelector(".password-box .copy-icon");
const rangeInput = document.querySelector(".range-box input");
const sliderNumber = document.querySelector(".range-box .slider-number");
const generateBtn = document.querySelector(".generate-button");

// console.log(passwordInput, copyIcon, rangeInput, sliderNumber, generateBtn);

// Characters of alphabet (a-z/A-Z), numbers(0-9), and Symbols($%&[]...)
let allCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
  "abcdefghijklmnopqrstuvwxyz0123456789@#$^![](){}:;.,*+-<>";

// function called on page reload, button click, and rangeInput slide
const generatePassword = () => {
  let newPassword = "";

  // for loop with rangeInput value
  for (let i = 0; i < Number.parseInt(rangeInput.value, 10); i++) {
    // generate a random number basedon length of all characters
    let randomNumbers = Math.floor(Math.random() * allCharacters.length);
    // use random number to grab a character from the allCharacters string
    console.log(allCharacters[randomNumbers]);

    // add to newPassword
    newPassword += allCharacters[randomNumbers];
  }

  console.log(newPassword);
  // show newPassword in input field
  passwordInput.value = newPassword;
  // make sure copyIcon is displayed and does not show file icon
  copyIcon.classList.replace("uil-file-check-alt", "uil-copy");
};

// change the number based on user input selection from range input
rangeInput.addEventListener("input", () => {
  sliderNumber.textContent = rangeInput.value;
  generatePassword();
});

// copy passwordInput value on copyIcon click
copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);

  // change icon once copy icon clicked
  copyIcon.classList.replace("uil-copy", "uil-file-check-alt");
});

generatePassword();
generateBtn.addEventListener("click", generatePassword);
