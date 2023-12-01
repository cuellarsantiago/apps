const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100) + 1;
};
const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
  if (numeroAdivinado === numeroSecreto) {
    console.log("¡Felicitaciones! ¡Adivinaste el número secreto!");
  } else if (numeroAdivinado > numeroSecreto) {
    console.log("El número secreto es menor. ¡Sigue intentando!");
  } else {
    console.log("El número secreto es mayor. ¡Sigue intentando!");
  }
};


const readlineSync = require("readline-sync");

const obtenerNumeroUsuario = () => {
  return Number(readlineSync.question("Ingresa un número: "));
};

module.exports = {
  generarNumeroAleatorio,
  verificarAdivinanza,
  obtenerNumeroUsuario
};
