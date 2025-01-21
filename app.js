
let intentos = 1;
let numerosJugados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
        
        if(numeroUsuario === numeroSecreto){
            asignarTextoElemento("p",`Acertaste!!! en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
            document.getElementById("reiniciar").removeAttribute("disabled");       
            
        } else {
            if(numeroUsuario > numeroSecreto){
                asignarTextoElemento("p","El número secreto es menor!");
            } else {
                asignarTextoElemento("p","El número secreto es mayor!");            
            }
    }    
    limpiarCaja();
    intentos++; 

}
//limpiar caja funcion flecha
const limpiarCaja = () => document.querySelector("#valorUsuario").value = " "; 

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if(numerosJugados.length == numeroMaximo){
        asignarTextoElemento(`h1`,`FIN!!!`);
        asignarTextoElemento(`p`,`Ya se sortearon todos los números posibles F5 para volver a jugar.`);
    } else{
        if(numerosJugados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            numerosJugados.push(numeroGenerado);        
            return numeroGenerado;
        }    
    }   
}

function reiniciarJuego(){
    limpiarCaja();
    asignarTextoElemento("p",`Indica número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    console.log(numerosJugados);
    document.getElementById("reiniciar").setAttribute("disabled",true);
    intentos = 1;
}

//muestro por consola numero secreto 
let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);

asignarTextoElemento("h1","Juego del número secreto...");
asignarTextoElemento("p",`Indica número del 1 al ${numeroMaximo}`);

