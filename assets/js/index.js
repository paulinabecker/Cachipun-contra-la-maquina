JS
//Genera un número aleatorio entre un rango de enteros
function jugar(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var jugadaHumano;
var jugadaRobot = jugar(0,2);

jugadaHumano = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Elegiste " + opciones[jugadaHumano]);
alert("El robot eligió " + opciones[jugadaRobot]);

if(jugadaHumano == piedra)
{
    if(jugadaRobot == piedra)
    {
        alert("¡Esto es un empate!");
    }
    else if(jugadaRobot == papel)
    {
        alert("¡Lo siento, el robot te ha ganado!");
    }
    else if(jugadaRobot == tijera)
    {
        alert("¡Felicidades, le has ganado a un robot!");
    }
}
else if(jugadaHumano == papel)
{
    if(jugadaRobot == piedra)
    {
        alert("¡Felicidades, le has ganado a un robot!");
    }
    else if(jugadaRobot == papel)
    {
        alert("¡Esto es un empate!");
    }
    else if(jugadaRobot == tijera)
    {
        alert("¡Lo siento, el robot te ha ganado!");
    }
}
else if(jugadaHumano == tijera)
{
    if(jugadaRobot == piedra)
    {
        alert("¡Lo siento, el robot te ha ganado!");
    }
    else if(jugadaRobot == papel)
    {
        alert("¡Felicidades, le has ganado a un robot!");
    }
    else if(jugadaRobot == tijera)
    {
        alert("¡Esto es un empate!");
    }
}
else
{
    alert("La opción ingresada no existe. Inténtalo nuevamente");
}