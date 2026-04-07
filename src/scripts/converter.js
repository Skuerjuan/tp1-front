const escalas = {
    "masa": {
        "g": 1,
        "kg": 1000,
        "mg": 0.001,
        "lb": 453.59,
        "ton": 1e+6
    },
    "longitud": {
        "m": 1,
        "km": 1000,
        "cm": 0.01,
        "mm": 0.001,
        "mi": 1609.34,
    },
    "volumen": {
        "L": 1,
        "mL": 0.001,
        "m3": 1000,
        "ft3": 28.3168,
        "gal": 3.78541,
        "cm3": 0.001
    }
}
let inputUnidades, resultadoUnidades, input, resultado;
document.addEventListener("DOMContentLoaded", function() {  
    inputUnidades = document.getElementById("selectorUnidades");
    resultadoUnidades = document.getElementById("resultadoUnidades");
    input = document.getElementById("valorInput");
    resultado = document.getElementById("valorResultado");
})

function convertir(tipo){
    if(input.value == "" || isNaN(input.value)){
        alert("Por favor, ingresa un número válido.");
        input.value = "";
        return;
    }
    let res = (input.value * escalas[tipo][inputUnidades.value]) / escalas[tipo][resultadoUnidades.value];
    resultado.value = res.toFixed(4);
}

window.convertir = convertir;