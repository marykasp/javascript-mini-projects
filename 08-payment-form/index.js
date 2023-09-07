const cardNumberInput = document.querySelector('#card-number');
const cardNumber = document.querySelector('.card-number-box');
const cardHolderInput = document.querySelector('#card-holder-input');
const cardHolder = document.querySelector('.card-holder-name');
const cardExpInput = document.querySelector('#expiry-date-input');
const cardExpMonth = document.querySelector('.exp-month');
const cardExpYear = document.querySelector('.exp-year');

const cardCvvInput = document.querySelector('#cvv-input');
const cardCvv = document.querySelector('.cvv-box');

const cardFront = document.querySelector('.front');
const cardBack = document.querySelector('.back');

const extractDate = (date) => {
  console.log(date);
  const month = date.split('-')[1];
  const year = date.split('-')[0];
  return [month, year];
};

// Event listeners
cardNumberInput.addEventListener('input', () => {
  let cardNumberValue = cardNumberInput.value;
  cardNumber.innerText = cardNumberValue;
});

cardHolderInput.addEventListener('input', () => {
  console.log(cardHolderInput.value);
  cardHolder.innerText = cardHolderInput.value;
});

cardExpInput.addEventListener('input', () => {
  // console.log(cardExpInput.value);
  const [month, year] = extractDate(cardExpInput.value);
  cardExpMonth.innerText = month;
  cardExpYear.innerText = year;
});

cardCvvInput.addEventListener('mouseenter', () => {
  cardFront.style.transform = 'perspective(1000px) rotateY(180deg)';
  cardBack.style.transform = 'perspective(1000px) rotateY(0deg)';
});

cardCvvInput.addEventListener('mouseleave', () => {
  cardFront.style.transform = 'perspective(1000px) rotateY(0deg)';
  cardBack.style.transform = 'perspective(1000px) rotateY(180deg)';
});

cardCvvInput.addEventListener('input', () => {
  cardCvv.innerText = cardCvvInput.value;
});
