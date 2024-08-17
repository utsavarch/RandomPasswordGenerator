const generateSecurePassword = (length = 15, sc = 3, nn = 5) => {
  let password = [];
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let alphabetsCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let specialCharacters = "!@#$%^&*()_+{}|:><?~";
  let numbers = "0123456789";

  if (sc + nn > length) {
    throw new Error(
      "Length is too short to accommodate special characters and numbers."
    );
  }
  for (let i = 0; i < nn; i++) {
    password.push(
      alphabetsCap[Math.floor(Math.random() * alphabetsCap.length)]
    );
  }
  for (let i = 0; i < sc; i++) {
    password.push(
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    );
  }

  for (let i = 0; i < nn; i++) {
    password.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }

  while (password.length < length) {
    password.push(alphabets[Math.floor(Math.random() * alphabets.length)]);
  }

  password = password.sort(() => Math.random() - 0.5);

  return password.join("");
};

const handleGenerateButtonClick = () => {
  const passwordField = document.getElementById("password");
  const copyButton = document.getElementById("copy-btn");

  const newPassword = generateSecurePassword(15, 3, 5);
  passwordField.value = newPassword;

  copyButton.classList.remove("copied");
  copyButton.textContent = "Copy";
};

const handleCopyButtonClick = () => {
  const passwordField = document.getElementById("password");
  const copyButton = document.getElementById("copy-btn");

  passwordField.select();
  document.execCommand("copy");

  copyButton.classList.add("copied");
  copyButton.textContent = "";
};

document
  .getElementById("generate-btn")
  .addEventListener("click", handleGenerateButtonClick);

document
  .getElementById("copy-btn")
  .addEventListener("click", handleCopyButtonClick);
