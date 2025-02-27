document.getElementById("consultarBtn").addEventListener("click", function() {
    document.getElementById("loadingIcon").classList.add("hidden");
    document.getElementById("resultado").classList.add("hidden");

    let tipoConsulta = document.getElementById("tipoConsulta").value;
    let mensaje = document.getElementById("mensaje");
    let rutaArchivo = document.getElementById("rutaArchivo");

    let resultadoDiv = document.getElementById("resultado");
    
    // Mostrar mensaje de "Realizando consulta..."
    if (tipoConsulta === "PLACA" || tipoConsulta === "RUC" || tipoConsulta === "CEDULA-EX" || tipoConsulta === "CEDULA-IN") {
        mensaje.innerText = "Realizando consulta...";
    }

    resultadoDiv.classList.remove("hidden");

    fetch(`http://127.0.0.1:5000/realizar-consulta?tipoConsulta=${tipoConsulta}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                mensaje.innerText = "✅ Consulta realizada correctamente!";
                rutaArchivo.innerText = `📂 ${data.rutaArchivo}`;
            } else {
                mensaje.innerText = "❌ Error en la consulta: " + data.error;
                rutaArchivo.innerText = "";
            }

            setTimeout(() => {  // Ocultar el mensaje de consulta después de mostrar los resultados
                mensaje.innerText = "";
            }, 3000); // Desaparece después de 3 segundos

            document.getElementById("loadingIcon").classList.add("hidden");
        })
        .catch(error => {
            alert("Error en la conexión con el servidor.");
            console.error("Error:", error);
            document.getElementById("loadingIcon").classList.add("hidden");
        });
});

document.getElementById("unificarExcelBtn").addEventListener("click", function() {
    document.getElementById("loadingIcon").classList.add("hidden");
    document.getElementById("resultado").classList.add("hidden");

    let mensaje = document.getElementById("mensaje");
    let rutaArchivo = document.getElementById("rutaArchivo");
    let resultadoDiv = document.getElementById("resultado");

    // Mostrar mensaje de "Unificando consultas..."
    mensaje.innerText = "Unificando consultas...";
    resultadoDiv.classList.remove("hidden");

    fetch(`http://127.0.0.1:5000/realizar-consulta?tipoConsulta=UNIFICAR-EXCEL`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                mensaje.innerText = "✅ Archivos unificados correctamente!";
                rutaArchivo.innerText = `📂 ${data.rutaArchivo}`;
            } else {
                mensaje.innerText = "❌ Error en la unificación: " + data.error;
                rutaArchivo.innerText = "";
            }

            setTimeout(() => {  // Ocultar el mensaje de unificación después de mostrar los resultados
                mensaje.innerText = "";
            }, 3000); // Desaparece después de 3 segundos

            document.getElementById("loadingIcon").classList.add("hidden");
        })
        .catch(error => {
            alert("Error en la conexión con el servidor.");
            console.error("Error:", error);
            document.getElementById("loadingIcon").classList.add("hidden");
        });
});
