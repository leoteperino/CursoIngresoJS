/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var valor;
	var porcentaje;

	valor = importe.value;

	valor = parseInt(valor);

	porcentaje = valor*0.25;

	resultado.value = valor - porcentaje;
	
}
