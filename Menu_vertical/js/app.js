/* Métodos para seleccionar elementos del Dom (Nodos del tipo 1)
document.getElementById() //Node del tipo elemento, que coincida con el id indicado
document.getElementsByTagName() //Colección de elementos HTML
document.getElementsByClassName() //Colección de elementos HTML
document.querySelector() // Primer elemengo que cumpla la condición
document.querySelectorAll() // Todos los elementos que cumplan la condición */

/*var titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.firstChild);

var linkList = document.getElementsByTagName("a");
console.log(linkList);
console.log(linkList[0]);
console.log(linkList[0].firstChild);

var lista = document.getElementsByClassName("lista");
console.log(lista);
console.log(lista[4]);
console.log(lista[4].firstElementChild);
console.log(lista[4].firstElementChild.firstChild); */

var titulo = document.querySelector("#titulo");
console.log(titulo);
console.log(titulo.firstChild);

var navbar = document.querySelector("#navbar");
console.log(navbar);

var lista = document.querySelector(".lista");
console.log(lista);

var itemLista = document.querySelectorAll(".lista");
console.log(itemLista);