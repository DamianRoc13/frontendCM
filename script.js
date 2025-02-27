document.getElementById("consultarBtn").addEventListener("click", function() {
    let tipoConsulta = document.getElementById("tipoConsulta").value;

    fetch(`http://127.0.0.1:5000/realizar-consulta?tipoConsulta=${tipoConsulta}`)
        .then(response => response.json())
        .then(data => {
            let resultadoDiv = document.getElementById("resultado");
            let mensaje = document.getElementById("mensaje");
            let rutaArchivo = document.getElementById("rutaArchivo");

            if (data.success) {
                mensaje.innerText = "✅ Consulta realizada correctamente!";
                rutaArchivo.innerText = `📂 Archivo guardado en: ${data.rutaArchivo}`;
            } else {
                mensaje.innerText = "❌ Error en la consulta: " + data.error;
                rutaArchivo.innerText = "";
            }

            resultadoDiv.classList.remove("hidden");
        })
        .catch(error => {
            alert("Error en la conexión con el servidor.");
            console.error("Error:", error);
        });
});
