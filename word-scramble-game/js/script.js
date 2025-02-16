const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const timeText = document.querySelector(".time b");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");
const inputField = document.querySelector("input");
const warning = document.querySelector(".warning");

let correctWord, timer;

const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timeText.innerText = maxTime);
    }

    alert(`Time up! ${correctWord.toUpperCase()} is the correct word.`);
    endGame();
  }, 1000);
};

const endGame = () => {
  clearInterval(timer);
};

const initGame = () => {
  // calling timer function with passing 30s as maxTime value
  initTimer(30);
  //clear input field
  inputField.value = "";

  // remove any text from the warning p element
  warning.textContent = "";

  // get random word object from words list
  let randomObj = words[Math.floor(Math.random() * words.length)];
  // split each letter of random word
  let wordArray = randomObj.word.split("");
  // save correct word to variable
  correctWord = randomObj.word.toLocaleLowerCase();

  // iterate over each letter in wordArray to shuffle the letters around
  for (let i = wordArray.length - 1; i > 0; i--) {
    // getting random number within list length
    let j = Math.floor(Math.random() * (i + 1));

    // shuffling and swapping letters - swap the elements at indices i and j with array destructuring
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }

  wordText.innerText = wordArray.join(""); // passing shuffled word as text to p element
  hintText.innerText = randomObj.hint; // passing word hint as text to element

  inputField.setAttribute("maxlength", correctWord.length);

  console.log(correctWord);
  console.log(wordArray, randomObj.word);
  console.log(randomObj);
};

initGame();

const clearText = () => {
  // clear input field
  inputField.value = "";
};

const checkWord = () => {
  let userWord = inputField.value.toLocaleLowerCase();
  console.log(userWord);

  //if no word entered into input create a warning element to display under input
  if (!userWord) {
    warning.textContent = "Please enter a word";
    console.dir(warning);
    inputField.insertAdjacentElement("afterend", warning);
    return;
  }
  // check if user word is the same as the correct word
  if (userWord !== correctWord) {
    warning.textContent = "";
    return alert(`Oops! ${userWord} is incorrect`);
  }

  alert(`Congrats ${userWord.toUpperCase()} is correct!`);
  initGame();
};

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
