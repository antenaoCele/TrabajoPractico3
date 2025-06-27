function App() {

    const [izquierdo, setIzquierdo] = React.useState(false);
    const [derecho, setDerecho] = React.useState(true);


    function cambiarEstado() {
        setIzquierdo(!izquierdo)
        setDerecho(!derecho)
    }


    return (
        <>
            <button onClick={cambiarEstado} disabled={izquierdo}>Izquierdo</button>
            <button onClick={cambiarEstado} disabled={derecho}>Derecho</button>
        </>
    )
}