
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
let cantidad;
let precio;
let descuento;
let compra;
let pagar;

precio = parseFloat(prompt("Ingresar precio"));
cantidad = parseFloat(prompt("Ingresar cantidad"));

compra =  precio*cantidad;
descuento = compra*0.15;
pagar = compra-descuento;

console.log("El descuento es: " + descuento);

console.log("El total a pagar es: " + pagar)

/*arrays*/
class Producto{
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaGanancia() {
        this.precio = this.precio * 1.40;
    }
}

//Declaro un array de productos para almacenar objetos

const productos = [];
productos.push(new Producto("Almohadon Breda","1020"));
productos.push(new Producto("Almohadon Vigo","900"));
productos.push(new Producto("Almohadon Fane","1100"));

//For para modificar a todos
for (const producto of productos) 
{
    producto.sumaGanancia();
}

console.log(productos[0]);
console.log(productos[1]);
console.log(productos[2]);