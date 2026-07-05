const startBtn = document.getElementById("startBtn");
const nameInput = document.getElementById("nameInput");
const statusEl = document.getElementById("status");
const music = document.getElementById("music");

// اسم مورد نیاز برای ورود
const requiredName = "صالح";

startBtn.addEventListener("click", () => {
  const userName = nameInput.value.trim().toLowerCase();

  if (userName === "") {
    statusEl.textContent = "لطفاً اسم را وارد کن";
    return;
  }

  if (userName === requiredName.toLowerCase()) {
    statusEl.textContent = "ورود موفق! خوش آمدی صالح عزیز...";
    playWelcomeEffects();
  } else {
    statusEl.textContent = "اسم اشتباهه!";
  }
});

function playWelcomeEffects() {
  music.play();

  document.body.style.background = "linear-gradient(45deg, #000, #0ff, #00f)";
  document.body.style.transition = "1s";

  statusEl.style.color = "#0ff";
  statusEl.style.fontSize = "28px";

  const avatar = document.querySelector(".avatar");
  avatar.style.animation = "glow 0.5s infinite alternate";
}
