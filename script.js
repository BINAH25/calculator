let operator = prompt("choose operator + - * /");
let num1 = parseInt(prompt("ernter first number"));
let num2 = parseInt(prompt("ernter second number"));

if (operator === "+") {
  let result = num1 + num2;
  alert(`the is result is ${result}`);
}
if (operator === "-") {
  let result = num1 - num2;
  alert(`the is result is ${result}`);
}
if (operator === "*") {
  let result = num1 * num2;
  alert(`the is result is ${result}`);
}
if (operator === "/") {
  let result = num1 / num2;
  alert(`the is result is ${result}`);
}
