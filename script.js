var nowSlideNum = 0;
var images = [
  "https://picsum.photos/id/0/1200/628",
  "https://picsum.photos/id/1/1200/628",
  "https://picsum.photos/id/2/1200/628",
  "https://picsum.photos/id/3/1200/628",
  "https://picsum.photos/id/4/1200/628",
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
  imgLeft = document.getElementsByClassName("slide__container--left--image");
  imgCenter = document.getElementsByClassName(
    "slide__container--center--image"
  );
  imgRight = document.getElementsByClassName("slide__container--right--image");
  // 画像を挿入
  imgLeft[0].src = images[0];
  imgCenter[0].src = images[1];
  imgRight[0].src = images[2];
  // スライドのページネーションを表示
  for (var i = 0; i < images.length; i++) {
    var span = document.createElement("span");
    slideCounter[0].appendChild(span);
  }
}
