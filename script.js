var nowSlideNum = 0;
var images = [
  "https://i.picsum.photos/id/0/1200/628.jpg",
  "https://i.picsum.photos/id/1/1200/628.jpg",
  "https://i.picsum.photos/id/2/1200/628.jpg",
  "https://i.picsum.photos/id/3/1200/628.jpg",
  "https://i.picsum.photos/id/4/1200/628.jpg",
];
var slideCounter;
var imgLeft;
var imgCenter;
var imgRight;

window.onload = function () {
  initialize();
};
function initialize() {
  // 要素を読み込み
  slideCounter = document.getElementsByClassName("slide__counter");
  imgLeft = document.getElementById("slide__container--left--image");
  imgCenter = document.getElementById("slide__container--center--image");
  imgRight = document.getElementById("slide__container--right--image");
  // 画像を挿入
  imgLeft.src = images[0];
  imgCenter.src = images[1];
  imgRight.src = images[2];
  // スライドのページネーションを表示
  for (var i = 0; i < images.length; i++) {
    var span = document.createElement("span");
    slideCounter[0].appendChild(span);
  }
}
