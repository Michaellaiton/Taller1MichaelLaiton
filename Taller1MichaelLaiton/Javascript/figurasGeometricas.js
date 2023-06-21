
let valor1, valor2;
let btnModal = document.getElementById("abrirModal");
let venModal = document.getElementById("ventanaModal");
let cerModal = document.querySelector(".cerrarModal");

function openModal(figura) {
  venModal.dataset.figura = figura;
  venModal.style.display = "block";
}

function closeModal() {
  venModal.style.display = "none";
}

function calculate() {
  let figura = venModal.dataset.figura;


  valor1 = parseFloat(document.getElementById("valor1").value);
  valor2 = parseFloat(document.getElementById("valor2").value);

  let resultadoPerimetro;
  let resultadoArea;

  switch (figura) {
    case "circle":
      resultadoPerimetro = calcularCirculoPerimetro(valor1);
      resultadoArea = calcularCirculoArea(valor1);
      break;
    case "triangle":
      resultadoPerimetro = calcularTrianguloPerimetro(valor1, valor2);
      resultadoArea = calcularTrianguloArea(valor1, valor2);
      break;
    case "rectangle":
      resultadoPerimetro = calcularRectanguloPerimetro(valor1, valor2);
      resultadoArea = calcularRectanguloArea(valor1, valor2);
      break;
    case "square":
      resultadoPerimetro = calcularCuadradoPerimetro(valor1);
      resultadoArea = calcularCuadradoArea(valor1);
      break;
  }

  document.getElementById("perimetroResult").innerText = resultadoPerimetro;
  document.getElementById("areaResult").innerText = resultadoArea;

  document.getElementById("resultadoPerimetro").style.display = "block";
  document.getElementById("resultadoArea").style.display = "block";
}

function calcularCirculoPerimetro(radio) {
  return 2 * Math.PI * radio;
}

function calcularCirculoArea(radio) {
  return Math.PI * radio * radio;
}

function calcularTrianguloPerimetro(base, altura) {
  return base + altura + Math.sqrt(base * base + altura * altura);
}

function calcularTrianguloArea(base, altura) {
  return (base * altura) / 2;
}

function calcularRectanguloPerimetro(base, altura) {
  return 2 * (base + altura);
}

function calcularRectanguloArea(base, altura) {
  return base * altura;
}

function calcularCuadradoPerimetro(lado) {
  return 4 * lado;
}

function calcularCuadradoArea(lado) {
  return lado * lado;
}
