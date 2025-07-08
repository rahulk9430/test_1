const hearts = ["💖","❤️","💕","💗","💘"];

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
heart.style.left = Math.floor(Math.random() * 80 + 10) + "%";
  heart.style.fontSize = Math.random() * 10 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 300);

// 🎈 Create balloons on page load (only once)
window.addEventListener("DOMContentLoaded", () => {
  const balloonContainer = document.getElementById("balloon-container");
  for (let i = 0; i < 5; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 80 + 10 + "vw";
    balloonContainer.appendChild(balloon);
    setTimeout(() => balloon.remove(), 7000);
  }
});
