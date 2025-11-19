const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const emailErrorMessage = document.querySelectorAll(".login__error-message")[0];
const passwordErrorMessage = document.querySelectorAll(
  ".login__error-message"
)[1];
const loginButton = document.querySelector(".login__button");

emailInput.addEventListener("focusout", () => {
  if (emailInput.value.trim() === "") {
    emailInput.style.border = "1px solid red";
    emailErrorMessage.style.display = "block";
    emailErrorMessage.textContent = "이메일을 입력해주세요";
  } else if (!emailInput.value.includes("@")) {
    emailInput.style.border = "1px solid red";
    emailErrorMessage.style.display = "block";
    emailErrorMessage.textContent = "잘못된 이메일 형식입니다";
  } else {
    emailInput.style.border = "none";
    emailErrorMessage.style.display = "none";
    emailErrorMessage.textContent = "";
  }
  validateInputs();
});

passwordInput.addEventListener("focusout", () => {
  if (passwordInput.value.trim() === "") {
    passwordInput.style.border = "1px solid red";
    passwordErrorMessage.style.display = "block";
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요";
  } else if (passwordInput.value.length < 8) {
    passwordInput.style.border = "1px solid red";
    passwordErrorMessage.style.display = "block";
    passwordErrorMessage.textContent = "비밀번호를 8자 이상 입력해주세요";
  } else {
    passwordInput.style.border = "none";
    passwordErrorMessage.style.display = "none";
    passwordErrorMessage.textContent = "";
  }
  validateInputs();
});

function validateInputs() {
  if (
    emailInput.value.trim() === "" ||
    !emailInput.value.includes("@") ||
    passwordInput.value.trim() === "" ||
    passwordInput.value.length < 8
  ) {
    loginButton.disabled = true;
  } else {
    loginButton.disabled = false;
    loginButton.style.backgroundColor = "#3691ff";
  }
}
validateInputs();

loginButton.addEventListener("click", () => {
  location.href = "./items.html";
});
