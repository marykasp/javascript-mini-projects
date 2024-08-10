let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const fromDropdown = document.querySelector('#from-currency-select');
const toDropdown = document.querySelector('#to-currency-select');
const result = document.querySelector('#result');
const toCurrencyName = document.querySelector('.to-currency');
const fromCurrencyName = document.querySelector('.from-currency');

// add currency codes to select dropdowns
currency_list.forEach((currency) => {
  const option = document.createElement('option');
  option.value = currency.code;
  option.text = currency.code;

  fromDropdown.add(option);
});

currency_list.forEach((currency) => {
  const option = document.createElement('option');
  option.value = currency.code;
  option.text = currency.code;

  toDropdown.add(option);
});

const findCurrencyName = (currency) => {
  return currency_list.find((c) => c.code === currency).name;
};

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
        console.log(data);
        let fromExchangeRate = data.conversion_rates[fromCurrency];
        let toExhangeRate = data.conversion_rates[toCurrency];

        const convertedAmount = (amount / fromExchangeRate) * toExhangeRate;
        result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
          2,
        )} ${toCurrency}`;
      });
  } else {
    alert('Please fill in the amount');
  }
};

fromDropdown.addEventListener('input', () => {
  // console.log(findCurrencyName(fromDropdown.value));
  fromCurrencyName.textContent = `${findCurrencyName(fromDropdown.value)}`;
});

toDropdown.addEventListener('input', () => {
  // console.log(findCurrencyName(toDropdown.value));
  toCurrencyName.textContent = `${findCurrencyName(toDropdown.value)}`;
});

const button = document.querySelector('#convert-btn');
button.addEventListener('click', convertCurrency);

window.addEventListener('load', () => {
  // setting default values
  fromDropdown.value = 'USD';
  fromCurrencyName.textContent = `${findCurrencyName('USD')}`;

  toDropdown.value = 'INR';
  toCurrencyName.textContent = `${findCurrencyName('INR')}`;
  convertCurrency();
});
