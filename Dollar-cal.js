// getting elements
const selectUsd = document.getElementById("selectUsd");
const h3Tag = document.getElementById("h3Tag");

const nairaInput = document.getElementById("naira");
const dollarInput = document.getElementById("dollar");

// hard coding the rates
let marketRate = 588; // holding the first option being CBN market rate.
dollarInput.value = 1;
nairaInput.value = 588;
const initNairaRate = (Number(marketRate) * Number(dollarInput.value)).toFixed(
  2
);
const initDollarRate = (Number(nairaInput.value) / Number(marketRate)).toFixed(
  2
);
dollarInput.value = initDollarRate;
nairaInput.value = initNairaRate;

// Add an event listener to the select element
selectUsd.addEventListener("change", function () {
  const optionText = selectUsd.options[selectUsd.selectedIndex].innerText;
  const optionValue = selectUsd.options[selectUsd.selectedIndex].value;

  // update the market rate to the selected market rate
  marketRate = optionValue;

  // Update the h3 element's text content with the selected option's text
  h3Tag.textContent = `1 USD($)= #${optionValue} (@ ${optionText})`;
  dollarInput.value = 1;
  nairaInput.value = marketRate;
});

nairaInput.addEventListener("input", () => {
  if (nairaInput.value < 0 || nairaInput.value === "") {
    nairaInput.value = 0;
  }
  const dollarRate = (Number(nairaInput.value) / Number(marketRate)).toFixed(2);
  dollarInput.value = dollarRate;
});

dollarInput.addEventListener("input", () => {
  if (dollarInput.value < 0 || dollarInput.value === "") {
    dollarInput.value = 0;
  }

  const nairaRate = (Number(marketRate) * Number(dollarInput.value)).toFixed(2);
  nairaInput.value = nairaRate;
});




