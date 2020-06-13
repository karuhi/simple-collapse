(function () {
  tns({
    container: ".slider-view__slider",
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    // 見た目系
    items: 1,
    edgePadding: 0, // ちらっと見える幅
    gutter: 0, // 画像同士の間の余白
    center: true, // メイン画像をセンタリング
    autoHeight: true,
    controlsText: ["&lt;", "&gt;"],
    // autoplay
    autoplay: true,
    autoplayHoverPause: false,
    autoplayTimeout: 3500,
    autoplayButtonOutput: false,
    navPosition: "bottom",
    responsive: {
      0: {
        items: 1,
        edgePadding: 0, // ちらっと見える幅
        gutter: 0, // 画像同士の間の余白
        center: true, // メイン画像をセンタリング
      },
      480: {
        items: 1,
        edgePadding: 96, // ちらっと見える幅
        gutter: 8, // 画像同士の間の余白
        center: true, // メイン画像をセンタリング
      },
      896: {
        items: 1,
        edgePadding: 180, // ちらっと見える幅
        gutter: 12, // 画像同士の間の余白
        center: true, // メイン画像をセンタリング
      },
      1024: {
        items: 1,
        edgePadding: 300, // ちらっと見える幅
        gutter: 16, // 画像同士の間の余白
        center: true, // メイン画像をセンタリング
      },
      1440: {
        items: 1,
        edgePadding: 400, // ちらっと見える幅
        gutter: 16, // 画像同士の間の余白
        center: true, // メイン画像をセンタリング
      },
    },
  });
})();
