function mostrar()
{
	/*var ingresaPrecio;
	var ingresaPorcentaje;
	var porcentajeIngresado;
	var precioFinal;

	ingresaPrecio = prompt("Ingrese el Precio");
	ingresaPorcentaje = prompt("Ingrese el porcentaje de descuento");

	ingresaPrecio = parseInt(ingresaPrecio);
	ingresaPorcentaje = parseInt(ingresaPorcentaje);

	porcentajeIngresado = 1 - (ingresaPorcentaje / 100);

	precioFinal = ingresaPrecio * porcentajeIngresado;

	elPrecioFinal.value = precioFinal;*/

	//Declaro variables
	var precioIngresado;
	var descuentoIngresado;
	var precioFinal;

	//Inicializo variables
	precioIngresado = prompt("Ingrese el precio: ");
	descuentoIngresado = prompt ("Ingrese el descuento: ");

	//Parseo variables
	precioIngresado = parseInt(precioIngresado);
	descuentoIngresado = parseInt(descuentoIngresado);

	//Logica
	precioFinal = precioIngresado - precioIngresado * (descuentoIngresado / 100);

	//Muestro el resultado
	elPrecioFinal.value = precioFinal;
}
