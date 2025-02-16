const wordText = document.querySelector(".word");

const initGame = () => {
  // get random word object from words list
  let randomObj = words[Math.floor(Math.random() * words.length)];
  // split each letter of random word
  let wordArray = randomObj.word.split("");

  // iterate over each letter in wordArray to shuffle the letters around
  for (let i = wordArray.length - 1; i > 0; i--) {
    // getting random number within list length
    let j = Math.floor(Math.random() * (i + 1));

    // shuffling and swapping letters - swap the elements at indices i and j with array destructuring
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }

  wordText.innerText = wordArray.join("");
  console.log(wordArray, randomObj.word);
  console.log(randomObj);
};

initGame();
