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

let ancho_pared = parseFloat(prompt("Ingrese el ancho de la pared"));
let alto_pared = parseFloat(prompt("Ingrese el alto de la pared"));

let area = ancho_area * alto_area;
console.log ("El area es: " + area + " m2");
alert ("El area es: " + area + " m2");
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
/* 3. Debo calcular cuánto perímetro tiene un potrero rectangular. 
Pide el largo y el ancho del potrero y muestra el resultado.*/

let largo_potrero = parseFloat(prompt("Ingrese el largo del potrero"));
let ancho_potrero = parseFloat(prompt("Ingrese el ancho del potrero"));

let perimetro = 2 * (ancho_potrero + largo_potrero);
console.log ("El potrero tiene un perimetro de: " + perimetro + " metros");
alert ("El potrero tiene un perimetro de: " + perimetro + " metros");
//--------------------------------------------------------------------------------//