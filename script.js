const display = document.getElementById("display");

function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  // Create a string of all possible characters
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}?[]";

  let allowedCharacters = "";
  let password = "";  

  allowedCharacters += includeLowercase ? lowercase : "";
  allowedCharacters += includeUppercase ? uppercase : "";
  allowedCharacters += includeNumbers ? numbers : "";
  allowedCharacters += includeSymbols ? symbols : "";

  if (length <= 0) {
    return "Password length must be greater than 0";
  }

  if (allowedCharacters.length === 0) {
    return "Must select at least one character type";
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedCharacters.length); // Math.floor rounds down to the nearest whole number
    password += allowedCharacters[randomIndex];
  }

  return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

display.value = password;

console.log("Generated password: ", password);