var btn = document.querySelector("#hamburger__menu-link");
var card = document.querySelector(".overlay");
var menuBg = document.querySelector(".hamburger__menu-bars");

btn.addEventListener("click", function() {
  event.preventDefault();
  card.classList.toggle("overlay__open");
  menuBg.classList.toggle("hamburger__menu-bars-active");
});
