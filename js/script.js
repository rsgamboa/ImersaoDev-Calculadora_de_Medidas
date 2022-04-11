function calcular() {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  var nota4 = parseFloat(document.getElementById("nota4").value);

  var mediaFinal = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);

  document.getElementById("result_").innerHTML = mediaFinal;

  console.log(mediaFinal);

  var elementoResult = document.getElementById("AR");

  if (mediaFinal > 5) {
    elementoResult.innerHTML = "APROVADO";
  } else if (mediaFinal < 5) {
    elementoResult.innerHTML = "REPROVADO";
  }
}
function Fah() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 1.8 + 32;
  console.log(valorEmReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "A Temperatura em Fahrenheit é ºF " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Kelvin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico + 273;
  console.log(valorEmReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "A Temperatura em Kelvin é ºK " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}