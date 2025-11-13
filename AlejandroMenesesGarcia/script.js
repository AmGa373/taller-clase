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

let anchoPared = parseFloat(prompt("Ingrese el ancho de la pared"));
let altoPared = parseFloat(prompt("Ingrese el alto de la pared"));

let area = anchoPared * altoPared;
console.log ("El area es: " + area + " m2");
alert ("El area es: " + area + " m2");
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
/* 3. Debo calcular cuánto perímetro tiene un potrero rectangular. 
Pide el largo y el ancho del potrero y muestra el resultado.*/

let largoPotrero = parseFloat(prompt("Ingrese el largo del potrero"));
let anchoPotrero = parseFloat(prompt("Ingrese el ancho del potrero"));

let perimetro = 2 * (anchoPotrero + largoPotrero);
console.log ("El potrero tiene un perimetro de: " + perimetro + " metros");
alert ("El potrero tiene un perimetro de: " + perimetro + " metros");
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
/* 4. Mi app del clima solo muestra la temperatura en grados Fahrenheit. 
Pide la temperatura en °F y conviértela a grados Celsius.*/

let fahrenheit = parseFloat(prompt("Ingrese la temperatura en °F"));
let celsius = (fahrenheit - 32) * 5/9;
console.log ("La temperatura en grados celsius es: " + celsius + " C°");
alert ("La temperatura en grados celsius es: " + celsius + " C°");
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
/* 5. Necesito saber la edad de un usuario. 
Pide su año de nacimiento y, asumiendo que el año actual es 2024, 
calcula cuántos años tiene.*/

let annoNacimiento = parseFloat(prompt("Ingrese su fecha de Nacimiento"));
let annoActual = 2024;

let edad = annoActual - annoNacimiento;
console.log ("La edad del usuario es: " + edad + " años");
alert ("La edad del usuario es: " + edad + " años");
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
/* 6. Quiero un script que salude formalmente a un cliente. 
Pide el nombre y el apellido del usuario y muestra en consola el mensaje: 
"Bienvenido, [Nombre Completo]".*/
let nombre = prompt("Ingrese el nombre del usuario");
let apellido = prompt("Ingresse el apellido del usuario");

console.log ("Bienvenido, " + nombre  + " " + apellido);
alert ("Bienvenido, " + nombre + " " + apellido);
//--------------------------------------------------------------------------------//
