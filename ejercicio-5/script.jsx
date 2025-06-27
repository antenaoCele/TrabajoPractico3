
const { useState } = React;

function App() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operacionSeleccionada, setOperacionSeleccionada] = useState("sumar");
    const [resultado, setResultado] = useState(null);

    function calcular(e) {
        e.preventDefault();

        let res = 0;
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        switch (operacionSeleccionada) {
            case "sumar":
                res = n1 + n2;
                break;
            case "restar":
                res = n1 - n2;
                break;
            case "multiplicar":
                res = n1 * n2;
                break;
            case "dividir":
                res = n1 / n2;
                break;
            default:
                res = "Operación no permitida.";
                break;
        }

        setResultado(res);
    }

    return (
        <div>
            <h1>Calculadora</h1>
            <form onSubmit={calcular}>
                <label>Primer número:</label>
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
                <br /><br />

                <label>Segundo número:</label>
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
                <br /><br />

                <label>Operación:</label>
                <select
                    value={operacionSeleccionada}
                    onChange={(e) => setOperacionSeleccionada(e.target.value)}
                >
                    <option value="sumar">Sumar</option>
                    <option value="restar">Restar</option>
                    <option value="multiplicar">Multiplicar</option>
                    <option value="dividir">Dividir</option>
                </select>
                <br /><br />

                <button type="submit" disabled={operacionSeleccionada === "dividir" && num2 == 0}>
                    Calcular
                </button>
            </form>


            <h2 id="resultado">Resultado: {resultado}</h2>

        </div>
    );
}
