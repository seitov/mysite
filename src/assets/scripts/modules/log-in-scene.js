var btn = document.querySelector("#log-in__links");
var card = document.querySelector(".welcome__content-wrap");

btn.addEventListener("click", function() {
  event.preventDefault();
  card.classList.toggle("welcome__content-wrap__is-flipped");
});
