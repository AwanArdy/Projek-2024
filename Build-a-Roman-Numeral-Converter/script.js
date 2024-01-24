const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const result = document.getElementById("result");

convertButton.addEventListener("click", () => {
  const numeral = parseInt(numberInput.value);

  if (!numberInput.value) {
    output.textContent = "Please enter a valid number";
  } else if (numeral < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (numeral >= 4000) {
    output.textContent = "Please enter a number less than 4000";
  } else {
    const romanNumeral = decimalToRoman(numeral);
    output.textContent = `${romanNumeral}`;
  }
});

const decimalToRoman = (num) => {
  const romanNumerals = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let roman = "";

  for (var i = 0; i < decimalValues.length; i++) {
    while (num >= decimalValues[i]) {
      roman += romanNumerals[i];
      num -= decimalValues[i];
    }
  }
  return roman;
};
