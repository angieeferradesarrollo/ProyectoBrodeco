
let primerNumero = prompt ("Dia de nacimiento");
let segundoNumero = prompt ("Mes de nacimiento");
let tercerNumero = prompt ("Anio de nacimiento")

let dia = parseInt(primerNumero);
let mes = parseInt(segundoNumero);
let anio = parseInt(tercerNumero);


/*FUNCIONES*/

// function sumar (a, b) {
//    let suma = a + b;
 //   console.log("El resultado de " + a + " + " + b + " es : " + suma);
// }

// sumar(5 , 3);
// sumar(8, 9);

/*funciones flecha*/ 

const saludar = nombre => {console.log ("Hola como estas?" + nombre)}



/*bucle while*/
var contador = 0
while(contador<10){
    contador++;
    console.log(contador)
}

/*calculamos el costo de un producto con un 15% de descuento en compras */
var cantidad;
var precio;
var descuento;
var compra;
var11 pagar;

precio = parseFloat(prompt("Ingresar precio"));
cantidad = parseFloat(prompt("Ingresar cantidad"));

compra =  precio*cantidad;
descuento = compra*0.15;
pagar = compra-descuento;

console.log("El descuento es: " + descuento);

console.log("El total a pagar es: " + pagar)
