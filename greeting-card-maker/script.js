const generateCardBtn = document.getElementById("generateCard");

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
});
