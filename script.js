var imageCount = 5;
var imageUrls = [
  "https://i.picsum.photos/id/0/1200/628.jpg",
  "https://i.picsum.photos/id/1/1200/628.jpg",
  "https://i.picsum.photos/id/2/1200/628.jpg",
  "https://i.picsum.photos/id/3/1200/628.jpg",
  "https://i.picsum.photos/id/4/1200/628.jpg",
];
window.onload = function () {
  initialize();
};
var slideCounter = document.getElementsByClassName("slide__counter");
function initialize() {
  for (var i = 0; i < imageCount; i++) {
    var span = document.createElement("span");
    slideCounter[0].appendChild(span);
  }
}
