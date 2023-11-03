const passwordInput = document.getElementById("password");
const generatePasswordButton = document.getElementById(
  "generatePasswordButton"
);
const copyButton = document.getElementById("copyB");

const characterSet =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

generatePasswordButton.addEventListener("click", () => {
  const passwordLength = 16; // This can be changed to any desired length

  const generatedPassword = [];
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    generatedPassword.push(characterSet[randomIndex]);
  }

  passwordInput.value = generatedPassword.join("");
});

function copyPassword() {
  passwordInput.select();
  document.execCommand("copy");
  copyButton.style.color = "#888";

  const timeout = setTimeout(() => {
    copyButton.style.backgroundColor = "none";
    copyButton.style.color = "black";
  }, 100);

  // Clear the timeout function if the copy button is clicked again before the timeout expires.
  copyButton.addEventListener("click", () => {
    clearTimeout(timeout);
  });
}
