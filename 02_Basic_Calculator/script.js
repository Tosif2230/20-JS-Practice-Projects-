const btnEl = document.querySelectorAll("button");

const display = document.getElementById("inp");

for (let i = 0; i < btnEl.length; i++) {
  btnEl[i].addEventListener("click", () => {
    const btnVal = btnEl[i].textContent;
    if (btnVal === "AC") {
      clearResult();
    } else if (btnVal === "=") {
      calculateResult();
    } else if (btnVal === "C") {
      deleteVal();
    } else if (btnVal === "%") {
      percentage();
    } else {
      appendValue(btnVal);
    }
  });
}

function clearResult() {
  display.value = "";
}

function calculateResult() {
  try {
    if(display.value === ""){
      return
    }else{
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = "Error";
  }
}

function deleteVal() {
  display.value = display.value.slice(0, -1);
}

function percentage() {
  display.value = Number(display.value) / 100;
}

function appendValue(btnVal) {
  display.value += btnVal;
}
