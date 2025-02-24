const name = document.querySelector("#name");
const place = document.querySelector("#place");
const object = document.querySelector("#object");
const action = document.querySelector("#action");
const generateBtn = document.getElementById("generateStory");
const story = document.getElementById("story");

let storyName;
let storyPlace;
let storyObject;
let storyAction;

generateBtn.addEventListener("click", () => {
  storyName = name.value.trim();
  // console.log(storyName);
  storyPlace = place.value.trim();
  storyObject = object.value.trim();
  storyAction = action.value.trim();

  if (
    storyName === "" ||
    storyPlace === "" ||
    storyObject === "" ||
    storyPlace === ""
  ) {
    alert("Please fill in all fields!");
    // add a warning tag below inputs(span)
    return;
  }

  let stories = [
    `One day, ${storyName} went to ${storyPlace} and found a mysteriouis ${storyObject}. Without thinking, ${storyName} decided to ${storyAction}, and something magical happened!`,
    `In the heart of ${storyPlace}, ${storyName} discovered a hidden ${storyObject}. As curiosity took over, ${storyName} started to ${storyAction}, and the adventure began!`,
    `${storyName} was walking through ${storyPlace} when suddenly a ${storyObject} appeared. Without hesitation, ${storyName} chose to ${storyAction}, leading to an unforgettable experience!`,
    `While exploring ${storyPlace}, ${storyName} saw a sparkling ${storyObject}. As soon as they touched it, they were transported to a new world where they had to ${storyAction} to find a way back home!`,
    `One night at ${storyPlace}, ${storyName} found an ancient ${storyObject}. The moment they tried to ${storyAction}, the object began to glow, revealing a hidden secret!`,
    `At ${storyPlace}, ${storyName} was given a strange ${storyObject} by an old wise person. They were told that if they ${storyAction} at the right moment, something incredible would happen!`,
    `${storyName} was cleaning their attic when they stumbled upon an old ${storyObject}. Curious, they decided to ${storyAction}, and suddenly, they were taken on a journey through time!`,
  ];

  let randomStory = stories[Math.floor(Math.random() * stories.length)];
  console.log(randomStory);

  story.innerText = randomStory;
  story.style.display = "block";
});
