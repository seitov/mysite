var blur = (function() {
  var form = document.querySelector(".form__bg");
  return {
    set: () => {
      var review = document.querySelector(".reviews");
      var formWrapper = document.querySelector(".reviews__form-container");
      var topReview = review.offsetTop;
      var heightReview = review.getBoundingClientRect().height;
      var wrapperTop = formWrapper.offsetTop;
      var dif = topReview - wrapperTop;
      var blurCSS = form.style;

      blurCSS.backgroundSize = `auto ${heightReview}px`;
      blurCSS.backgroundPosition = `${-formWrapper.offsetLeft}px ${dif}px`;
    }
  };
})();
blur.set();
window.onresize = function() {
  blur.set();
};
