var form = document.querySelector("#form");
var formBtn = form.querySelector("#form-btn");
var userName = form.querySelector("#name");
var userEmail = form.querySelector("#email");
var userText = form.querySelector("#text");
var fields = form.querySelectorAll(".form__field");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  var failRemove = form.querySelectorAll(".form__fail");
  for (i = 0; i < failRemove.length; i++) {
    failRemove[i].remove();
  }

  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      form[i].style.border = "1px solid red";

      var fail = document.createElement("div");

      fail.className = "form__fail";
      fail.innerHTML =
        "<div class='form__fail-text'>Не все поля заполнены</div>";
      form[i].parentElement.insertBefore(fail, fields[i]);

      setTimeout(function() {
        fail.remove();
        form[i].style.border = "1px solid transparent";
      }, 3000);
      return false;
    }
  }
  return true;
});
