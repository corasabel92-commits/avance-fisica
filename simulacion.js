let masa = 2;          // kg
let altura = 10;       // metros
let gravedad = 9.81;   // m/s²


let energiaInicial;

let velocidad = 0;

let posicion = 100;


let tiempo;



// Función para iniciar simulación

function iniciar(){


    // Calculamos energía potencial

    energiaInicial = masa * gravedad * altura;


    tiempo = setInterval(moverCoche,100);


}



// Movimiento del coche

function moverCoche(){


    // La energía potencial se transforma en cinética

    let energiaCinetica = energiaInicial * (posicion / 600);


    // Fórmula Ec = 1/2 mv²

    velocidad = Math.sqrt(
        (2 * energiaCinetica) / masa
    );



    // Avance del coche

    posicion += 5;



    document.getElementById("coche").style.left =
        posicion + "px";



    // Mostramos datos


    document.getElementById("velocidad").innerHTML =
        velocidad.toFixed(2) + " m/s";



    document.getElementById("ep").innerHTML =
        energiaInicial.toFixed(2) + " J";



    document.getElementById("ec").innerHTML =
        energiaCinetica.toFixed(2) + " J";



    // Cuando llega al final

    if(posicion > 520){

        clearInterval(tiempo);

    }


}



// Reiniciar simulación

function reiniciar(){


    clearInterval(tiempo);


    posicion = 80;


    velocidad = 0;



    document.getElementById("coche").style.left =
        posicion + "px";


    document.getElementById("velocidad").innerHTML =
        "0 m/s";


    document.getElementById("ep").innerHTML =
        "0 J";


    document.getElementById("ec").innerHTML =
        "0 J";


}
