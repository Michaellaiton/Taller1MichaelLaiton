function procesarPalabra() {
  var palabra = document.getElementById("palabra").value;
  var opcion = document.getElementById("opcion").value;
  var resultado;

  switch (opcion) {
    case "longitud":
      resultado = palabra.length;
      break;
    case "mayusculas":
      resultado = palabra.toUpperCase();
      break;
    case "minusculas":
      resultado = palabra.toLowerCase();
      break;
    case "primer-caracter":
      resultado = palabra.charAt(0);
      break;
    default:
      resultado = "Opción inválida";
      break;
  }

  alert("El resultado es: " + resultado);
}
