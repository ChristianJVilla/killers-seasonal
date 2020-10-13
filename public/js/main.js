console.log("welcome to the killers club ⚔️");

const killerTitle = document.getElementById("killer");
const landingButton = document.getElementById("landing-btn");

window.addEventListener("load", (event) => {
  killerTitle.style.opacity = "0";
  landingButton.style.opacity = "0";
  setTimeout(function () {
    killerTitle.style.opacity = "1";
    killerTitle.style.color = "#ad310b";
    killerTitle.style.transition = "color 3s";
    landingButton;
  }, 1500);
  setTimeout(function () {
    killerTitle.style.color = "rgb(124, 3, 3)";
    killerTitle.style.transition = "color 3s";
    landingButton.style.animation = "buttonFadeIn 2s ease";
    landingButton.style.opacity = "1";
  }, 3000);
});
