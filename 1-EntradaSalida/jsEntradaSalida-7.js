/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var sumaTotal;

	primerNumeroIngresado = numeroUno.value;
	segundoNumeroIngresado = numeroDos.value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	sumaTotal = primerNumeroIngresado + segundoNumeroIngresado;

	alert(sumaTotal);
}

function restar()
{
	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var	restaTotal;

	primerNumeroIngresado = numeroUno.value;
	segundoNumeroIngresado = numeroDos.value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	restaTotal = primerNumeroIngresado - segundoNumeroIngresado;

	alert(restaTotal);
}

function multiplicar()
{ 
	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var multiplicacion;

	primerNumeroIngresado = numeroUno.value;
	segundoNumeroIngresado = numeroDos.value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	multiplicacion = primerNumeroIngresado * segundoNumeroIngresado;

	alert(multiplicacion);
}

function dividir()
{
	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var division;

	primerNumeroIngresado = numeroUno.value;
	segundoNumeroIngresado = numeroDos.value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	division = primerNumeroIngresado / segundoNumeroIngresado;

	alert(division);	
}

