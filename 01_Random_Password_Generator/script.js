const btnEl = document.querySelector(".generate-btn");

const inputEl = document.getElementById("input");
const copyEl = document.querySelector(".fa-clone");

const toastEl = document.querySelector(".toast");

btnEl.addEventListener("click", () => {
  handleGenerate();
});

copyEl.addEventListener("click", () => {
  copyPassword();
  // Only Show when Input field have value
  if (inputEl.value) {
    toastEl.classList.remove("active");
    //Smooth transition after 2sec
    setTimeout(() => {
      toastEl.classList.add("active");
    }, 2000);
  }
});

//Password Generate function+
function handleGenerate() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  const passwordLen = 14;
  let password = "";
  for (let i = 0; i < passwordLen; i++) {
    const randomeNumber = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomeNumber);
  }
  inputEl.value = password;
  toastEl.innerHTML = password + " copied!";
}

//Clipboard Copy Functionality
function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999); //For mobile and tablet use
  navigator.clipboard.writeText(inputEl.value);
}
