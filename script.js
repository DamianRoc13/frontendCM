document.getElementById("consultarBtn").addEventListener("click", function() {
    document.getElementById("loadingIcon").classList.remove("hidden");

    document.getElementById("resultado").classList.add("hidden");
    let tipoConsulta = document.getElementById("tipoConsulta").value;

    fetch(`http://127.0.0.1:5000/realizar-consulta?tipoConsulta=${tipoConsulta}`)
        .then(response => response.json())
        .then(data => {
            let resultadoDiv = document.getElementById("resultado");
            let mensaje = document.getElementById("mensaje");
            let rutaArchivo = document.getElementById("rutaArchivo");

            if (data.success) {
                mensaje.innerText = "✅ Consulta realizada correctamente!";
                rutaArchivo.innerText = `📂 ${data.rutaArchivo}`;
            } else {
                mensaje.innerText = "❌ Error en la consulta: " + data.error;
                rutaArchivo.innerText = "";
            }

            resultadoDiv.classList.remove("hidden");
            document.getElementById("loadingIcon").classList.add("hidden");
        })
        .catch(error => {
            alert("Error en la conexión con el servidor.");
            console.error("Error:", error);
            document.getElementById("loadingIcon").classList.add("hidden");
        });
});

document.getElementById("unificarExcelBtn").addEventListener("click", function() {
    document.getElementById("loadingIcon").classList.remove("hidden");

    document.getElementById("resultado").classList.add("hidden");

    fetch(`http://127.0.0.1:5000/realizar-consulta?tipoConsulta=UNIFICAR-EXCEL`)
        .then(response => response.json())
        .then(data => {
            let resultadoDiv = document.getElementById("resultado");
            let mensaje = document.getElementById("mensaje");
            let rutaArchivo = document.getElementById("rutaArchivo");

            if (data.success) {
                mensaje.innerText = "✅ Archivos unificados correctamente!";
                rutaArchivo.innerText = `📂 ${data.rutaArchivo}`;
            } else {
                mensaje.innerText = "❌ Error en la unificación: " + data.error;
                rutaArchivo.innerText = "";
            }

            resultadoDiv.classList.remove("hidden");
            document.getElementById("loadingIcon").classList.add("hidden");
        })
        .catch(error => {
            alert("Error en la conexión con el servidor.");
            console.error("Error:", error);
            document.getElementById("loadingIcon").classList.add("hidden");
        });
});
