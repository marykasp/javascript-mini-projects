const generateCardBtn = document.getElementById("generateCard");
const downloadCardBtn = document.getElementById("downloadCard");

generateCardBtn.addEventListener("click", () => {
  // get value of both inputs
  let name = document.getElementById("name").value.trim();
  let theme = document.getElementById("theme").value;
  console.log(name, theme);

  // if name is an empty string, show alert(update to show a toast notification or warning under input)
  if (name === "") {
    alert("Please enter A Name");
    return;
  }

  let cardTitle = document.getElementById("cardTitle");
  let cardMessage = document.getElementById("cardMessage");
  let card = document.getElementById("card");

  let themeMessages = {
    birthday: `🥮 Happy Birthday, ${name}! Wishing you a fantastic day!`,
    congratulations: `Congratulations, ${name}!🏆 Keep shinning and achieving great things!`,
    love: `💛 Dear ${name}, you are truly special! Sending love your way 💘`,
    friendship: `Hey ${name}! You are an amazing friend! Stay awesome`,
  };

  // create title with uppercase first letter from theme option input
  cardTitle.innerText = `${
    theme.charAt(0).toUpperCase() + theme.slice(1)
  } Greeting`;

  cardMessage.innerText = themeMessages[theme];

  card.style.display = "block";
});

// download Card as an Image
downloadCardBtn.addEventListener("click", () => {
  html2canvas(document.getElementById("card")).then((canvas) => {
    let link = (document = document.createElement("a"));
    link.href = canvas.toDataURL("image/png");
    link.download = "greeting_card.png";
    link.click();
  });
});
