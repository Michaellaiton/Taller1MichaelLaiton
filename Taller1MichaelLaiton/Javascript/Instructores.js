function verificarSeleccion() {
    var nombreSeleccionado = document.getElementById("nombres").value;
    var apellidoSeleccionado = document.getElementById("apellidos").value;
    var actividadSeleccionada = document.getElementById("actividades").value;
  
    var respuestaCorrecta1 = nombreSeleccionado === "Jennifer" && apellidoSeleccionado === "Fajardo" && actividadSeleccionada === "Javascript";
    var respuestaCorrecta2 = nombreSeleccionado === "Sandra" && apellidoSeleccionado === "Rueda" && actividadSeleccionada === "SQL";
    var respuestaCorrecta3 = nombreSeleccionado === "Margarita" && apellidoSeleccionado === "Guarin" && actividadSeleccionada === "Prototipado";
  
    if (respuestaCorrecta1 || respuestaCorrecta2 || respuestaCorrecta3) {
      alert("La respuesta es correcta.");
    } else {
      alert("La respuesta es incorrecta.");
}
    }