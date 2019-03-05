function mostrar()
{

	var letraIngresada;
	var numeroIngresado;
	var respuesta;
	var contadorNumerosPares;
	var contadorNumerosImpares;
	var contadorCeros;
	var contadorPositivos;
	var acumuladorPositivos;
	var promedioNumerosPositivos;
	var acumuladorNegativos;
	var numeroMaximo;
	var letraMaximo;
	var numeroMinimo;
	var letraMinima;

	respuesta = "si";
	contadorNumerosPares = 0;
	contadorNumerosImpares = 0;
	contadorCeros = 0;
	contadorPositivos = 0;
	acumuladorPositivos = 0;
	acumuladorNegativos = 0;
	numeroMaximo = 0;
	numeroMinimo = 100;

	while(respuesta == "si"){
		letraIngresada = prompt("ingrese una letra: ");
		while(isNaN(letraIngresada) == false || letraIngresada.length > 1){
			letraIngresada = prompt("ERROR. ingrese solo una letra: ");
		}

		numeroIngresado = prompt("Ingrese un numero entre el -100 y el 100: ");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado) || numeroIngresado < -100 || numeroIngresado > 100){
			numeroIngresado = prompt("ERROR. Ingrese un numero entre el -100 y el 100: ");
		}

		respuesta = prompt("Desea seguir ingresando Datos? SI o NO.");
		while(respuesta != "si" && respuesta != "no"){
			respuesta = prompt("ERROR. respuesta no valida" + "\n" + "Desea seguir ingresando Datos? SI o NO.");
		}

		if(numeroIngresado % 2 == 0){
			contadorNumerosPares++;
			if(numeroIngresado == 0){
				contadorCeros++
			}
		}else{
			contadorNumerosImpares;
		}

		if(numeroIngresado > 0){
			contadorPositivos++;
			acumuladorPositivos = numeroIngresado + acumuladorPositivos;
			promedioNumerosPositivos = acumuladorPositivos / contadorPositivos;
			console.log("contador de positivos " + contadorPositivos);
			console.log("acumulador de positivos " + acumuladorPositivos);
			console.log("promedio numeros positivos " + promedioNumerosPositivos);
		}else{
			acumuladorNegativos = acumuladorNegativos + numeroIngresado;
			console.log("acumulador negativos" + acumuladorNegativos);
			console.log("numero negativo ingresado " + numeroIngresado);
		}

		if(numeroMaximo < numeroIngresado){
			 numeroMaximo = numeroIngresado;
			 letraMaximo = letraIngresada;
		}else{
			if(numeroMinimo > numeroIngresado){
				numeroMinimo = numeroIngresado;
				letraMinima = letraIngresada;
			}
		}
	}

	document.write("La cantidad de numeros pares es: " + contadorNumerosPares + "</br>");
	document.write("La cantidad de numeros impares es: " + contadorNumerosImpares + "</br>");
	document.write("La cantidad de numeros cero es: " + contadorCeros + "</br>");
	document.write("El promedio de todos los numeros positivos ingresados es: " + promedioNumerosPositivos + "</br>");
	document.write("La suma de todos los numeros negativos es: " + acumuladorNegativos + "</br>");
	document.write("El maximo numero es: " + numeroMaximo + " y su letras es: " + letraMaximo + "</br>");
	document.write("El minimo numero es: " + numeroMinimo + " y su letras es: " + letraMinima + "</br>");
}
