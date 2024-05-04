let calcValue = "";

const display = document.querySelector("#display");

function clearCalc() {
  calcValue = "";
  display.value = calcValue;
}

function calculator() {
  try {
    let result = eval(calcValue);
    display.value = result;
  } catch (error) {
    display.value = "Error";
    calcValue = "";
  }
}

const appendToDisplay = (event) => {
  const targetValue = event.target.innerHTML;
  if (targetValue === "=") {
    return calculator();
  } else if (targetValue === "C") {
    return clearCalc();
  }
  calcValue += targetValue;
  console.log(targetValue);
  display.value = calcValue;
};

const buttons = document.querySelector("#buttons");
const allButtons = document.querySelectorAll("#buttons button");
buttons.addEventListener("click", appendToDisplay);
buttons.style.display = "flex";
buttons.style.flexWrap = "wrap";
buttons.style.maxWidth = "120px";
buttons.style.gap = "8px";
buttons.style.marginTop = "20px";
buttons.style.paddingLeft = "24px";
allButtons.forEach((item) => (item.style.width = "24px"));
