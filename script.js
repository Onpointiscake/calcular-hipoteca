function hallarPagoMensual(precioInmueble, numeroCuotas, tipoInteres) {
    return precioInmueble * tipoInteres * (Math.pow(1 + tipoInteres, numeroCuotas)) / (Math.pow(1 + tipoInteres, numeroCuotas) - 1);
}

calculateBtn.addEventListener('click', function(){

    let precioInmueble = parseInt(document.querySelector('#priceInput').value)
    let numeroCuotas = parseInt(document.querySelector('#cuotasInput').value)
    let tipoInteres = parseFloat(document.querySelector('#interesInput').value)

    let interes = (tipoInteres/100) / 12
    let cuotaMensual = precioInmueble / (( (1 - ( 1 + interes) ** -numeroCuotas)) / interes)
    // Total a pagar:
    let resultado = cuotaMensual * numeroCuotas

    alert('Tu hipoteca sería de ' + resultado.toFixed(0) + '€')
});