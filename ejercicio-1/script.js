//acceso a los campos y botones del formulario
const numero = document.getElementById('numero')
const numero2 = document.getElementById('numero2')
const formulario = document.getElementById('formulario')
const calcular = document.getElementById('calcular')
const menu = document.getElementById('menu')
const resultado = document.getElementById('resultado')

//funcion para desactivar boton al dividir por 0
function desactivarBoton() {
    if (menu.value === "dividir" && numero2.value == 0) {
        calcular.disabled = true;
    } else {
        calcular.disabled = false;
    }
}

//conecto la funcion a los eventos del select y del input
menu.addEventListener('change', () => desactivarBoton());
numero2.addEventListener('input', () => desactivarBoton());


//evento submit del formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    //SUMA
    if (menu.value === "sumar") {
        const suma = parseFloat(numero.value) + parseFloat(numero2.value);
        return resultado.innerHTML = "El resultado de la suma es: " + suma;

    }

    //RESTA
    if (menu.value === "restar") {
        const resta = parseFloat(numero.value) - parseFloat(numero2.value);
        return resultado.innerHTML = "El resultado de la resta es: " + resta;

    }

    //MULTIPLICACION
    if (menu.value === "multiplicar") {
        const multiplicacion = parseFloat(numero.value) * parseFloat(numero2.value);
        return resultado.innerHTML = "El resultado de la multiplicacion es: " + multiplicacion;

    }

    //DIVISION
    if (menu.value === "dividir") {
        const division = parseFloat(numero.value) / parseFloat(numero2.value);
        return resultado.innerHTML = "El resultado de la division es: " + division;

    }

})

