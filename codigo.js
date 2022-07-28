
let primerNumero = prompt ("Dia de nacimiento");
let segundoNumero = prompt ("Mes de nacimiento");
let tercerNumero = prompt ("Anio de nacimiento")

let dia = parseInt(primerNumero);
let mes = parseInt(segundoNumero);
let anio = parseInt(tercerNumero);


/*FUNCIONES*/

function sumar (a, b) {
    var suma = a + b;
    console.log("El resultado de " + a + " + " + b + " es : " + suma);
}

sumar(5 , 3);
sumar(8, 9);

/*bucle while*/
var contador = 0
while(contador<50){
    contador++;
    console.log(contador)
}