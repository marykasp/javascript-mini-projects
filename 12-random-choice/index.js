// Function to pick a random choice from list of choices
let pickRandomChoice = () => {
  const choicesInput = document.querySelector("#choices");
  const resultElement = document.querySelector("#result");
  const resultSpan = document.querySelector("#result span");
  console.log(resultSpan);

  // get the choices as an array - string to array
  const choices = choicesInput.value.split(",").map((choice) => choice.trim());
  // console.log(choices);

  // check if there are choices to pick from by checking the length of the array
  if (choices.length === 0 || (choices.length === 1 && choices[0] === "")) {
    resultElement.textContent = "Please Enter Choices";
  }

  // Generate a random index to choose item from array
  const randomIndex = Math.floor(Math.random() * choices.length);

  // display change result to result paragraph
  resultElement.innerHTML = `Random choice: <span>${choices[randomIndex]}</span>`;
};

const pickButton = document.getElementById("pickButton");

// Add an event listener
pickButton.addEventListener("click", pickRandomChoice);
