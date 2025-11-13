const opciones = ["piedra", "papel", "tijera"];
const playerImg = document.getElementById("playerImg");
const cpuImg = document.getElementById("cpuImg");
const resultMsg = document.getElementById("resultMsg");
const playerScoreEl = document.getElementById("playerScore");
const cpuScoreEl = document.getElementById("cpuScore");

let playerScore = 0;
let cpuScore = 0;
let intervalPlayer, intervalCPU;

// --- Animar imágenes del jugador y la CPU ---
function startAnimation() {
  intervalPlayer = setInterval(() => {
    const rand = Math.floor(Math.random() * 3);
    playerImg.src = `img/${opciones[rand]}.png`;
  }, 200);

  intervalCPU = setInterval(() => {
    const rand = Math.floor(Math.random() * 3);
    cpuImg.src = `img/${opciones[rand]}.png`;
  }, 100);
}

startAnimation();

// --- Evento cuando el jugador elige una opción ---
document.getElementById("btnPiedra").addEventListener("click", () => elegir("piedra"));
document.getElementById("btnPapel").addEventListener("click", () => elegir("papel"));
document.getElementById("btnTijera").addEventListener("click", () => elegir("tijera"));

function elegir(eleccionJugador) {
  clearInterval(intervalPlayer);
  clearInterval(intervalCPU);

  playerImg.src = `img/${eleccionJugador}.png`;

  const eleccionCPU = opciones[Math.floor(Math.random() * 3)];
  cpuImg.src = `img/${eleccionCPU}.png`;

  const resultado = comparar(eleccionJugador, eleccionCPU);
  mostrarResultado(resultado);

  setTimeout(() => {
    startAnimation();
  }, 2000);
}

function comparar(player, cpu) {
  if (player === cpu) return "empate";
  if (
    (player === "piedra" && cpu === "tijera") ||
    (player === "papel" && cpu === "piedra") ||
    (player === "tijera" && cpu === "papel")
  ) return "jugador";
  return "cpu";
}

function mostrarResultado(resultado) {
  if (resultado === "empate") {
    resultMsg.textContent = "😐 ¡Empate!";
  } else if (resultado === "jugador") {
    resultMsg.textContent = "🎉 ¡Ganaste!";
    playerScore++;
  } else {
    resultMsg.textContent = "💀 Gana la máquina";
    cpuScore++;
  }
  playerScoreEl.textContent = playerScore;
  cpuScoreEl.textContent = cpuScore;
}
