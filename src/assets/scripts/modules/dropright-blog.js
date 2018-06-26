var btn = document.querySelector("#dropright__btn");
var dropRight = document.querySelector(".blog__left");

btn.addEventListener("click", function() {
  event.preventDefault();
  dropRight.classList.toggle("blog__left-fixed");
});
