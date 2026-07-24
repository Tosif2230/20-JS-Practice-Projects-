const btnEl = document.getElementById("btn");

const resultValue = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function btnClicked() {
  const heightValue = document.getElementById("height").value / 100;
  const weightVlaue = document.getElementById("weight").value;

  const bmiValue = weightVlaue / (heightValue * heightValue);

  resultValue.value = bmiValue.toFixed(2);

  if (bmiValue < 18.5) {
    weightConditionEl.innerHTML = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerHTML = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerHTML = "Over weight";
  } else if (bmiValue >= 30) {
    weightConditionEl.innerHTML = "Obesity";
  }
}

btnEl.addEventListener("click", btnClicked);
