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
        edgePadding: 133, // ちらっと見える幅
        gutter: 8, // 画像同士の間の余白
        center: true, // メイン画像をセンタリング
      },
      768: {
        items: 1,
        edgePadding: 256, // ちらっと見える幅
        gutter: 12, // 画像同士の間の余白
        center: true, // メイン画像をセンタリング
      },
      1000: {
        items: 1,
        edgePadding: 333, // ちらっと見える幅
        gutter: 16, // 画像同士の間の余白
        center: true, // メイン画像をセンタリング
      },
      1200: {
        items: 1,
        edgePadding: 400, // ちらっと見える幅
        gutter: 16, // 画像同士の間の余白
        center: true, // メイン画像をセンタリング
      },
    },
  });
})();
