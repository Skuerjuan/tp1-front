let escalaGramos = {
    "g": 1,
    "kg": 1000,
    "mg": 0.001,
    "lb": 453.59,
    "ton": 1e+6
}
let inputUnidades, resultadoUnidades, input, resultado;
document.addEventListener("DOMContentLoaded", function() {  
    inputUnidades = document.getElementById("selectorUnidades");
    resultadoUnidades = document.getElementById("resultadoUnidades");
    input = document.getElementById("valorInput");
    resultado = document.getElementById("valorResultado");
})

function convertir(){
    if(input.value == "" || isNaN(input.value)){
        alert("Por favor, ingresa un número válido.");
        input.value = "";
        return;
    }
    let res = (input.value * escalaGramos[inputUnidades.value]) / escalaGramos[resultadoUnidades.value];
    resultado.value = res.toFixed(4);
}

window.convertir = convertir;