// const cardholder = document.getElementById("card_holder");
// cardholder.addEventListener("input", (e) =>{
// let currentCardholder = e.target.value;

// if(currentCardholder === ""){
//     currentCardholder = "e.g. Jane Appleseed";
// }
// const previewCardholder = document.getElementById("prev_cardholder");
// previewCardholder.innerText = currentCardholder;
// });

//===========================================================//

// const cardnumber = document.getElementById("card_number");
// cardnumber.addEventListener("input", (e) =>{

// let currentCardNumber = e.target.value;

// if(currentCardNumber === ""){
//     currentCardNumber = "e.g. 1234 5678 9123 0000";
// }
// const previewCardNumber = document.getElementById("prev_cardnumber");
// previewCardNumber.innerText = currentCardNumber;
// });

//=======================//

//kürzere Variante:

//------------Name----------------------------//
const cardholder = document.getElementById("card_holder");
cardholder.addEventListener("input", (e) => {
  previewCardField(e.target.value, "e.g. Jane Appleseed", "prev_cardholder");
});

//------------Nummer----------------------------//
const cardnumber = document.getElementById("card_number");
cardnumber.addEventListener("input", (e) => {
  previewCardField(e.target.value, "0000 0000 0000 0000", "prev_cardnumber");
});

//------------Monat----------------------------//
const dateMonth = document.getElementById("month");
dateMonth.addEventListener("input", (e) => {
  previewCardField(e.target.value, "00", "prev_datemonth");
});

//------------jahr----------------------------//
const dateYear = document.getElementById("year");
dateYear.addEventListener("input", (e) => {
  previewCardField(e.target.value, "00", "prev_dateyear");
});

//------------CVC----------------------------//
const cardCvc = document.getElementById("card_cvc");
cardCvc.addEventListener("input", (e) => {
  previewCardField(e.target.value, "000", "prev_cardcvc");
});

function previewCardField(inputValue, defaultValue, previewSelector) {
  let currentValue = inputValue;

  if (currentValue === "") {
    currentValue = defaultValue;
  }
  const previewElement = document.getElementById(previewSelector);
  previewElement.innerText = currentValue;
}

//---------------------------------

const buttons = document.querySelector(".theme-switch");

buttons.forEach((button) => {
  button.addEventListener("click", setTheme);
});

function setTheme($event) {
  document.body.dataset.theme = $event.target.dataset.theme;
}
