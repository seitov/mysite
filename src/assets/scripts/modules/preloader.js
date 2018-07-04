var images = document.images;
var allImages = images.length;
var imagesLoadedCount = 0;
var preloader = document.querySelector(".preloader");
var percDisplay = document.getElementById("percent_load");

for (var i = 0; i < allImages; i++) {
  var imageClone = new Image();
  imageClone.onload = imageLoaded;
  imageClone.onerror = imageLoaded;
  imageClone.src = images[i].src;
}

function imageLoaded() {
  imagesLoadedCount++;
  percDisplay.innerHTML = (((100 / allImages) * imagesLoadedCount) << 0) + "%";

  if (imagesLoadedCount >= allImages) {
    setTimeout(() => {
      if (!preloader.classList.contains("preloader__done")) {
        preloader.classList.add("preloader__done");
      }
    }, 1000);
  }
}
