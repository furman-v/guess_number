import "../styles/index.scss";
let randomNumber;
function init() {
  randomNumber = getRandomNumber(9);
  const input = document.getElementById("checkInput");
  const button = document.getElementById("checkBtn");
  button.addEventListener("click", () => {
    checkNumber(input, randomNumber);
  });
}
init();

function checkNumber(input, number) {
  if (input.value == "") {
    alert("Please add number");
  } else {
    checkValue(input, number);
  }
}
function checkValue(input, number) {
  const prgrph = document.getElementById("paragraph");
  if (input.value > number) {
    prgrph.innerHTML = "Your number is more than allowed";
    prgrph.className = "red";
  } else if (input.value < number) {
    prgrph.innerHTML = "Your number is less than Random Number";
    prgrph.className = "green";
  } else {
    prgrph.innerHTML = `You won! I was Thinking about ${number}`;
    prgrph.className = "yellow";
    randomNumber = getRandomNumber(8);
  }
}

function getRandomNumber(n) {
  return Math.floor(Math.random() * n + 1);
}
