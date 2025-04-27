const multipliers = ["1.85x", "2.30x", "3.10x", "5.65x", "1.90x", "8.50x", "4.20x", "12.75x", "20.10x", "7.30x"];

function createMultiplier(multiplier) {
  const el = document.createElement('div');
  el.className = 'multiplier';
  el.style.top = Math.random() * 80 + 'vh';
  el.style.left = '100%';
  el.innerText = multiplier;
  document.getElementById('multiplier-container').appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 10000);
}

setInterval(() => {
  const randomMultiplier = multipliers[Math.floor(Math.random() * multipliers.length)];
  createMultiplier(randomMultiplier);
}, 2000);

// Show predictions
const prediction = document.getElementById('prediction');
let currentPrediction = 0;
const predictionTimes = [
  "5 PM - 10x Boost",
  "6 PM - 30x Flight",
  "7 PM - 100x Sky Rocket!"
];

setInterval(() => {
  prediction.innerText = predictionTimes[currentPrediction];
  currentPrediction = (currentPrediction + 1) % predictionTimes.length;
}, 5000);

// Animate calculating...
const dots = document.getElementById('dots');
let dotCount = 0;
setInterval(() => {
  dotCount = (dotCount + 1) % 4;
  dots.innerText = '.'.repeat(dotCount);
}, 500);
