


let numeroSecreto;
let intentos;
const maxIntentos = 10;

const entrada = document.getElementById("entrada");
const botonIntento = document.getElementById("botonIntento");
const mensaje = document.getElementById("mensaje");
const intentosRestantes = document.getElementById("intentosRestantes");
const reiniciarBtn = document.getElementById("reiniciar");

function iniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  intentos = 10;
  mensaje.textContent = "";
  intentosRestantes.textContent = `Intentos restantes: ${intentos}`;
  entrada.value = "";
  entrada.disabled = false;
  botonIntento.disabled = false;
  reiniciarBtn.classList.add("oculto");
}

function comprobarIntento() {
  const numero = parseInt(entrada.value);
  if (isNaN(numero) || numero < 1 || numero > 100) {
    mensaje.textContent = "Introduce un número válido entre 1 y 100.";
    mensaje.style.color = "#ff00ff";
    return;
  }

  intentos--;

  if (numero === numeroSecreto) {
    mensaje.textContent = `¡Correcto! 🎉 El número era ${numeroSecreto}.`;
    mensaje.style.color = "#00ff99";
    finDelJuego();
  } else if (intentos === 0) {
    mensaje.textContent = `❌ Sin intentos. El número era ${numeroSecreto}.`;
    mensaje.style.color = "#ff5555";
    finDelJuego();
  } else if (numero < numeroSecreto) {
    mensaje.textContent = "Demasiado bajo ⬇️";
    mensaje.style.color = "#00ffff";
  } else {
    mensaje.textContent = "Demasiado alto ⬆️";
    mensaje.style.color = "#ff00ff";
  }

  intentosRestantes.textContent = `Intentos restantes: ${intentos}`;
  entrada.value = "";
  entrada.focus();
}

function finDelJuego() {
  entrada.disabled = true;
  botonIntento.disabled = true;
  reiniciarBtn.classList.remove("oculto");
}

botonIntento.addEventListener("click", comprobarIntento);
reiniciarBtn.addEventListener("click", iniciarJuego);

iniciarJuego();
