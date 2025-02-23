const riddleRef = document.getElementById("riddle");
const answerRef = document.querySelector("#answer");
const showBtn = document.getElementById("show-answer");
const nextBtn = document.getElementById("next");
const URL = "https://riddles-api.vercel.app/random"; // API for random riddles
// Function to update the riddle
const updateRiddle = (riddle, answer) => {
  riddleRef.innerText = riddle;
  answerRef.innerText = answer;
};
// Function to fetch a riddle from the API
const getRiddle = () => {
  answerRef.classList.add("hide"); // Hide the answer initially
  fetch(URL)
    .then((data) => data.json())
    .then((item) => {
      updateRiddle(item.riddle, item.answer);
    });
};
// Show answer when button is clicked
showBtn.addEventListener("click", () => {
  answerRef.classList.remove("hide");
});
// Fetch next riddle when "Next" button is clicked
nextBtn.addEventListener("click", getRiddle);
// Load an initial riddle when the page is loaded
window.onload = getRiddle();
