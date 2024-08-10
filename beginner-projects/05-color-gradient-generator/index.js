const gradientBox = document.querySelector('.gradient-box');
const selectMenu = document.querySelector('.select-box select');
const colorInput = document.querySelectorAll('.colors input');
const textarea = document.querySelector('textarea');
const refreshBtn = document.querySelector('.refresh');
const copyBtn = document.querySelector('.copy');
// add direction buttons instead of a drop down
const directionBtns = document.querySelectorAll('.direction button');

const getRandomColor = () => {
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
};

const generateGradient = (isRandom) => {
  if (isRandom) {
    colorInput[0].value = getRandomColor();
    colorInput[1].value = getRandomColor();
  }

  const gradient = `linear-gradient(${selectMenu.value}, ${colorInput[0].value}, ${colorInput[1].value})`;
  gradientBox.style.background = gradient;

  textarea.value = `background: ${gradient}`;
};

const copyCode = () => {
  navigator.clipboard.writeText(textarea.value);
  copyBtn.innerText = 'Code Copied';
  setTimeout(() => ((copyBtn.innerText = 'Copy'), 1600));
};

colorInput.forEach((input) => {
  input.addEventListener('input', () => generateGradient(false));
});

selectMenu.addEventListener('change', () => generateGradient(false));

// refresh button will generat a random color gradient
refreshBtn.addEventListener('click', () => generateGradient(true));

copyBtn.addEventListener('click', copyCode);
