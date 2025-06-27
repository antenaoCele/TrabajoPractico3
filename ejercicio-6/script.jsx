const { useState } = React;

function App() {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [imc, setImc] = useState(null);
    const [mensaje, setMensaje] = useState("");
    const [color, setColor] = useState("");

    const validarIMC = (e) => {
        e.preventDefault();

        const p = parseFloat(peso);
        const a = parseFloat(altura) / 100;

        if (!p || !a || a === 0) {
            setMensaje("Por favor, ingrese valores válidos.");
            setColor("gray");
            setImc(null);
            return;
        }

        const calculo = p / (a * a);
        setImc(calculo.toFixed(2));

        if (calculo < 18.5) {
            setMensaje("Nivel bajo de IMC");
            setColor("yellow");
        } else if (calculo >= 18.5 && calculo <= 24.9) {
            setMensaje("Nivel normal de IMC");
            setColor("green");
        } else if (calculo >= 25 && calculo <= 29.9) {
            setMensaje("Nivel de sobrepeso");
            setColor("orange");
        } else {
            setMensaje("Nivel de obesidad");
            setColor("red");
        }
    };

    return (
        <div>
            <h1>Calculadora de IMC</h1>
            <form onSubmit={validarIMC}>
                <label>Peso (kg): </label>
                <input
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                />
                <br /><br />
                <label>Altura (cm): </label>
                <input
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                />
                <br /><br />
                <button type="submit">Calcular IMC</button>
            </form>


            <div>
                <h2>Tu IMC es: {imc}</h2>
                <p style={{ color }}>{mensaje}</p>
            </div>

        </div>
    );
}
