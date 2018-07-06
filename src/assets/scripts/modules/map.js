ymaps.ready(function() {
  var myMap = new ymaps.Map(
      "map-section",
      {
        center: [53.218661, 63.633818],
        zoom: 16
      },
      {
        searchControlProvider: "yandex#search"
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(
      [53.221222, 63.622601],
      {
        hintContent: "Мой адресс",
        balloonContent: "Мой адресс"
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "./assets/images/map_marker.svg",
        // Размеры метки.
        iconImageSize: [25, 37],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      }
    );

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable("scrollZoom");
});
