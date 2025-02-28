const openBtn = document.getElementById("openCookie");
const fortuneMessage = document.getElementById("fortuneMessage");
const URL = `https://aphorismcookie.herokuapp.com`;

openBtn.addEventListener("click", () => {
  console.log("button clicked");
  // make API call to fortune cookie
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      // add random fortune to display message
      fortuneMessage.innerText = data.data.message;
    });
});
