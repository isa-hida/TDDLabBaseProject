import sumar from "./sumador";
import multiplicar from "./multiplicador";

// Suma
const firstSum = document.querySelector("#sumar-form #primer-numero");
const secondSum = document.querySelector("#sumar-form #segundo-numero");
const formSum = document.querySelector("#sumar-form");
const divSum = document.querySelector("#sumar-form").nextElementSibling;

formSum.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstSum.value);
  const secondNumber = Number.parseInt(secondSum.value);

  divSum.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

// Multiplicacion
const firstMult = document.querySelector("#multiplicar-form #primer-numero");
const secondMult = document.querySelector("#multiplicar-form #segundo-numero");
const formMult = document.querySelector("#multiplicar-form");
const divMult = document.querySelector("#multiplicar-form").nextElementSibling;

formMult.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstMult.value);
  const secondNumber = Number.parseInt(secondMult.value);

  divMult.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
