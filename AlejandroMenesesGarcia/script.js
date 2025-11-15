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

//--------------------------------------------------------------------------------//
/* 7. Necesito calcular el promedio de notas de un estudiante. 
Pide las 3 notas (de 0 a 5) y muestra el promedio final.*/

let notaUno = parseFloat(prompt("Ingrese la primera nota (de 0 a 5)"));
let notaDos = parseFloat(prompt("Ingrese la segunda nota (de 0 a 5)"));
let notaTres = parseFloat(prompt("Ingrese la tercera nota (de 0 a 5)"));

let promedioFinal = (notaUno + notaDos + notaTres) / 3;
console.log ("El promedio final del estudiante es: " + promedioFinal);
alert ("El promedio final del estudiante es: " + promedioFinal);
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
/* 8. Debo calcular el salario semanal de un empleado. 
Pide el número de horas trabajadas en la semana y el precio que se paga por hora. 
Muestra el salario total.*/

let horasTrabajadasSemana = parseFloat(prompt("Ingrese el número de horas trabajadas en la semana"));
let valorHora = parseFloat(prompt("Ingrese el precio que se paga por hora"));

let salarioTotal = horasTrabajadasSemana * valorHora;
console.log ("El salario total es de: $ " + salarioTotal);
alert ("El salario total es de: $ " + salarioTotal);

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
/* 9. Estoy planeando un viaje y el mapa está en millas. 
Pide una distancia en millas y muéstrala convertida a kilómetros. 
(1 milla = 1.60934 km).*/

let distanciaMillas = parseFloat(prompt("Ingrese la distancia en Millas"));
let kilometros = distanciaMillas * 1.60934;

console.log ("La distancia en Kilómetros es de: " + kilometros + "Km");
alert ("La distancia en Kilómetros es de: " + kilometros + "Km");
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
/* 10. Un sistema registra el tiempo de trabajo en minutos. 
Pide un total de minutos y calcula cuántas horas y minutos representa 
(ej. 130 minutos = 2 horas y 10 minutos).*/

let totalMinutos = parseFloat(prompt("Ingrese el total de minutos"));
let horas = parseInt(totalMinutos / 60);
let minutosRestantes = totalMinutos % 60;
console.log ("Equivale a: " + horas + " horas y " + minutosRestantes + " minutos");
alert ("Equivale a: " + horas + " horas y " + minutosRestantes + " minutos");
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
/* 11. Necesito calcular el precio final de un producto que tiene descuento. 
Pide el precio original y el porcentaje de descuento 
(ej. 20 para 20%) y muestra el precio final a pagar.*/

let precioOriginal = parseFloat(prompt("Ingrese el precio original del producto"));
let descuento = parseFloat(prompt("Ingrese el valor del descuento que tiene el producto"));

let precioFinal = precioOriginal - (precioOriginal * descuento / 100);
console.log ("El precio final que debe pagar por el producto es de " + precioFinal);
alert ("El precio final que debe pagar por el producto es de " + precioFinal);
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
/* 12. Se debe calcular el IVA (19%) de un producto. 
Pide el precio base (sin IVA) del producto y calcula cuánto es el IVA 
y cuál es el precio total.*/
let precioBase = parseFloat(prompt("Ingrese el precio base del producto"));
let iva = precioBase * 0.19;
let precioTotal = precioBase + iva;

console.log ("El IVA del producto es de: " + iva);
console.log ("El precio total del producto es de: " + precioTotal);
alert ("El IVA del producto es de: " + iva);
alert ("El precio total del producto es de: " + precioTotal);
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
/* 13. Un cliente quiere saber cuánto capital final tendrá en una inversión. 
Pide el capital inicial, la tasa de interés (anual, ej. 5 para 5%) 
y el número de años. Calcula el interés simple (Capital * (Tasa/100) * Años) y el total.*/
let capitalInicial = parseFloat (prompt("Ingrese el capital inicial para su inversión"));
let tasaInteres = parseFloat (prompt("Ingrese la tasa de interes anual (ej. 5 para 5%)"));
let numeroAnhos = parseFloat (prompt("Ingrese el numero de años en los que estara invirtiendo"));

let interesSimple = (capitalInicial * (tasaInteres / 100) * numeroAnhos);
let capitalFinal = capitalInicial + interesSimple;

console.log ("El capital final que tendra su inversion es de: " + capitalFinal);
alert ("El capital final que tendra su inversion es de: " + capitalFinal);
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
/* 14. Necesito calcular el área de un triángulo. 
Pide la base y la altura del triángulo y muestra el resultado.*/
let baseTriangulo = parseFloat (prompt("Ingrese la base del triangulo"));
let alturaTriangulo = parseFloat (prompt("Ingrese la altura del triangulo"));

let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log ("El area del trinagulo es de: " + areaTriangulo);
alert ("El area del trinagulo es de: " + areaTriangulo);
//--------------------------------------------------------------------------------//
