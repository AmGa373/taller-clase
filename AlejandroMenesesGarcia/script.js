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