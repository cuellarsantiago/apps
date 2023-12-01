
const { generarNumeroAleatorio, verificarAdivinanza, obtenerNumeroUsuario } = require("./adivinanza");

const juegoAdivinanza = () => {
  const numeroSecreto = generarNumeroAleatorio();
  console.log(numeroSecreto);
  let numeroAdivinado = 0;
  console.log("¡Bienvenido a Adivina el número secreto!");
  console.log("Intenta adivinar el número del 1 al 100.\n");
  while (numeroAdivinado !== numeroSecreto) {
    numeroAdivinado = obtenerNumeroUsuario();
    verificarAdivinanza(numeroSecreto, numeroAdivinado);
  }
};
juegoAdivinanza();
