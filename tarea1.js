// Programar conducta del boton Calcular.

document.querySelector('#calcular').onclick = function(event) {

  mostrarEdad();
  calcularEdad();
  event.preventDefault();
}

function mostrarEdad(){
    let etiquetaEdad = document.querySelector('#etiqueta-edad');
    let inputEdad = document.querySelector('#input-edad');

    etiquetaEdad.className = " ";
    inputEdad.className = " ";
}  

 function calcularEdad(){
    const $anioActual = document.querySelector('#anio-actual');
    const anioActual = Number($anioActual.value);
    const $anioNacimiento = document.querySelector('#anio-nacimiento');
    const anioNacimiento = Number($anioNacimiento.value);
  
    const edad = (anioActual - anioNacimiento);
    
    const selector = document.querySelector('#input-edad');
    selector.value = edad;
    
} 

// Programar conducta del boton Resetear.

document.querySelector('#resetear').onclick = function(event) {
    
    ocultarEdad();
    event.preventDefault();
}

  function ocultarEdad(){
    let etiquetaEdad = document.querySelector('#etiqueta-edad');
    let inputEdad = document.querySelector('#input-edad');

    etiquetaEdad.className = "oculto ";
    inputEdad.className = "oculto";
  }