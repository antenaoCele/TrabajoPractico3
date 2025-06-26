const texto = document.getElementById("texto")
const boton = document.getElementById("boton")
const ul = document.getElementById("ul")
const error = document.getElementById("error")
const formulario = document.getElementById("formulario")

const arrayFrutas = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nuevoArray = arrayFrutas.filter(function (fruta) {
        return fruta.includes(texto.value.toLowerCase());
    })


    ul.innerHTML = "";

    if (texto.value.length === 0) {
        error.innerHTML = "Debes escribir un texto"
        return;

    } else if (nuevoArray.length === 0) {
        error.innerHTML = "No se encontro este texto en el arreglo"

    } else {
        error.innerHTML = "";
        nuevoArray.forEach((elemento) => {
            const li = document.createElement("li");
            li.innerHTML = elemento;
            ul.appendChild(li);
        })
    }



})

