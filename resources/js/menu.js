const hamburger = document.querySelector(".hamburger");
const blackBurger = document.querySelector(".hamburger-black");
const navMenu = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  blackBurger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  blackBurger.classList.remove("active");
  navMenu.classList.remove("active");
}))

blackBurger.addEventListener("click", () => {
  hamburger.classList.remove("active");
  blackBurger.classList.remove("active");
  navMenu.classList.remove("active");
})