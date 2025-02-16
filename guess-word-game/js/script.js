const inputs = document.querySelector(".inputs"); // div that holds all the inputs
const hint = document.querySelector(".hint span");
const wrongLetter = document.querySelector(".wrong-letter");
const resetBtn = document.querySelector(".reset-btn");
const typingInput = document.querySelector(".typing-input");

let incorrectLetters = [];
let correctLetters = [];
let word;

const randomWord = () => {
  // get a randomWord from words
  let randomWordObj = wordList[Math.floor(Math.random() * wordList.length)];
  word = randomWordObj.word;
  correctLetters = [];
  incorrectLetters = [];
  // display word hint
  hint.innerText = randomWordObj.hint;
  wrongLetter.innerText = incorrectLetters;
  let html = "";
  // create an input for each letter in the word
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled/>`;
    // display the inputs
    inputs.innerHTML = html;
  }

  console.log(word.length);
  console.log(randomWordObj, word);
};

randomWord();

function initGame(e) {
  let key = e.target.value.toLowerCase();
  if (
    key.match(/^[A-Za-z]+$/) &&
    !incorrectLetters.includes(` ${key}`) &&
    !correctLetters.includes(key)
  ) {
    if (word.includes(key)) {
      // iterate over each letter of word and check if in right index position
      for (let i = 0; i < word.length; i++) {
        if (word[i] === key) {
          // if in correct spot add to correctLetters
          correctLetters += key;
          // display the letter in the positioned input
          inputs.querySelectorAll("input")[i].value = word[i];
        }
      }
    } else {
      // if letter not found in word then add to incorrectLetters list
      incorrectLetters.push(` ${key}`);
    }
  }
  typingInput.value = "";
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());
