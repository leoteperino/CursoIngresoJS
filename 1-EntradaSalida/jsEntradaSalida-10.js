/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var ingresoImporte;
	var descuento;
	var resultadoTotal;

	ingresoImporte = importe.value;

	ingresoImporte = parseInt(ingresoImporte);

	descuento = 0.75;

	resultadoTotal = ingresoImporte * descuento;

	resultado.value = resultadoTotal;
}
