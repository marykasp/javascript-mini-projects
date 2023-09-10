let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const fromDropdown = document.querySelector('#from-currency-select');
const toDropdown = document.querySelector('#to-currency-select');
const result = document.querySelector('#result');

// add currency codes to select dropdowns
currencies.forEach((currency) => {
  const option = document.createElement('option');
  option.value = currency;
  option.text = currency;

  fromDropdown.add(option);
});

currencies.forEach((currency) => {
  const option = document.createElement('option');
  option.value = currency;
  option.text = currency;

  toDropdown.add(option);
});

// setting default values
fromDropdown.value = 'USD';
toDropdown.value = 'INR';

let convertCurrency = () => {
  // create References
  const amount = document.querySelector('#amount').value;
  const fromCurrency = fromDropdown.value;
  const toCurrency = toDropdown.value;

  // if input field is not empty
  if (amount.length != 0) {
    // fetch call to API
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        let fromExchangeRate = data.conversion_rates[fromCurrency];
        let toExhangeRate = data.conversion_rates[toCurrency];

        const convertedAmount = (amount / fromExchangeRate) * toExhangeRate;
        console.log(convertedAmount);
        result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
          2,
        )} ${toCurrency}`;
      });
  } else {
    alert('Please fill in the amount');
  }
};

const button = document.querySelector('#convert-btn');
button.addEventListener('click', convertCurrency);

window.addEventListener('load', convertCurrency);
