var url = "https://api.adviceslip.com/advice";
var advice = document.getElementById("advice");
var dice = document.getElementById("dice");
var idAdvice = document.getElementById("idAdvice");
var separations = document.querySelector(".separation");
var sepMobile = document.querySelector(".separation-mobile");
if (window.innerWidth < 1300) {
  separations.style.display = "none";
  sepMobile.style.display = "block";
} else {
  separations.style.display = "block";
  sepMobile.style.display = "none";
}
onresize = function () {
  if (window.innerWidth < 1300) {
    separations.style.display = "none";
    sepMobile.style.display = "block";
  } else {
    separations.style.display = "block";
    sepMobile.style.display = "none";
  }
};

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
