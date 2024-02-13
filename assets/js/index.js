let cantJugadas = prompt("¿Cuántas veces quieres jugar?");

let ptosHumano = 0;
let ptosRobot = 0;

for (let i = 0; i < cantJugadas; i++) {
  let jugadaHumano = parseInt(
    prompt("Elige tu jugada:\nPiedra: 0\nPapel: 1\nTijera: 2", 0)
  );
  let jugadaRobot = Math.floor(Math.random() * 3);

  switch (jugadaHumano) {
    case 0:
      if (jugadaRobot === 0) {
        alert("El robot eligió piedra. ¡Esto es un empate!.");
      } else if (jugadaRobot === 1) {
        alert("El robot eligió papel. ¡Lo siento, el robot te ha ganado!.");
        ptosRobot++;
      } else if (jugadaRobot === 2) {
        alert("El robot eligió tijeras. ¡Felicidades, le has ganado al robot!");
        ptosHumano++;
      }
      break;

    case 1:
      if (jugadaRobot === 0) {
        alert("El robot eligió piedra. ¡Felicidades, le has ganado al robot!");
        ptosHumano++;
      } else if (jugadaRobot === 1) {
        alert("El robot eligió papel. ¡Esto es un empate!");
      } else if (jugadaRobot === 2) {
        alert("El robot eligió tijeras. ¡Lo siento, el robot te ha ganado!");
        ptosRobot++;
      }
      break;

    case 2:
      if (jugadaRobot === 0) {
        alert("El robot eligió piedra. ¡Lo siento, el robot te ha ganado!");
        ptosRobot++;
      } else if (jugadaRobot === 1) {
        alert("El robot eligió papel. ¡Felicidades, le has ganado al robot!");
        puntajeUsuario++;
      } else if (jugadaRobot === 2) {
        alert("El robot eligió tijeras. ¡Esto es un empate!");
      }
      break;

    default:
      alert("La opción ingresada no existe. Inténtalo nuevamente");
      break;
  }
}

if (ptosHumano > ptosRobot) {
  alert("¡Felicitaciones, has ganado la partida!.");
} else if (ptosRobot > ptosHumano) {
  alert("¡Lo siento!, el robot ha ganado la partida.");
} else if (ptosRobot == ptosHumano) {
  alert("¡Han empatado la partida!.");
}

