webpackJsonp([2],{1:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar btn = document.querySelector("#hamburger__menu-link");\nvar card = document.querySelector(".overlay");\nvar menuBg = document.querySelector(".hamburger__menu-bars");\nvar bodyOverflow = document.querySelector("body");\n\nbtn.addEventListener("click", function (e) {\n  e.preventDefault();\n  card.classList.toggle("overlay__open");\n  menuBg.classList.toggle("hamburger__menu-bars-active");\n  bodyOverflow.classList.toggle("overflow-hidden");\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9odW1idXJnZXIuanM/OGI1ZSJdLCJuYW1lcyI6WyJidG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJkIiwibWVudUJnIiwiYm9keU92ZXJmbG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxNQUFNQyxTQUFTQyxhQUFULENBQXVCLHVCQUF2QixDQUFWO0FBQ0EsSUFBSUMsT0FBT0YsU0FBU0MsYUFBVCxDQUF1QixVQUF2QixDQUFYO0FBQ0EsSUFBSUUsU0FBU0gsU0FBU0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBYjtBQUNBLElBQUlHLGVBQWVKLFNBQVNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBbkI7O0FBRUFGLElBQUlNLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFVBQVNDLENBQVQsRUFBWTtBQUN4Q0EsSUFBRUMsY0FBRjtBQUNBTCxPQUFLTSxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsZUFBdEI7QUFDQU4sU0FBT0ssU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsNkJBQXhCO0FBQ0FMLGVBQWFJLFNBQWIsQ0FBdUJDLE1BQXZCLENBQThCLGlCQUE5QjtBQUNELENBTEQiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hhbWJ1cmdlcl9fbWVudS1saW5rXCIpO1xudmFyIGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG52YXIgbWVudUJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJfX21lbnUtYmFyc1wiKTtcbnZhciBib2R5T3ZlcmZsb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY2FyZC5jbGFzc0xpc3QudG9nZ2xlKFwib3ZlcmxheV9fb3BlblwiKTtcbiAgbWVudUJnLmNsYXNzTGlzdC50b2dnbGUoXCJoYW1idXJnZXJfX21lbnUtYmFycy1hY3RpdmVcIik7XG4gIGJvZHlPdmVyZmxvdy5jbGFzc0xpc3QudG9nZ2xlKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9odW1idXJnZXIuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n')},2:function(module,exports,__webpack_require__){"use strict";eval('\n\n$(document).ready(function () {\n  $(".scroll__btn").click(function () {\n    // ловим клик по ссылке с классом go_to\n    var scroll_el = $(this).attr("href");\n    // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .\n    if ($(scroll_el).length != 0) {\n      // проверим существование элемента чтобы избежать ошибки\n      $("html, body").animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el\n    }\n    return false; // выключаем стандартное действие\n  });\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zY3JvbGwuanM/MDc2NyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNsaWNrIiwic2Nyb2xsX2VsIiwiYXR0ciIsImxlbmd0aCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiXSwibWFwcGluZ3MiOiI7O0FBQUFBLEVBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFXO0FBQzNCRixJQUFFLGNBQUYsRUFBa0JHLEtBQWxCLENBQXdCLFlBQVc7QUFDakM7QUFDQSxRQUFJQyxZQUFZSixFQUFFLElBQUYsRUFBUUssSUFBUixDQUFhLE1BQWIsQ0FBaEI7QUFDQTtBQUNBLFFBQUlMLEVBQUVJLFNBQUYsRUFBYUUsTUFBYixJQUF1QixDQUEzQixFQUE4QjtBQUM1QjtBQUNBTixRQUFFLFlBQUYsRUFBZ0JPLE9BQWhCLENBQXdCLEVBQUVDLFdBQVdSLEVBQUVJLFNBQUYsRUFBYUssTUFBYixHQUFzQkMsR0FBbkMsRUFBeEIsRUFBa0UsSUFBbEUsRUFGNEIsQ0FFNkM7QUFDMUU7QUFDRCxXQUFPLEtBQVAsQ0FSaUMsQ0FRbkI7QUFDZixHQVREO0FBVUQsQ0FYRCIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICQoXCIuc2Nyb2xsX19idG5cIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgLy8g0LvQvtCy0LjQvCDQutC70LjQuiDQv9C+INGB0YHRi9C70LrQtSDRgSDQutC70LDRgdGB0L7QvCBnb190b1xuICAgIHZhciBzY3JvbGxfZWwgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xuICAgIC8vINCy0L7Qt9GM0LzQtdC8INGB0L7QtNC10YDQttC40LzQvtC1INCw0YLRgNC40LHRg9GC0LAgaHJlZiwg0LTQvtC70LbQtdC9INCx0YvRgtGMINGB0LXQu9C10LrRgtC+0YDQvtC8LCDRgi7QtS4g0L3QsNC/0YDQuNC80LXRgCDQvdCw0YfQuNC90LDRgtGM0YHRjyDRgSAjINC40LvQuCAuXG4gICAgaWYgKCQoc2Nyb2xsX2VsKS5sZW5ndGggIT0gMCkge1xuICAgICAgLy8g0L/RgNC+0LLQtdGA0LjQvCDRgdGD0YnQtdGB0YLQstC+0LLQsNC90LjQtSDRjdC70LXQvNC10L3RgtCwINGH0YLQvtCx0Ysg0LjQt9Cx0LXQttCw0YLRjCDQvtGI0LjQsdC60LhcbiAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoc2Nyb2xsX2VsKS5vZmZzZXQoKS50b3AgfSwgMTAwMCk7IC8vINCw0L3QuNC80LjRgNGD0LXQvCDRgdC60YDQvtC+0LvQuNC90LMg0Log0Y3Qu9C10LzQtdC90YLRgyBzY3JvbGxfZWxcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlOyAvLyDQstGL0LrQu9GO0YfQsNC10Lwg0YHRgtCw0L3QtNCw0YDRgtC90L7QtSDQtNC10LnRgdGC0LLQuNC1XG4gIH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zY3JvbGwuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n')},42:function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(3);\n\n__webpack_require__(1);\n\n__webpack_require__(43);\n\n__webpack_require__(44);\n\n__webpack_require__(46);\n\n__webpack_require__(2);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvd29ya3MuanM/OTg4YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBIiwiZmlsZSI6IjQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL3ByZWxvYWRlclwiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL2h1bWJ1cmdlclwiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL2JsdXJcIjtcbmltcG9ydCBcIi4vbW9kdWxlcy9zbGlkZXJcIjtcbmltcG9ydCBcIi4vbW9kdWxlcy9mb3JtLXZhbGlkYXRlXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvc2Nyb2xsXCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvd29ya3MuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///42\n")},43:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar blur = function () {\n  var form = document.querySelector(".form__bg");\n  return {\n    set: function set() {\n      var review = document.querySelector(".reviews");\n      var formWrapper = document.querySelector(".reviews__form-container");\n      var topReview = review.offsetTop;\n      var heightReview = review.getBoundingClientRect().height;\n      var wrapperTop = formWrapper.offsetTop;\n      var dif = topReview - wrapperTop;\n      var blurCSS = form.style;\n\n      blurCSS.backgroundSize = "auto " + heightReview + "px";\n      blurCSS.backgroundPosition = -formWrapper.offsetLeft + "px " + dif + "px";\n    }\n  };\n}();\nblur.set();\nwindow.onresize = function () {\n  blur.set();\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibHVyLmpzP2MzZWUiXSwibmFtZXMiOlsiYmx1ciIsImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXQiLCJyZXZpZXciLCJmb3JtV3JhcHBlciIsInRvcFJldmlldyIsIm9mZnNldFRvcCIsImhlaWdodFJldmlldyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIndyYXBwZXJUb3AiLCJkaWYiLCJibHVyQ1NTIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm9mZnNldExlZnQiLCJ3aW5kb3ciLCJvbnJlc2l6ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxPQUFRLFlBQVc7QUFDckIsTUFBSUMsT0FBT0MsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFYO0FBQ0EsU0FBTztBQUNMQyxTQUFLLGVBQU07QUFDVCxVQUFJQyxTQUFTSCxTQUFTQyxhQUFULENBQXVCLFVBQXZCLENBQWI7QUFDQSxVQUFJRyxjQUFjSixTQUFTQyxhQUFULENBQXVCLDBCQUF2QixDQUFsQjtBQUNBLFVBQUlJLFlBQVlGLE9BQU9HLFNBQXZCO0FBQ0EsVUFBSUMsZUFBZUosT0FBT0sscUJBQVAsR0FBK0JDLE1BQWxEO0FBQ0EsVUFBSUMsYUFBYU4sWUFBWUUsU0FBN0I7QUFDQSxVQUFJSyxNQUFNTixZQUFZSyxVQUF0QjtBQUNBLFVBQUlFLFVBQVViLEtBQUtjLEtBQW5COztBQUVBRCxjQUFRRSxjQUFSLGFBQWlDUCxZQUFqQztBQUNBSyxjQUFRRyxrQkFBUixHQUFnQyxDQUFDWCxZQUFZWSxVQUE3QyxXQUE2REwsR0FBN0Q7QUFDRDtBQVpJLEdBQVA7QUFjRCxDQWhCVSxFQUFYO0FBaUJBYixLQUFLSSxHQUFMO0FBQ0FlLE9BQU9DLFFBQVAsR0FBa0IsWUFBVztBQUMzQnBCLE9BQUtJLEdBQUw7QUFDRCxDQUZEIiwiZmlsZSI6IjQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGJsdXIgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19iZ1wiKTtcbiAgcmV0dXJuIHtcbiAgICBzZXQ6ICgpID0+IHtcbiAgICAgIHZhciByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJldmlld3NcIik7XG4gICAgICB2YXIgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJldmlld3NfX2Zvcm0tY29udGFpbmVyXCIpO1xuICAgICAgdmFyIHRvcFJldmlldyA9IHJldmlldy5vZmZzZXRUb3A7XG4gICAgICB2YXIgaGVpZ2h0UmV2aWV3ID0gcmV2aWV3LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIHZhciB3cmFwcGVyVG9wID0gZm9ybVdyYXBwZXIub2Zmc2V0VG9wO1xuICAgICAgdmFyIGRpZiA9IHRvcFJldmlldyAtIHdyYXBwZXJUb3A7XG4gICAgICB2YXIgYmx1ckNTUyA9IGZvcm0uc3R5bGU7XG5cbiAgICAgIGJsdXJDU1MuYmFja2dyb3VuZFNpemUgPSBgYXV0byAke2hlaWdodFJldmlld31weGA7XG4gICAgICBibHVyQ1NTLmJhY2tncm91bmRQb3NpdGlvbiA9IGAkey1mb3JtV3JhcHBlci5vZmZzZXRMZWZ0fXB4ICR7ZGlmfXB4YDtcbiAgICB9XG4gIH07XG59KSgpO1xuYmx1ci5zZXQoKTtcbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICBibHVyLnNldCgpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2JsdXIuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///43\n')},44:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _vue = __webpack_require__(4);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar descriptions = {\n  template: "#slider-desc",\n  props: {\n    work: Object\n  }\n};\n\nvar demonstrations = {\n  template: "#slider-demo",\n  props: {\n    work: Object\n  }\n};\n\nvar btns = {\n  template: "#slider-btns",\n  props: {\n    works: Array,\n    currentIndex: Number\n  },\n  methods: {\n    slide: function slide(direction) {\n      this.$emit("slide", direction);\n    },\n    getReqImage: function getReqImage(direction) {\n      var worksArray = [].concat(_toConsumableArray(this.works));\n      switch (direction) {\n        case "prev":\n          var lastItem = worksArray[worksArray.length - 1];\n          worksArray.unshift(lastItem);\n          worksArray.pop();\n          break;\n\n        case "next":\n          worksArray.push(worksArray[0]);\n          worksArray.shift();\n          break;\n      }\n\n      return worksArray[this.currentIndex];\n    }\n  }\n};\n\nnew _vue2.default({\n  el: "#slider__component",\n  components: {\n    descriptions: descriptions,\n    demonstrations: demonstrations,\n    btns: btns\n  },\n  data: {\n    works: [],\n    currentWorks: {},\n    currentIndex: 0\n  },\n  watch: {\n    currentIndex: function currentIndex(value) {\n      var worksAmount = this.works.length - 1;\n      if (value > worksAmount) this.currentIndex = 0;\n      if (value < 0) this.currentIndex = worksAmount;\n      this.currentWork = this.works[value];\n    }\n  },\n  created: function created() {\n    this.works = __webpack_require__(45);\n    this.currentWork = this.works[0];\n  },\n\n  methods: {\n    handleSlide: function handleSlide(direction) {\n      switch (direction) {\n        case "next":\n          this.currentIndex = this.currentIndex + 1;\n          break;\n\n        case "prev":\n          this.currentIndex = this.currentIndex - 1;\n          break;\n      }\n    }\n  },\n  template: "#slider"\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zbGlkZXIuanM/MTE4YyJdLCJuYW1lcyI6WyJkZXNjcmlwdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb3BzIiwid29yayIsIk9iamVjdCIsImRlbW9uc3RyYXRpb25zIiwiYnRucyIsIndvcmtzIiwiQXJyYXkiLCJjdXJyZW50SW5kZXgiLCJOdW1iZXIiLCJtZXRob2RzIiwic2xpZGUiLCJkaXJlY3Rpb24iLCIkZW1pdCIsImdldFJlcUltYWdlIiwid29ya3NBcnJheSIsImxhc3RJdGVtIiwibGVuZ3RoIiwidW5zaGlmdCIsInBvcCIsInB1c2giLCJzaGlmdCIsIlZ1ZSIsImVsIiwiY29tcG9uZW50cyIsImRhdGEiLCJjdXJyZW50V29ya3MiLCJ3YXRjaCIsInZhbHVlIiwid29ya3NBbW91bnQiLCJjdXJyZW50V29yayIsImNyZWF0ZWQiLCJyZXF1aXJlIiwiaGFuZGxlU2xpZGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZTtBQUNuQkMsWUFBVSxjQURTO0FBRW5CQyxTQUFPO0FBQ0xDLFVBQU1DO0FBREQ7QUFGWSxDQUFyQjs7QUFPQSxJQUFNQyxpQkFBaUI7QUFDckJKLFlBQVUsY0FEVztBQUVyQkMsU0FBTztBQUNMQyxVQUFNQztBQUREO0FBRmMsQ0FBdkI7O0FBT0EsSUFBTUUsT0FBTztBQUNYTCxZQUFVLGNBREM7QUFFWEMsU0FBTztBQUNMSyxXQUFPQyxLQURGO0FBRUxDLGtCQUFjQztBQUZULEdBRkk7QUFNWEMsV0FBUztBQUNQQyxTQURPLGlCQUNEQyxTQURDLEVBQ1U7QUFDZixXQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQkQsU0FBcEI7QUFDRCxLQUhNO0FBSVBFLGVBSk8sdUJBSUtGLFNBSkwsRUFJZ0I7QUFDckIsVUFBTUcsMENBQWlCLEtBQUtULEtBQXRCLEVBQU47QUFDQSxjQUFRTSxTQUFSO0FBQ0UsYUFBSyxNQUFMO0FBQ0UsY0FBTUksV0FBV0QsV0FBV0EsV0FBV0UsTUFBWCxHQUFvQixDQUEvQixDQUFqQjtBQUNBRixxQkFBV0csT0FBWCxDQUFtQkYsUUFBbkI7QUFDQUQscUJBQVdJLEdBQVg7QUFDQTs7QUFFRixhQUFLLE1BQUw7QUFDRUoscUJBQVdLLElBQVgsQ0FBZ0JMLFdBQVcsQ0FBWCxDQUFoQjtBQUNBQSxxQkFBV00sS0FBWDtBQUNBO0FBVko7O0FBYUEsYUFBT04sV0FBVyxLQUFLUCxZQUFoQixDQUFQO0FBQ0Q7QUFwQk07QUFORSxDQUFiOztBQThCQSxJQUFJYyxhQUFKLENBQVE7QUFDTkMsTUFBSSxvQkFERTtBQUVOQyxjQUFZO0FBQ1Z6Qiw4QkFEVTtBQUVWSyxrQ0FGVTtBQUdWQztBQUhVLEdBRk47QUFPTm9CLFFBQU07QUFDSm5CLFdBQU8sRUFESDtBQUVKb0Isa0JBQWMsRUFGVjtBQUdKbEIsa0JBQWM7QUFIVixHQVBBO0FBWU5tQixTQUFPO0FBQ0xuQixnQkFESyx3QkFDUW9CLEtBRFIsRUFDZTtBQUNsQixVQUFNQyxjQUFjLEtBQUt2QixLQUFMLENBQVdXLE1BQVgsR0FBb0IsQ0FBeEM7QUFDQSxVQUFJVyxRQUFRQyxXQUFaLEVBQXlCLEtBQUtyQixZQUFMLEdBQW9CLENBQXBCO0FBQ3pCLFVBQUlvQixRQUFRLENBQVosRUFBZSxLQUFLcEIsWUFBTCxHQUFvQnFCLFdBQXBCO0FBQ2YsV0FBS0MsV0FBTCxHQUFtQixLQUFLeEIsS0FBTCxDQUFXc0IsS0FBWCxDQUFuQjtBQUNEO0FBTkksR0FaRDtBQW9CTkcsU0FwQk0scUJBb0JJO0FBQ1IsU0FBS3pCLEtBQUwsR0FBYSxtQkFBQTBCLENBQVEsRUFBUixDQUFiO0FBQ0EsU0FBS0YsV0FBTCxHQUFtQixLQUFLeEIsS0FBTCxDQUFXLENBQVgsQ0FBbkI7QUFDRCxHQXZCSzs7QUF3Qk5JLFdBQVM7QUFDUHVCLGVBRE8sdUJBQ0tyQixTQURMLEVBQ2dCO0FBQ3JCLGNBQVFBLFNBQVI7QUFDRSxhQUFLLE1BQUw7QUFDRSxlQUFLSixZQUFMLEdBQW9CLEtBQUtBLFlBQUwsR0FBb0IsQ0FBeEM7QUFDQTs7QUFFRixhQUFLLE1BQUw7QUFDRSxlQUFLQSxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsR0FBb0IsQ0FBeEM7QUFDQTtBQVBKO0FBU0Q7QUFYTSxHQXhCSDtBQXFDTlIsWUFBVTtBQXJDSixDQUFSIiwiZmlsZSI6IjQ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5cbmNvbnN0IGRlc2NyaXB0aW9ucyA9IHtcbiAgdGVtcGxhdGU6IFwiI3NsaWRlci1kZXNjXCIsXG4gIHByb3BzOiB7XG4gICAgd29yazogT2JqZWN0XG4gIH1cbn07XG5cbmNvbnN0IGRlbW9uc3RyYXRpb25zID0ge1xuICB0ZW1wbGF0ZTogXCIjc2xpZGVyLWRlbW9cIixcbiAgcHJvcHM6IHtcbiAgICB3b3JrOiBPYmplY3RcbiAgfVxufTtcblxuY29uc3QgYnRucyA9IHtcbiAgdGVtcGxhdGU6IFwiI3NsaWRlci1idG5zXCIsXG4gIHByb3BzOiB7XG4gICAgd29ya3M6IEFycmF5LFxuICAgIGN1cnJlbnRJbmRleDogTnVtYmVyXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzbGlkZShkaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJzbGlkZVwiLCBkaXJlY3Rpb24pO1xuICAgIH0sXG4gICAgZ2V0UmVxSW1hZ2UoZGlyZWN0aW9uKSB7XG4gICAgICBjb25zdCB3b3Jrc0FycmF5ID0gWy4uLnRoaXMud29ya3NdO1xuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBcInByZXZcIjpcbiAgICAgICAgICBjb25zdCBsYXN0SXRlbSA9IHdvcmtzQXJyYXlbd29ya3NBcnJheS5sZW5ndGggLSAxXTtcbiAgICAgICAgICB3b3Jrc0FycmF5LnVuc2hpZnQobGFzdEl0ZW0pO1xuICAgICAgICAgIHdvcmtzQXJyYXkucG9wKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIm5leHRcIjpcbiAgICAgICAgICB3b3Jrc0FycmF5LnB1c2god29ya3NBcnJheVswXSk7XG4gICAgICAgICAgd29ya3NBcnJheS5zaGlmdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gd29ya3NBcnJheVt0aGlzLmN1cnJlbnRJbmRleF07XG4gICAgfVxuICB9XG59O1xuXG5uZXcgVnVlKHtcbiAgZWw6IFwiI3NsaWRlcl9fY29tcG9uZW50XCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBkZXNjcmlwdGlvbnMsXG4gICAgZGVtb25zdHJhdGlvbnMsXG4gICAgYnRuc1xuICB9LFxuICBkYXRhOiB7XG4gICAgd29ya3M6IFtdLFxuICAgIGN1cnJlbnRXb3Jrczoge30sXG4gICAgY3VycmVudEluZGV4OiAwXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgY3VycmVudEluZGV4KHZhbHVlKSB7XG4gICAgICBjb25zdCB3b3Jrc0Ftb3VudCA9IHRoaXMud29ya3MubGVuZ3RoIC0gMTtcbiAgICAgIGlmICh2YWx1ZSA+IHdvcmtzQW1vdW50KSB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICBpZiAodmFsdWUgPCAwKSB0aGlzLmN1cnJlbnRJbmRleCA9IHdvcmtzQW1vdW50O1xuICAgICAgdGhpcy5jdXJyZW50V29yayA9IHRoaXMud29ya3NbdmFsdWVdO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLndvcmtzID0gcmVxdWlyZShcIi4uLy4uLy4uL2RhdGEvd29ya3MuanNvblwiKTtcbiAgICB0aGlzLmN1cnJlbnRXb3JrID0gdGhpcy53b3Jrc1swXTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZVNsaWRlKGRpcmVjdGlvbikge1xuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBcIm5leHRcIjpcbiAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHRoaXMuY3VycmVudEluZGV4ICsgMTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwicHJldlwiOlxuICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5jdXJyZW50SW5kZXggLSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgdGVtcGxhdGU6IFwiI3NsaWRlclwiXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3NsaWRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///44\n')},45:function(module,exports){eval('module.exports = [{"id":1,"title":"1 Сайт школы онлайн образования","skills":"1 Html, Css, JavaScript","photo":"./assets/images/slider-img-1.png","link":"//google.com"},{"id":2,"title":"2 Сайт школы онлайн образования","skills":"2 Html, Css, JavaScript","photo":"./assets/images/slider-img-2.png","link":"//yandex.ru"},{"id":3,"title":"3 Сайт школы онлайн образования","skills":"3 Html, Css, JavaScript","photo":"./assets/images/slider-img-3.png","link":"//rambler.ru"},{"id":4,"title":"4 Сайт школы онлайн образования","skills":"4 Html, Css, JavaScript","photo":"./assets/images/slider-img-4.png","link":"//vk.com"}]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS93b3Jrcy5qc29uPzEyNjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CLHFKQUFxSixFQUFFLG9KQUFvSixFQUFFLHFKQUFxSixFQUFFLGlKQUFpSiIsImZpbGUiOiI0NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gW3tcImlkXCI6MSxcInRpdGxlXCI6XCIxINCh0LDQudGCINGI0LrQvtC70Ysg0L7QvdC70LDQudC9INC+0LHRgNCw0LfQvtCy0LDQvdC40Y9cIixcInNraWxsc1wiOlwiMSBIdG1sLCBDc3MsIEphdmFTY3JpcHRcIixcInBob3RvXCI6XCIuL2Fzc2V0cy9pbWFnZXMvc2xpZGVyLWltZy0xLnBuZ1wiLFwibGlua1wiOlwiLy9nb29nbGUuY29tXCJ9LHtcImlkXCI6MixcInRpdGxlXCI6XCIyINCh0LDQudGCINGI0LrQvtC70Ysg0L7QvdC70LDQudC9INC+0LHRgNCw0LfQvtCy0LDQvdC40Y9cIixcInNraWxsc1wiOlwiMiBIdG1sLCBDc3MsIEphdmFTY3JpcHRcIixcInBob3RvXCI6XCIuL2Fzc2V0cy9pbWFnZXMvc2xpZGVyLWltZy0yLnBuZ1wiLFwibGlua1wiOlwiLy95YW5kZXgucnVcIn0se1wiaWRcIjozLFwidGl0bGVcIjpcIjMg0KHQsNC50YIg0YjQutC+0LvRiyDQvtC90LvQsNC50L0g0L7QsdGA0LDQt9C+0LLQsNC90LjRj1wiLFwic2tpbGxzXCI6XCIzIEh0bWwsIENzcywgSmF2YVNjcmlwdFwiLFwicGhvdG9cIjpcIi4vYXNzZXRzL2ltYWdlcy9zbGlkZXItaW1nLTMucG5nXCIsXCJsaW5rXCI6XCIvL3JhbWJsZXIucnVcIn0se1wiaWRcIjo0LFwidGl0bGVcIjpcIjQg0KHQsNC50YIg0YjQutC+0LvRiyDQvtC90LvQsNC50L0g0L7QsdGA0LDQt9C+0LLQsNC90LjRj1wiLFwic2tpbGxzXCI6XCI0IEh0bWwsIENzcywgSmF2YVNjcmlwdFwiLFwicGhvdG9cIjpcIi4vYXNzZXRzL2ltYWdlcy9zbGlkZXItaW1nLTQucG5nXCIsXCJsaW5rXCI6XCIvL3ZrLmNvbVwifV1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kYXRhL3dvcmtzLmpzb25cbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///45\n')},46:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar form = document.querySelector("#form");\nvar formBtn = form.querySelector("#form-btn");\nvar userName = form.querySelector("#name");\nvar userEmail = form.querySelector("#email");\nvar userText = form.querySelector("#text");\nvar fields = form.querySelectorAll(".form__field");\n\nform.addEventListener("submit", function (e) {\n  e.preventDefault();\n\n  var failRemove = form.querySelectorAll(".form__fail");\n  for (i = 0; i < failRemove.length; i++) {\n    failRemove[i].remove();\n  }\n\n  for (var i = 0; i < fields.length; i++) {\n    if (!fields[i].value) {\n      form[i].style.border = "1px solid red";\n\n      var fail = document.createElement("div");\n\n      fail.className = "form__fail";\n      fail.innerHTML = "<div class=\'form__fail-text\'>Не все поля заполнены</div>";\n      form[i].parentElement.insertBefore(fail, fields[i]);\n\n      setTimeout(function () {\n        fail.remove();\n        form[i].style.border = "1px solid transparent";\n      }, 3000);\n      return false;\n    }\n  }\n  return true;\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mb3JtLXZhbGlkYXRlLmpzPzAzM2EiXSwibmFtZXMiOlsiZm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvcm1CdG4iLCJ1c2VyTmFtZSIsInVzZXJFbWFpbCIsInVzZXJUZXh0IiwiZmllbGRzIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJmYWlsUmVtb3ZlIiwiaSIsImxlbmd0aCIsInJlbW92ZSIsInZhbHVlIiwic3R5bGUiLCJib3JkZXIiLCJmYWlsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsInBhcmVudEVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE9BQU9DLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWDtBQUNBLElBQUlDLFVBQVVILEtBQUtFLGFBQUwsQ0FBbUIsV0FBbkIsQ0FBZDtBQUNBLElBQUlFLFdBQVdKLEtBQUtFLGFBQUwsQ0FBbUIsT0FBbkIsQ0FBZjtBQUNBLElBQUlHLFlBQVlMLEtBQUtFLGFBQUwsQ0FBbUIsUUFBbkIsQ0FBaEI7QUFDQSxJQUFJSSxXQUFXTixLQUFLRSxhQUFMLENBQW1CLE9BQW5CLENBQWY7QUFDQSxJQUFJSyxTQUFTUCxLQUFLUSxnQkFBTCxDQUFzQixjQUF0QixDQUFiOztBQUVBUixLQUFLUyxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxVQUFTQyxDQUFULEVBQVk7QUFDMUNBLElBQUVDLGNBQUY7O0FBRUEsTUFBSUMsYUFBYVosS0FBS1EsZ0JBQUwsQ0FBc0IsYUFBdEIsQ0FBakI7QUFDQSxPQUFLSyxJQUFJLENBQVQsRUFBWUEsSUFBSUQsV0FBV0UsTUFBM0IsRUFBbUNELEdBQW5DLEVBQXdDO0FBQ3RDRCxlQUFXQyxDQUFYLEVBQWNFLE1BQWQ7QUFDRDs7QUFFRCxPQUFLLElBQUlGLElBQUksQ0FBYixFQUFnQkEsSUFBSU4sT0FBT08sTUFBM0IsRUFBbUNELEdBQW5DLEVBQXdDO0FBQ3RDLFFBQUksQ0FBQ04sT0FBT00sQ0FBUCxFQUFVRyxLQUFmLEVBQXNCO0FBQ3BCaEIsV0FBS2EsQ0FBTCxFQUFRSSxLQUFSLENBQWNDLE1BQWQsR0FBdUIsZUFBdkI7O0FBRUEsVUFBSUMsT0FBT2xCLFNBQVNtQixhQUFULENBQXVCLEtBQXZCLENBQVg7O0FBRUFELFdBQUtFLFNBQUwsR0FBaUIsWUFBakI7QUFDQUYsV0FBS0csU0FBTCxHQUNFLDBEQURGO0FBRUF0QixXQUFLYSxDQUFMLEVBQVFVLGFBQVIsQ0FBc0JDLFlBQXRCLENBQW1DTCxJQUFuQyxFQUF5Q1osT0FBT00sQ0FBUCxDQUF6Qzs7QUFFQVksaUJBQVcsWUFBVztBQUNwQk4sYUFBS0osTUFBTDtBQUNBZixhQUFLYSxDQUFMLEVBQVFJLEtBQVIsQ0FBY0MsTUFBZCxHQUF1Qix1QkFBdkI7QUFDRCxPQUhELEVBR0csSUFISDtBQUlBLGFBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFDRCxTQUFPLElBQVA7QUFDRCxDQTNCRCIsImZpbGUiOiI0Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtXCIpO1xudmFyIGZvcm1CdG4gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1idG5cIik7XG52YXIgdXNlck5hbWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKTtcbnZhciB1c2VyRW1haWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxcIik7XG52YXIgdXNlclRleHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjdGV4dFwiKTtcbnZhciBmaWVsZHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybV9fZmllbGRcIik7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICB2YXIgZmFpbFJlbW92ZSA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19mYWlsXCIpO1xuICBmb3IgKGkgPSAwOyBpIDwgZmFpbFJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgIGZhaWxSZW1vdmVbaV0ucmVtb3ZlKCk7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICghZmllbGRzW2ldLnZhbHVlKSB7XG4gICAgICBmb3JtW2ldLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJlZFwiO1xuXG4gICAgICB2YXIgZmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGZhaWwuY2xhc3NOYW1lID0gXCJmb3JtX19mYWlsXCI7XG4gICAgICBmYWlsLmlubmVySFRNTCA9XG4gICAgICAgIFwiPGRpdiBjbGFzcz0nZm9ybV9fZmFpbC10ZXh0Jz7QndC1INCy0YHQtSDQv9C+0LvRjyDQt9Cw0L/QvtC70L3QtdC90Ys8L2Rpdj5cIjtcbiAgICAgIGZvcm1baV0ucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZmFpbCwgZmllbGRzW2ldKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZmFpbC5yZW1vdmUoKTtcbiAgICAgICAgZm9ybVtpXS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiO1xuICAgICAgfSwgMzAwMCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mb3JtLXZhbGlkYXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///46\n')}},[42]);