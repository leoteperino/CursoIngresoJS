
function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perimetro;

	base = prompt("Ingrese la base");
	altura = prompt("Ingrese la altura");

	base = parseInt(base);
	altura = parseInt(altura);

	superficie = base * 3;
	perimetro = (base * altura) / 2;

	alert("La base del triangulo es: " + base + " y su superficie es: " + superficie);
}
