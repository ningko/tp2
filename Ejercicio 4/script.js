const button = document.querySelector("button")
button.addEventListener("click", calcularIMC)

function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value)
    const peso = parseFloat(document.getElementById("peso").value)
    const imc = peso / altura ** 2
    
    if (!altura || !peso) {
        alert("No se ingresaron los valores requeridos")
        return
    } else if (altura < 0 || peso < 0) {
        alert("La altura o el peso no pueden ser números negativos")
        return
    } else if (altura > 2.3) {
        alert("La altura debe ingresarse en metros")
    } else {
        alert(`Su IMC es ${imc.toFixed(1)}`)
    }
}


