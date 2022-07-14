/*let nombre = "Erich";
let apellido = "Vivas"
console.log (nombre + " " + apellido);

let letras1erapellido = "VI";
let letras2doapellido = "SA";
let aniodenacimiento = "94";
let mesdenacimiento = "10";
let diadenacimiento = "01";
let sexo = "H";
let ciudadnacimiento = "DF";
let claverfc = "FNA";
let restocurp = "VND07";
console.log (letras1erapellido + letras2doapellido + aniodenacimiento +  mesdenacimiento + diadenacimiento + sexo + ciudadnacimiento + claverfc + restocurp)

let dinamica = "12";*/

/* Condición verdadera

if (true) {
    console.log ("Vas a ver éste mensaje");
}

// Condición falsa

if (false) {
    console.log ("No vas a ver éste mensaje");
}

*/

/* Condición verdadera II 

let valor2 = true
let valor = false 

if (valor2) {
    console.log ("Vas a ver éste mensaje");
}

if (valor) {
    console.log ("No vas a ver éste mensaje");
} 
*/

// Operador de equivalencia comparamos sí unNumero es igual a 5 ó 6

/*let unNumero = 6
console.log (unNumero%2);

if ((unNumero%2) == 0) {
    console.log ("Barcelona gana");
}

if ((unNumero%3) == 0) {
    console.log ("Bacelina pierde");
}
*/

/* Condiconales if + else

let unColor = "Rojo"
console.log ("Color:" + unColor);

if (unColor == "Rojo") {
    console.log ("el color es Rojo");
}else{
    console.log ("el color no es Rojo");
}

if (unColor != "Rojo"){
    console.log ("el color no es Rojo");
}else{
    console.log ("el color es Rojo");
}

*/

/* Utilizar propiedades prompt para ingresar valores

let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
    alert("1- No ingesaste tu nombre de Usuario!");
} else {
    alert("1- El nombre de usuario ingresado es: " + nombreUsuario);
}

if (nombreUsuario != "") {
    alert("2- El usuario ingresado es: " + nombreUsuario);
} else {
    alert("2- No ingreaste tu nombre de Usuario")
}
*/

/* Propiedades mayor o menor que

let precio = 21;

if (precio <  20) {
    alert("El precio es menor o igual que 20");
} else if (precio < 50) {
    alert("El precio es menor que 50");
} else if (precio < 100) {
    alert("El precio es menor que 100");
} else {
    alert ("El precio es igual o mayor que 100");
}
*/

/*let temperatura = 49;

if (temperatura <= 0) {
    alert("El clima esta congelante. Por favor usar un abrigo");
} else if (temperatura <= 10) {
    alert("El clima está frío!");
} else if (temperatura <= 20) {
    alert ("El clima está excelente!");
} else if (temperatura <= 30) {
    alert ("El clima está caluroso!");
} else if (temperatura <= 40) {
    alert ("El clima muy caliente. Por favor, colocarse bloqueador y salir con una botella de agua!");
} else {
    alert ("NO SALGAS DE TU CASA!");   
}
*/

/*Operadores Booleanos

let numero = 6;
let esMayor5 = (numero > 5);
console.log(typeof numero);
console.log(numero);
console.log(typeof esMayor5);
console.log(esMayor5);

if (esMayor5) {
    alert("Es Boolean True!");
} else {
    alert("No se cumplió la condición");
}
*/

/* Condiciones compuesta con ||

let nombreIngresado = prompt("Ingresar nombre");

if((nombreIngresado == "ANA") || (nombreIngresado =="ana")){
    alert("El nombre ingresado es Ana");
}else{
    alert("El nombre ingresado NO ES Ana");
}
*/

/*
 let nombreIngresado = prompt("Ingresar nombre").toLowerCase();

if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado == "ema"))){
    alert("Hola Ema");
}else{
    alert("Error: Ingresar nombre valido");
}

*/

for (let i = 0; i < 10; i++){
    alert(i);
}



