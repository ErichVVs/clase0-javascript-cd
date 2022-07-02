console.log("Página cargada!")
let logo = document.getElementById("logo")
logo.width = 200;
let encabezado = document.getElementById("encabezado")
encabezado.innerText = "Nuestros productos";

const productos = [{id:1, nombre:"Doble Cuarto de Libra con Queso", imagen:"kqXt7Sq2.png"}, {id:2, nombre:"Big Mac", imagen:"kqX3vl0y.png"}, {id:3, nombre:"McNífica", imagen:"kqXXaUUP.png"}, {id:4, nombre:"McNuggets 6 unidades", imagen:"kcXp9cg0.png"}, {id:5, nombre:"McFlurry Oreo", imagen:"kcX83hlT.png"}, {id:6, nombre:"Papas Grandes", imagen:"kcXXQgnB.png"}];
let contenido = "<table>";
contenido += "<tr>";

for (let producto of productos) {
    contenido +=  "<td><img src='images/" + producto.imagen + "' width=100'><br>" + producto.nombre + "</td>";
}

contenido += "</tr>";
contenido += "</table>";
document.getElementById("productos").innerHTML = contenido;

console.log("Fin del programa")