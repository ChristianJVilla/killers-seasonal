console.log("welcome to the killers club ⚔️");

const killerTitle = document.getElementById("killer");

console.log(killerTitle);

// killerTitle.style.color = "red";

window.addEventListener("load", (event) => {
  setTimeout(function () {
    killerTitle.style.color = "#ad310b";
    killerTitle.style.transition = "color 3s";
  }, 1500);
});
