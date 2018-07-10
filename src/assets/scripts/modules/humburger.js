var btn = document.querySelector("#hamburger__menu-link");
var card = document.querySelector(".overlay");
var menuBg = document.querySelector(".hamburger__menu-bars");
var bodyOverflow = document.querySelector("body");

btn.addEventListener("click", function(e) {
  e.preventDefault();
  card.classList.toggle("overlay__open");
  menuBg.classList.toggle("hamburger__menu-bars-active");
  bodyOverflow.classList.toggle("overflow-hidden");
});
