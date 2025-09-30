// Matrix Rain Effect
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Make canvas full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Characters to use
const letters = "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lettersArray = letters.split("");

// Font size
const fontSize = 16;
const columns = canvas.width / fontSize;

// Drops (one per column)
const drops = [];
for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}

// Draw function
function draw() {
  // Fade effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff99"; // neon green
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = lettersArray[Math.floor(Math.random() * lettersArray.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset drop randomly after it reaches bottom
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 35);

// Adjust canvas on resize
window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
