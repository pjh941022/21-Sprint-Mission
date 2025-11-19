const emailInput = document.querySelector("#email");
const nicknameInput = document.querySelector("#nickname");
const passwordInput = document.querySelector("#password");
const passwordInput2 = document.querySelector("#password2");
const emailErrorMessage = document.querySelectorAll(".login__error-message")[0];
const nicknameErrorMessage = document.querySelectorAll(
  ".login__error-message"
)[1];
const passwordErrorMessage = document.querySelectorAll(
  ".login__error-message"
)[2];
const passwordErrorMessage2 = document.querySelectorAll(
  ".login__error-message"
)[3];
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

nicknameInput.addEventListener("focusout", () => {
  if (nicknameInput.value.trim() === "") {
    nicknameInput.style.border = "1px solid red";
    nicknameErrorMessage.style.display = "block";
    nicknameErrorMessage.textContent = "닉네임을 입력해주세요";
  } else {
    nicknameInput.style.border = "none";
    nicknameErrorMessage.style.display = "none";
    nicknameErrorMessage.textContent = "";
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

passwordInput2.addEventListener("focusout", () => {
  if (passwordInput2.value.trim() !== passwordInput.value.trim()) {
    passwordInput2.style.border = "1px solid red";
    passwordErrorMessage2.style.display = "block";
    passwordErrorMessage2.textContent = "비밀번호가 일치하지 않습니다";
  } else {
    passwordInput2.style.border = "none";
    passwordErrorMessage2.style.display = "none";
    passwordErrorMessage2.textContent = "";
  }
  validateInputs();
});

function validateInputs() {
  if (
    emailInput.value.trim() === "" ||
    !emailInput.value.includes("@") ||
    passwordInput.value.trim() === "" ||
    passwordInput.value.length < 8 ||
    nicknameInput.value.trim() === "" ||
    passwordInput2.value.trim() !== passwordInput.value.trim()
  ) {
    loginButton.disabled = true;
  } else {
    loginButton.disabled = false;
    loginButton.style.backgroundColor = "#3691ff";
  }
}
validateInputs();

loginButton.addEventListener("click", () => {
  location.href = "./login.html";
});
