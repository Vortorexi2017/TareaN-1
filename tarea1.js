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
    const $anioActual = document.querySelector('#anio-actual');
    const $anioNacimiento = document.querySelector('#anio-nacimiento');

    etiquetaEdad.className = "oculto";
    inputEdad.className = "oculto";
    $anioActual.value = ' ';
    $anioNacimiento.value = ' ';
  }

  // Programar conducta del boton Calcular2.

document.querySelector('#calcular2').onclick = function(event) {

    mostrarSalario();
    calcularSalario();
    event.preventDefault();
  }

  function mostrarSalario(){
    let etiquetaSalarioAnual = document.querySelector('#etiqueta-salario-anual');
    let inputSalarioAnual = document.querySelector('#input-salario-anual');

    etiquetaSalarioAnual.className = " ";
    inputSalarioAnual.className = " ";
}  

 function calcularSalario(){
    const $salarioAnual = document.querySelector('#salario-anual');
    const salarioAnual = Number($salarioAnual.value);

  
    const salario = (salarioAnual / 12).toFixed(2);
    
    const selector2 = document.querySelector('#input-salario-anual');
    selector2.value = salario;
    
}   

// Programar conducta del boton Resetear2.

document.querySelector('#resetear2').onclick = function(event) {
    
    ocultarSalario();
    event.preventDefault();
}

  function ocultarSalario(){
    let etiquetaEdad = document.querySelector('#etiqueta-salario-anual');
    let inputEdad = document.querySelector('#input-salario-anual');
    const $salarioAnual = document.querySelector('#salario-anual');

    etiquetaEdad.className = "oculto ";
    inputEdad.className = "oculto";
    $salarioAnual.value = " ";
  }

    // Programar conducta del boton Calcular3.

document.querySelector('#calcular3').onclick = function(event) {

    mostrarSalario2();
    calcularTodos();
    event.preventDefault();
  }

  function mostrarSalario2(){

    let etiquetaSalarioAnual2 = document.querySelector('#etiqueta-salario-anual2');
    let inputSalarioAnual2 = document.querySelector('#input-salario-anual2');

    let etiqutaSalarioDiario = document.querySelector('#tag-diario');
    let inputSalarioDiario = document.querySelector('#input-salario-diario');

    let etiquetaSalarioHora = document.querySelector('#etiqueta-salario-hora');
    let inputSalarioHora = document.querySelector('#input-salario-hora');



    etiquetaSalarioAnual2.className = " ";
    inputSalarioAnual2.className = " ";

    etiqutaSalarioDiario.className = " ";
    inputSalarioDiario.className = " ";

    etiquetaSalarioHora.className = " ";
    inputSalarioHora.className = " ";


} 

 function calcularTodos(){

    const $salarioMensual = document.querySelector('#salario-mensual');
    const salarioMensual = Number($salarioMensual.value);

  
    const salario2 = (salarioMensual * 12).toFixed(2);
    const salariodiario = (salarioMensual / 30).toFixed(2);
    const salariohora = (salarioMensual / 720).toFixed(2);
    
    const selector3 = document.querySelector('#input-salario-anual2');
    selector3.value = salario2;
    const selector4 = document.querySelector('#input-salario-diario');
    selector4.value = salariodiario;
    const selector5 = document.querySelector('#input-salario-hora');
    selector5.value = salariohora;
    
} 

// Programar conducta del boton Resetear3.

document.querySelector('#resetear3').onclick = function(event) {
    
    ocultarSalario2();
    event.preventDefault();
}

  function ocultarSalario2(){
    let etiquetaSalarioAnual2 = document.querySelector('#etiqueta-salario-anual2');
    let inputSalarioAnual2 = document.querySelector('#input-salario-anual2');

    let etiqutaSalarioDiario = document.querySelector('#tag-diario');
    let inputSalarioDiario = document.querySelector('#input-salario-diario');

    let etiquetaSalarioHora = document.querySelector('#etiqueta-salario-hora');
    let inputSalarioHora = document.querySelector('#input-salario-hora');

    const $salarioMensual = document.querySelector('#salario-mensual');



    etiquetaSalarioAnual2.className = "oculto";
    inputSalarioAnual2.className = "oculto";

    etiqutaSalarioDiario.className = "oculto";
    inputSalarioDiario.className = "oculto";

    etiquetaSalarioHora.className = "oculto";
    inputSalarioHora.className = "oculto";

    $salarioMensual.value =" ";
  }


  // Validar c/ formulario creado.

  function validarFormulario1(event){

    const $form1 = document.querySelector('#formulario1');

    const anioActual = $form1['anio-actual'].value;
    const anioNacimiento = $form1['anio-nacimiento'].value;


    const errorAnioActual = validarAnioActual(anioActual);
    const errorAnioNacimiento = validarAnioNacimiento(anioNacimiento);

    const errores1 = {
                anioActual : errorAnioActual,
                anioNacimiento : errorAnioNacimiento,
    }

    manejarErrores1(errores1);
    
    event.preventDefault();

  }
   
  function manejarErrores1(errores1){

    errorAnioActual = errores1.anioActual;
    errorAnioNacimiento = errores1.anioNacimiento;

    if (errorAnioActual){
      $form1['anio-actual'].className = "error";
    }else{
      $form1['anio-actual'].className = " ";
    }

    if (errorAnioNacimiento){
      $form1['anio-nacimiento'].className = "error";
    }else{
      $form1['anio-nacimiento'].className = " ";
    }

    //const $form1 = document.querySelector('#formulario1');
    //$form1.onsubmit = validarFormulario1;

  }


  function validarAnioActual(anioActual){
   if (anioActual<=0){
      return "Año Actual debe ser mayor que cero";

    };

    if (anioActual > 2020){
      return "Año Actual debe ser menor a 2020";
    };
  }

  function validarAnioNacimiento(anioNacimiento){
    if (anioNacimiento<=0){
      return "Año Actual debe ser mayor que cero";
    };

    if (anioNacimiento > 2020){
      return "Año Actual debe ser menor a 2020";
    };
  };


  const $form1 = document.querySelector('#formulario1');
  $form1.onsubmit = validarFormulario1;