var url = "https://api.adviceslip.com/advice";
var advice = document.getElementById("advice");
var dice = document.getElementById("dice");
var idAdvice = document.getElementById("idAdvice");

// onInit generer un conseil
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    idAdvice.innerText = data.slip.id;
    advice.innerText = '" ' + data.slip.advice + ' "';
  });

dice.addEventListener("click", function () {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setTimeout(function () {
        idAdvice.innerText = data.slip.id;
        advice.innerText = '" ' + data.slip.advice + ' "';
      }, 2000);
    });
});
