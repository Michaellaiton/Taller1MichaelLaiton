function determinarTipoTriangulo() {
    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var lado3 = parseFloat(document.getElementById("lado3").value);
    var tipoTriangulo;
  
    switch (true) {
      case lado1 === lado2 && lado1 === lado3:
        tipoTriangulo = "Equilátero";
        break;
      case lado1 === lado2 || lado1 === lado3 || lado2 === lado3:
        tipoTriangulo = "Isósceles";
        break;
      default:
        tipoTriangulo = "Escaleno";
        break;
    }
  
    alert("El triángulo es de tipo: " + tipoTriangulo);
  }
  