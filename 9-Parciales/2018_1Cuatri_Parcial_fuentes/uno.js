
function mostrar()
{
	var largo;
	var ancho;
	var perimetro;

	largo = prompt("Ingrese el largo de un Rectangulo");
	ancho = prompt("Ingrese el ancho de un Rectangulo");

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = 2 * (largo + ancho);

	alert ("El perimetro del Rectangulo es: " + perimetro + "cm");
}
