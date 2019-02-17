/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var gradosFarenheit;
	var conversionFarenheitCentigrados;

	gradosFarenheit = Temperatura.value;

	gradosFarenheit = parseInt(gradosFarenheit);

	conversionFarenheitCentigrados = (gradosFarenheit - 32) * 5/9;

	alert( gradosFarenheit + " grados grados Farenheit son: " + conversionFarenheitCentigrados + " grados Centigrados");
}

function CentigradosFahrenheit () 
{
	var gradosCentigrados;
	var conversionCentigradosFarenheit;

	gradosCentigrados = Temperatura.value;

	gradosCentigrados = parseInt(gradosCentigrados);

	conversionCentigradosFarenheit = (gradosCentigrados * 5/9 ) + 32;

	alert( gradosCentigrados + " grados grados Centigrados son: " + conversionCentigradosFarenheit + " grados Farenheit");
}
