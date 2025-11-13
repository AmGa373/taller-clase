//--------------------------------------------------------------------------------//
/* 1. Necesito un programa que calcule el total de mi compra en el supermercado. 
Pide el precio de tres productos diferentes y muestra el total a pagar. */

let productoUno = parseFloat(prompt("Ingrese el precio del primer producto"));
let productoDos = parseFloat(prompt("Ingrese el precio del segundo producto"));
let productoTres = parseFloat(prompt("Ingrese el precio del tercer producto"));

let total = productoUno + productoDos + productoTres;

console.log ("El total a pagar es: $" + total);
alert ("El total a pagar es: $" + total);
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
/* 2. Para un evento, necesito un banner. 
Pide el ancho y el alto de una pared (en metros) y calcula su área
para saber cuánto material comprar.*/

let ancho = parseFloat(prompt("Ingrese el ancho de la pared"));
let alto = parseFloat(prompt("Ingrese el alto de la pared"));

let area = ancho * alto;
console.log ("El area es: " + area + " m2");
alert ("El area es: " + area + " m2");
//--------------------------------------------------------------------------------//