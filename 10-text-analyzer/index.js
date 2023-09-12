document.addEventListener('DOMContentLoaded', function () {
  const analzyeBtn = document.getElementById('analyzeButton');
  analzyeBtn.addEventListener('click', analyzeText);
});

function analyzeText() {
  const text = document.getElementById('textInput').value;
  // calculate word count
  const wordCount = text.trim().split(/\s+/).length;
  const charCount = text.length; // number of characters in a string

  let totalWordLength = 0;
  text
    .trim()
    .split(/\s+/)
    .forEach((word) => (totalWordLength += word.length));

  const averageWordLength = totalWordLength / wordCount;
  displayResults(wordCount, charCount, averageWordLength);
}

function displayResults(word, char, average) {
  const wordCountSpan = document.getElementById('wordCount');
  const charCountSpan = document.getElementById('charCount');
  const avgWordLengthSpan = document.getElementById('avgWordLength');

  wordCountSpan.textContent = word;
  charCountSpan.textContent = char;
  avgWordLengthSpan.textContent = average.toFixed(2);
}
