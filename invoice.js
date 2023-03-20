const countdown = document.getElementById('countdown');

// カウントダウンの終了時刻を設定（24時間00分02秒後 => ロードの所要時間2秒）
const countdownDate = new Date(Date.now() + 24 * 60 * 60 * 1000 + 00 * 60 * 1000 + 02 * 1000);

// カウントダウンの更新処理
function updateCountdown() {
  const now = new Date();
  const distance = countdownDate - now;

  // 残り時間を計算
  const hours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // 残り時間を表示
  document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

  // カウントダウンが終了したら、「お客様の個人情報を記録いたしました。後日、ご自宅に訪問させていただきます。」と表示
  if (distance <= 0) {
    clearInterval(intervalId);
    countdown.textContent = "お客様の個人情報を記録いたしました。後日、ご自宅に訪問させていただきます。";
  }
}

// カウントダウンを1秒ごとに更新
const intervalId = setInterval(updateCountdown, 1000);

function updateProgress() {
    remainingTime = targetTime - Date.now();
  
    // プログレスバーを更新
    var progressBar = document.getElementById("progressbar");
    var progressPercent = (initialTime - remainingTime) / initialTime * 100;
    progressBar.style.width = progressPercent + "%";
  
    // 残り時間を表示
    var remainingSeconds = Math.floor(remainingTime / 1000);
    var hours = Math.floor(remainingSeconds / 3600);
    var minutes = Math.floor((remainingSeconds - hours * 3600) / 60);
    var seconds = remainingSeconds - hours * 3600 - minutes * 60;
    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
  
    // タイマーが0になったら終了
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      document.getElementById("timer").innerHTML = "0:0:0";
      progressBar.style.width = "0%";
    }
  }

  const progressBar = document.getElementById('progress');

function startCountdown() {
  let timeLeft = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  const timerId = setInterval(() => {
    timeLeft -= 1000;
    progressBar.style.width = `${(1 - timeLeft / (24 * 60 * 60 * 1000)) * 100}%`;

    if (timeLeft < 0) {
      clearInterval(timerId);
      progressBar.classList.add('yellow');
    }
  }, 1000);
}

startCountdown();