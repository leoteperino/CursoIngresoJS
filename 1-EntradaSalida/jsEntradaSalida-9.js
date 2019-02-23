/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var ingresaSueldo;
	var porcentaje;
	var aumento;

	ingresaSueldo = sueldo.value;

	ingresaSueldo = parseInt(ingresaSueldo);

	porcentaje = 1.1;

	aumento = ingresaSueldo * porcentaje;

	resultado.value = aumento;

}
