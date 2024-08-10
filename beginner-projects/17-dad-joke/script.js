const jokeContainer = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const url = "https://icanhazdadjoke.com/";

let getJoke = async () => {
  // before fetching remove fade class
  jokeContainer.classList.remove("fade");
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json();

  // add joke to joke container
  jokeContainer.textContent = `${data.joke}`;
  jokeContainer.classList.add("fade");
};

btn.addEventListener("click", getJoke);
