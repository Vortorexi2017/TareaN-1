function probarValidarAnioActual(){
    console.assert(validarAnioActual("-5") === "Año Actual debe ser mayor que cero", "validar nombre no valido que el valor no sea negativo");
};

probarValidarAnioActual();