// console.log('Hola papa');

document.querySelector('#calcular').onclick = function(event) {
  const $añoActual = document.querySelector('#anio-actual');
  const añoActual = Number($añoActual.value);
  const $añoNacimiento = document.querySelector('#anio-nacimiento');
  const añoNacimiento = Number($añoNacimiento.value);

  //console.log(añoActual, añoNacimiento);

  mostrarEdad();
  calcularEdad();
  event.preventDefault();
}

function mostrarEdad(){
    let etiquetaEdad = document.querySelector('#etiqueta-edad');
    let inputEdad = document.querySelector('#input-edad');

    console.log(etiquetaEdad, inputEdad);
}    