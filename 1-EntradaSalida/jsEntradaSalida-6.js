/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//En casa:
	/*
	var primerNumero;
	var segundoNumero;

	primerNumero = numeroUno.value;
	segundoNumero = numeroDos.value;

	var suma_numeros = parseInt(primerNumero) + parseInt(segundoNumero);

	alert(suma_numeros);
	*/ 

	//En clase:
	//Todo debe estar hecho por pasos.
	/*
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero = numeroUno.value;
	segundoNumero = numeroDos.value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	suma = primerNumero + segundoNumero;

	alert(suma);
	*/

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

