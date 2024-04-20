const navHam = document.querySelector(".ham");

const navbar = document.querySelector(".container");

const cross = document.querySelector(".cross");

navHam.addEventListener("click", () => {
  navbar.style.display = "block";
});

cross.addEventListener("click", () => {
  navbar.style.display = "none";
});
