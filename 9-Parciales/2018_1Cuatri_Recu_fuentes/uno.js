
function mostrar()
{
/*	var base;
	var altura;
	var superficie;
	var perimetro;

	base = prompt("Ingrese la base");
	altura = prompt("Ingrese la altura");

	base = parseInt(base);
	altura = parseInt(altura);

	superficie = base * 3;
	perimetro = (base * altura) / 2;

	alert("El perimetro del rectangulo es: " + perimetro);*/

	var base;
	var altura;
	var superficie;
	var perimetro;

	base = prompt("Ingrese la base del triangulo: ");
	altura = prompt("Ingrese la altura del triangulo: ");

	base = parseInt(base);
	altura = parseInt(altura);

	superficie = base + 3;
	perimetro = (base*altura) / 2;

	alert("La Superficie del triangulo es: " + superficie + " y la altura es: " + altura);


}
