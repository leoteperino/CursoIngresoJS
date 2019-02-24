function mostrar()
{
	//Declaro variables
	var numerosIngresados;
	var respuesta;
	var acumuladoresPositivos;
	var acumuladoresNegativos;
	var contadorNegativos;
	var contadorPositivo;
	var contadorCero;
	var contadorPares;

	//Inicializo variables
	respuesta = "si";
	acumuladoresPositivos = 0;
	acumuladoresNegativos = 0;
	contadorNegativos = 1;
	contadorPositivo = 0;
	contadorCero = 0;
	contador = 0;
	contadorPares = 0;
	

	//Inicia Logica
	while(respuesta != "no"){
		numerosIngresados = prompt("Ingrese numeros: ");
		numerosIngresados = parseInt(numerosIngresados);

		if(numerosIngresados < 0){
			contadorNegativos = contadorNegativos + 1;
			acumuladoresNegativos = acumuladoresNegativos + numerosIngresados;
		}else{
			contadorPositivo = contadorPositivo + 1;
			acumuladoresPositivos = acumuladoresPositivos + numerosIngresados;
			if(numerosIngresados == 0){
				contadorCero = contadorCero + 1;
			}
		}

		if(numerosIngresados % 2 == 0){
			contadorPares = contadorPares + 1;
		}

		respuesta = prompt("Coloque SI para seguir ingresando números");
	}


	//Muestro resultados
	alert("1 - La suma de los negativos es: " + acumuladoresNegativos + "\n" +
          "2 - La suma de los positivos es: " + acumuladoresPositivos + "\n" +
          "3 - La cantidad de Negativos es: " + contadorNegativos + "\n" +
          "4 - La cantidad de 0 es: " + contadorCero + "\n" +
          "5 - La cantidad de numeros pares es: " + contadorPares + "\n" +
          "6 - El promedio de los positivos es: " + acumuladoresPositivos/contadorPositivo + "\n" 
          /*"7 - El promedio de los negativos es: " + acumuladoresNegativos/contadorNegativos + "\n" +
          "8 - Diferencia entre positivos y negativos: " + acumuladoresPositivos-acumuladoresNegativos + "\n"*/);

}