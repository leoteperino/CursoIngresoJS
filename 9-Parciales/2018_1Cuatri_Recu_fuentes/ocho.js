function mostrar()
{
	var letraIngresada;
	var numeroIngresado;
	var respuesta;
	var contadorNumerosPares;
	var contadorNumerosImpares;
	var contadorNumeroCero;
	var acumuladorNumerosPositivos;
	var contador;
	var promedioPositivos;
	var acumuladorNegativos;
	var acumuladorMaximo;
	var acumuladorMinimo;
	var acumuladorLetraMaximo;
	var acumuladorLetraMinimo;

	respuesta = "si";
	contadorNumerosPares = 0;
	contadorNumerosImpares = 0;
	contadorNumeroCero = 0;
	acumuladorNumerosPositivos = 0;
	contador = 0;
	acumuladorNegativos = 0;
	acumuladorMaximo = 0;
	acumuladorMinimo = 0;

	while(respuesta == "si"){
		letraIngresada = prompt("Ingrese una letra: ");

		while(isNaN(letraIngresada)==false || letraIngresada.length > 1){
			letraIngresada = prompt("ERROR. No ha ingresado una letra, Ingrese una letra");
		}

		numeroIngresado = prompt("Ingrear un número entre -100 y 100");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado) || numeroIngresado < -100 || numeroIngresado > 100){
			numeroIngresado = prompt("ERROR. No ha Ingresado lo pedido, Ingrese un numero entre -100 y 100");
			numeroIngresado = parseInt(numeroIngresado);
		}

		respuesta = prompt("Desea seguir Ingresando datos? SI o NO");
		while(respuesta != "si" && respuesta != "no"){
			respuesta = prompt("Desea seguir Ingresando datos? SI o NO");
		}

		if(numeroIngresado %2==0){
			contadorNumerosPares++;
			if(numeroIngresado == 0){
				contadorNumeroCero++;
			} 
		}else{
			contadorNumerosImpares++;
		}

		if(numeroIngresado > 0){
			contador++;
			acumuladorNumerosPositivos = numeroIngresado + acumuladorNumerosPositivos;
			promedioPositivos = acumuladorNumerosPositivos / contador;
		}else{
			acumuladorNegativos = numeroIngresado + acumuladorNegativos;
		}

		if(acumuladorMaximo < numeroIngresado){
				acumuladorMaximo = numeroIngresado;
				acumuladorLetraMaximo = letraIngresada;
		}else{
				acumuladorMinimo = numeroIngresado;
				acumuladorLetraMinimo = letraIngresada;
		}
	}

	document.write("La cantidad de Números pares son: " + contadorNumerosPares + "<br/>");
	document.write("La cantidad de Números impares son: " + contadorNumerosImpares + "<br/>");
	document.write("La cantidad de Números cero son: " + contadorNumeroCero + "<br/>");
	document.write("El promedio de números positivos es: " + promedioPositivos + "<br/>");
	document.write("La suma de todos los números negativos es: " + acumuladorNegativos + "<br/>");
	document.write("La Número Maximo y la letras es: " + acumuladorMaximo + acumuladorLetraMaximo + "<br/>");
	document.write("La Número Minimo y su letra es: " + acumuladorMinimo + acumuladorLetraMinimo + "<br/>");
}
