//Function to disable the reset button when amount is typed
const bill = document.getElementById('bill');
const resetButton = document.getElementById("reset");

bill.value = "";
console.log(bill.value)

if(bill.value == "") {
  console.log(true)
}

if(bill.value == "") {
  resetButton.setAttribute("disabled", true);
} 

bill.addEventListener('input', function handleChange(event) {
  bill.value == event.target.value;
  if (bill.value !== "") {
    resetButton.removeAttribute('disabled')
  }
  else if (bill.value == "") {
    resetButton.setAttribute('disabled', true)
  }
  bill.value == event.target.value;
  console.log(bill.value);
});

//Function to compute the percentages for tips
var totalPerPerson = 0.00;
var tipPerPerson = 0.00;

document.getElementById('totalPerPerson').innerHTML = totalPerPerson.toFixed(2);
document.getElementById('tipPerPerson').innerHTML = tipPerPerson.toFixed(2);
var fivePercentButton = document.getElementById("five-percent-button");
var tenPercentButton = document.getElementById("ten-percent-button");
var fifteenPercentButton = document.getElementById("fifteen-percent-button");
var twentyFivePercentButton = document.getElementById("twenty-five-percent-button");
var fiftyPercentButton = document.getElementById("fifty-percent-button");

function fivePercent() {
  var fivePercentValue = bill.value * 5 / 100;
  tipPerPersonUpdated = fivePercentValue / numberOfPerson.value;
  fivePercentButton.setAttribute("id", "active");
  tenPercentButton.removeAttribute("id");
  fifteenPercentButton.removeAttribute("id");
  twentyFivePercentButton.removeAttribute("id");
  fiftyPercentButton.removeAttribute("id");
  if(tipPerPersonUpdated !== Number.POSITIVE_INFINITY) {
    document.getElementById('tipPerPerson').innerHTML = tipPerPersonUpdated.toFixed(2);  
  } else if(tipPerPersonUpdated == Number.POSITIVE_INFINITY) {
    numberOfPerson.style.outline="red";
  }
}

function tenPercent() {
  var tenPercentValue = bill.value * 10 / 100;
  tipPerPersonUpdated = tenPercentValue / numberOfPerson.value;
  tenPercentButton.setAttribute("id", "active");
  fivePercentButton.removeAttribute("id");
  fifteenPercentButton.removeAttribute("id");
  twentyFivePercentButton.removeAttribute("id");
  fiftyPercentButton.removeAttribute("id");
  if(tipPerPersonUpdated !== Number.POSITIVE_INFINITY) {
    document.getElementById('tipPerPerson').innerHTML = tipPerPersonUpdated.toFixed(2);
  }
}

function fifteenPercent() {
  var fifteenPercentValue = bill.value * 15 / 100;
  tipPerPersonUpdated = fifteenPercentValue / numberOfPerson.value
  fifteenPercentButton.setAttribute("id", "active");
  fivePercentButton.removeAttribute("id");
  tenPercentButton.removeAttribute("id");
  twentyFivePercentButton.removeAttribute("id");
  fiftyPercentButton.removeAttribute("id");
  if(tipPerPersonUpdated !== Number.POSITIVE_INFINITY) {
    document.getElementById('tipPerPerson').innerHTML = tipPerPersonUpdated.toFixed(2);
  }
}

function twentyFivePercent() {
  var twentyFivePercentValue = bill.value * 25 / 100;
  tipPerPersonUpdated = twentyFivePercentValue / numberOfPerson.value
  twentyFivePercentButton.setAttribute("id", "active");
  fivePercentButton.removeAttribute("id");
  tenPercentButton.removeAttribute("id");
  fifteenPercentButton.removeAttribute("id");
  fiftyPercentButton.removeAttribute("id");
  if(tipPerPersonUpdated !== Number.POSITIVE_INFINITY) {
    document.getElementById('tipPerPerson').innerHTML = tipPerPersonUpdated.toFixed(2);
  }
}

function fiftyPercent() {
  var fiftyPercentValue = bill.value * 50 / 100;
  tipPerPersonUpdated = fiftyPercentValue / numberOfPerson.value
  fiftyPercentButton.setAttribute("id", "active");
  fivePercentButton.removeAttribute("id");
  tenPercentButton.removeAttribute("id");
  fifteenPercentButton.removeAttribute("id");
  twentyFivePercentButton.removeAttribute("id");
  if(tipPerPersonUpdated !== Number.POSITIVE_INFINITY) {
    document.getElementById('tipPerPerson').innerHTML = tipPerPersonUpdated.toFixed(2);
  }
}

const customTip = document.getElementById('custom-tip');

customTip.addEventListener('input', function handleChangeTip(event) {
  customTip.value == event.target.value;
  var customPercentValue = bill.value * customTip.value / 100;
  fivePercentButton.removeAttribute("id");
  tenPercentButton.removeAttribute("id");
  fifteenPercentButton.removeAttribute("id");
  twentyFivePercentButton.removeAttribute("id");
  fiftyPercentButton.removeAttribute("id");
  if (customTip.value < 101 && customTip.value > 0){
    tipPerPersonUpdated = customPercentValue / numberOfPerson.value
    document.getElementById('tipPerPerson').innerHTML = tipPerPersonUpdated.toFixed(2);
    console.log('in range')
  }
  if(tipPerPersonUpdated == Number.POSITIVE_INFINITY) {
    console.log('Enter the number of clients');
    document.getElementById('tipPerPerson').innerHTML = tipPerPerson;
    numberOfPerson.style.outline="red";
  }
});

//Function to handle change in number of person
const numberOfPerson = document.getElementById("number-of-people");
numberOfPerson.addEventListener('input', function handleChangePersons(event) {
  numberOfPerson.value == event.target.value;
  var totalPerPersonUpdated = bill.value / numberOfPerson.value;
  if(!numberOfPerson.checkValidity()) {
    document.getElementById("err-msg").innerHTML = "Can't be 0";
    numberOfPerson.classList.replace("text-area", "text-area-error");
  } else {
    document.getElementById("err-msg").innerHTML = ""
    numberOfPerson.classList.replace("text-area-error", "text-area");
  }
  if(totalPerPersonUpdated !== Number.POSITIVE_INFINITY) {
    document.getElementById('totalPerPerson').innerHTML = totalPerPersonUpdated.toFixed(2);
  }
  fivePercentButton.removeAttribute("id");
  tenPercentButton.removeAttribute("id");
  fifteenPercentButton.removeAttribute("id");
  twentyFivePercentButton.removeAttribute("id");
  fiftyPercentButton.removeAttribute("id");
  document.getElementById('tipPerPerson').innerHTML = tipPerPerson.toFixed(2);
});

function reset() {
  document.getElementById('totalPerPerson').innerHTML = totalPerPerson.toFixed(2);
  document.getElementById('tipPerPerson').innerHTML = tipPerPerson.toFixed(2);
  numberOfPerson.value = "";
  bill.value = "";
  fivePercentButton.removeAttribute("id");
  tenPercentButton.removeAttribute("id");
  fifteenPercentButton.removeAttribute("id");
  twentyFivePercentButton.removeAttribute("id");
  fiftyPercentButton.removeAttribute("id");
}