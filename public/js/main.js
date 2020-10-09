console.log("welcome to the killers club ⚔️");

const killerTitle = document.getElementById("killer");

console.log(killerTitle);

// killerTitle.style.color = "red";

window.addEventListener("load", (event) => {
  killerTitle.style.opacity = "0";
  setTimeout(function () {
    killerTitle.style.opacity = "1";
    killerTitle.style.color = "#ad310b";
    killerTitle.style.transition = "color 3s";
  }, 1500);
});
