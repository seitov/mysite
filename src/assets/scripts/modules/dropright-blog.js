var btn = document.querySelector("#dropright__btn");
var dropRight = document.querySelector(".blog__left");
var link = document.querySelectorAll(".blog__link");

// При нажатии на dropright__btn фиксируем навигацию статей

btn.addEventListener("click", function(e) {
  e.preventDefault();
  dropRight.classList.toggle("blog__left-fixed");
});

// При нажатии на ссылку определенной статьи прячем навигацию статей

[].forEach.call(link, function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    dropRight.classList.remove("blog__left-fixed");
  });
});
