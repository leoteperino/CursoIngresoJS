/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var ingresarLargo;
	var ingresarAncho;
	var metrosAlambre;

	ingresarLargo = Largo.value;
	ingresarAncho = Ancho.value;

	ingresarAncho = parseInt(ingresarAncho);
	ingresarLargo = parseInt(ingresarLargo);

	metrosAlambre = [(ingresarLargo + ingresarAncho) * 2] * 3;

	alert("Se necesitan " + metrosAlambre + "mts de alambre");
}

function Circulo () 
{
	var ingresarRadio;
	var metrosAlambre;

	ingresarRadio = Radio.value;

	ingresarRadio = parseInt(ingresarRadio);

	metrosAlambre = [3.14 * (ingresarRadio * 2)] * 3;

	alert("Se necesitan " + metrosAlambre + "mts de alambre");	
}

function Materiales () 
{
	var IngresoLargo;
	var IngresoAncho;
	var calculoMetrosCuadrados;
	var bolsasCemento;
	var bolsasCal;

	ingresoLargo = prompt("Ingrese el largo del contrapiso:");
	ingresarAncho = prompt("ingrese el ancho del contrapiso:");

	ingresoLargo = parseInt(ingresoLargo);
	ingresarAncho = parseInt(ingresarAncho);

	calculoMetrosCuadrados = ingresoLargo * ingresarAncho;

	bolsasCemento = (calculoMetrosCuadrados * 2) / 1;
	bolsasCal = (calculoMetrosCuadrados * 3) / 1;

	alert("Se nesecitan: " + bolsasCemento + " bolsas de cemento." + "\n" +
		  "Se necesitan: " + bolsasCal + " bolsas de Cal." );
}