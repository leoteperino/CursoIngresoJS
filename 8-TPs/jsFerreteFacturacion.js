/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecioIngresado;
	var segundoPrecioIngresado;
	var tercerPrecioIngresado;
	var sumaPrecios;

	primerPrecioIngresado = PrecioUno.value;
	segundoPrecioIngresado = PrecioDos.value;
	tercerPrecioIngresado = PrecioTres.value;

	primerPrecioIngresado = parseInt(primerPrecioIngresado);
	segundoPrecioIngresado = parseInt(segundoPrecioIngresado);
	tercerPrecioIngresado = parseInt(tercerPrecioIngresado);

	sumaPrecios = primerPrecioIngresado + segundoPrecioIngresado + tercerPrecioIngresado;

	alert("La suma de los precios es: $" + sumaPrecios);	
}

function Promedio () 
{
	var primerPrecioIngresado;
	var segundoPrecioIngresado;
	var tercerPrecioIngresado;
	var promedio;

	primerPrecioIngresado = PrecioUno.value;
	segundoPrecioIngresado = PrecioDos.value;
	tercerPrecioIngresado = PrecioTres.value;

	primerPrecioIngresado = parseInt(primerPrecioIngresado);
	segundoPrecioIngresado = parseInt(segundoPrecioIngresado);
	tercerPrecioIngresado = parseInt(tercerPrecioIngresado);

	promedio =  (primerPrecioIngresado + segundoPrecioIngresado + tercerPrecioIngresado) / 3;

	alert("El promedio de los precios es: $" + promedio);
}

function PrecioFinal () 
{
	var primerPrecioIngresado;
	var segundoPrecioIngresado;
	var tercerPrecioIngresado;
	var iva;
	var ivaCalculado;

	primerPrecioIngresado = PrecioUno.value;
	segundoPrecioIngresado = PrecioDos.value;
	tercerPrecioIngresado = PrecioTres.value;

	primerPrecioIngresado = parseInt(primerPrecioIngresado);
	segundoPrecioIngresado = parseInt(segundoPrecioIngresado);
	tercerPrecioIngresado = parseInt(tercerPrecioIngresado);

	iva = 1.21;

	ivaCalculado =  (primerPrecioIngresado + segundoPrecioIngresado + tercerPrecioIngresado) * iva;

	alert("El precio final con el iva calculado es: $" + ivaCalculado);
}