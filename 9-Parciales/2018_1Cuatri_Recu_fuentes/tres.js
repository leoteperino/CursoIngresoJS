function mostrar()
{
	/*var precioIngresado;
	var porcentajeIngresado;
	var calculoDescuentoEnDinero;
	var descuentoEnDinero;
	var calculoPrecioConDescuento;
	var precioConDescuento;
	var calcularIva;
	var ivaMostrar;
	var precioFinal;

	precioIngresado = prompt("Ingrese un precio");
	porcentajeIngresado = prompt ("Ingrese el porcentaje de descuento");

	precioIngresado = parseInt(precioIngresado);
	porcentajeIngresado = parseInt(porcentajeIngresado);

	calculoDescuentoEnDinero = porcentajeIngresado / 100;

	descuentoEnDinero = precioIngresado * calculoDescuentoEnDinero;

	calculoPrecioConDescuento = 1 - (porcentajeIngresado / 100);

	precioConDescuento = precioIngresado * calculoPrecioConDescuento;

	calcularIva = precioConDescuento * 1.21;

	ivaMostrar = "21%";

	alert("El descuento en dinero es: " + descuentoEnDinero + "\n" + 
		  "El precio con el descuento es: " + precioConDescuento + "\n" +
		  "El IVA es del: " + ivaMostrar + "\n" +
		  "Al dar click en OK aparecera el precio Final con descuento + IVA en el recuadro.");

	precioFinal = calcularIva;

	elPrecioFinal.value = precioFinal;*/

	var precioIngresado;
	var porcentaDescuentoIngresado;
	var descuento;
	var precioConDescuento;
	var precioFinal;
	var iva;

	precioIngresado = prompt("Ingrese un precio: ");
	porcentaDescuentoIngresado = prompt("Ingrese un porcentaje de descuento");

	precioIngresado = parseInt(precioIngresado);
	porcentaDescuentoIngresado = parseInt(porcentaDescuentoIngresado);

	descuento = precioIngresado * porcentaDescuentoIngresado / 100;
	precioConDescuento = precioIngresado - descuento;

	iva = 0.21;

	precioFinal = precioConDescuento * 1.21;

	elPrecioFinal.value = precioFinal;

	alert("El precio con Descuento es: " + precioConDescuento + " y el descuento es de: " + descuento);
}
