function mostrar()
{
	var ingresaPrecio;
	var ingresaPorcentaje;
	var porcentajeIngresado;
	var precioFinal;

	ingresaPrecio = prompt("Ingrese el Precio");
	ingresaPorcentaje = prompt("Ingrese el porcentaje de descuento");

	ingresaPrecio = parseInt(ingresaPrecio);
	ingresaPorcentaje = parseInt(ingresaPorcentaje);

	porcentajeIngresado = 1 - ingresaPorcentaje / 100;

	precioFinal = ingresaPrecio * porcentajeIngresado;

	elPrecioFinal.value = precioFinal;

}
