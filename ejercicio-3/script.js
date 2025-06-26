ul = document.getElementById("ul");
boton = document.getElementById("boton");
mensajeError = document.getElementById("error")

const api = "https://jsonplaceholder.typicode.com/todos";

boton.addEventListener("click", async () => {

    const respuesta = await fetch(api);

    if (!respuesta.ok) {
        mensajeError.textContent = `Hubo un problema: ${respuesta.status} - ${respuesta.statusText}`;
        return;
    }

    const data = await respuesta.json();

    const tareasCompletadas = data.filter(elemento => {
        return elemento.completed
    })

    ul.innerHTML = "";

    tareasCompletadas.forEach(function (tarea, index) {
        const li = document.createElement("li");
        li.innerHTML = `Tarea ${index + 1}: ${tarea.title}`;
        ul.appendChild(li);
    })
})

