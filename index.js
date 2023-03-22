var image = document.getElementById("image");
var imageArray = ["https://i.imgur.com/VMBLGjR.jpg", "https://i.imgur.com/FSNqyKZ.png", "https://i.imgur.com/yUpZk3W.png", "https://i.imgur.com/XyPN5B3.png", "https://i.imgur.com/ZD02dK2.png", "https://i.imgur.com/Thk1W5g.png"];
var imageIndex = 0;
var intervalId;

function changeImage() {
  image.src = imageArray[imageIndex];
  imageIndex++;
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
}

function startInterval() {
  changeImage(); // 最初の画像の表示
  intervalId = setInterval(changeImage, 5000); // 自動で画像を切り替える
}

function stopInterval() {
  clearInterval(intervalId);
  image.src = imageArray[0]; // 最初の画像に戻す
  imageIndex = 0;
}
startInterval(); // ページを読み込んだ直後に画像の自動切り替えを開始する
// ボタンをクリックすると画像の自動切り替えを停止して最初の画像に戻る
document.getElementById("stopButton").addEventListener("click", function () {
  stopInterval();
});
$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });
});
//メニュー内を閉じておく
$(function () {
  $('.globalMenuSp a[href]').click(function () {
    $('.globalMenuSp').removeClass('active');
    $('.hamburger').removeClass('active');
  });
});
