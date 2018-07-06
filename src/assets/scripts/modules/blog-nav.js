var block_pos = $(".blog__nav").offset().top;
// определяем первоначальное положение блока
var wrap_pos = $(".blog__container").offset().top;
// позиция контейнера
var block_height = $(".blog__nav").outerHeight();
// высота блока
var wrap_height = $(".blog__container").outerHeight();
// высота контейнера
var block_width = $(".blog__nav").outerWidth();
var pos_absolute = wrap_pos + wrap_height - block_height;
// ширина блока
$(window).scroll(function() {
  if ($(window).scrollTop() > pos_absolute) {
    // Если страницу прокрутили дальше, чем высота родителя минус высота фикс. блока, то стопорим блок
    $(".blog__nav").css({
      position: "absolute",
      top: wrap_height - block_height,
      width: block_width
    });
  } else if ($(window).scrollTop() > block_pos) {
    // Если страницу прокрутили дальше, чем находится наш блок, то мы этот блок фиксируем и отображаем сверху
    $(".blog__nav").css({
      position: "fixed",
      top: "20px",
      width: block_width
    });
  } else {
    // Если же позиция скролла меньше (выше), чем наш блок, то возвращаем все назад
    $(".blog__nav").css({
      position: "static"
    });
  }
});

//Изменение активного класса навигации постов
jQuery(window).scroll(function() {
  var $sections = $(".post");
  $sections.each(function(i, el) {
    var top = $(el).offset().top - 100;
    var bottom = top + $(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr("id");
    if (scroll > top && scroll < bottom) {
      $("a.blog__link-active").removeClass("blog__link-active");
      $('a[href="#' + id + '"]').addClass("blog__link-active");
    }
  });
});

$(".blog__nav").on("click", "a", function(e) {
  e.preventDefault();

  // получем идентификатор блока из атрибута href
  var id = $(this).attr("href"),
    // находим высоту, на которой расположен блок
    top = $(id).offset().top;

  // анимируем переход к блоку, время: 1 секунда
  $("body,html").animate({ scrollTop: top }, 1000);
});
