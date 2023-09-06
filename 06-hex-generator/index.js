const outputColor = document.querySelector('.output-color span');
const output = document.querySelector('#output');
const genBtn = document.querySelector('#gen-btn');
const copyBtn = document.querySelector('#copy-btn');
const customAlert = document.querySelector('.custom-alert');

let hexString = '0123456789abcdef';

const genHexCode = () => {
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);

  output.value = `#${randomHex}`;
  outputColor.classList.remove('show-color');
  setTimeout(() => {
    outputColor.classList.add('show-color');
  }, 10);

  outputColor.style.backgroundColor = `#${randomHex}`;
  console.log(`#${randomHex}`);
};

window.onload = genHexCode();

genBtn.addEventListener('click', () => genHexCode());
copyBtn.addEventListener('click', () => {
  output.select();
  document.execCommand('copy');
  customAlert.style.transform = 'translateX(0)';
  setTimeout(() => {
    customAlert.style.transform = 'translateX(calc(100% + 10px)';
  }, 2000);
});
