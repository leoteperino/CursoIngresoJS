function mostrar()
{
	/*//Declaro Variables
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

	//Inicializo variables
	respuesta = "si";
	contadorNumerosPares = 0;
	contadorNumerosImpares = 0;
	contadorNumeroCero = 0;
	acumuladorNumerosPositivos = 0;
	contador = 0;
	acumuladorNegativos = 0;
	acumuladorMaximo = 0;
	acumuladorMinimo = 0;

	//Siempre que la respuesta a seguir ingresando sea "si" se realiza la logica.
	while(respuesta == "si"){
		letraIngresada = prompt("Ingrese una letra: ");
		//Validaciones para la letra ingresas, si es un numero o si es mas de una letra, ERROR
		while(isNaN(letraIngresada)==false || letraIngresada.length > 1){
			letraIngresada = prompt("ERROR. No ha ingresado una letra, Ingrese una letra");
		}

		numeroIngresado = prompt("Ingrear un número entre -100 y 100");
		//Parseo el numero ingresado a un Integer, de este modo puedo realizar las comparaciones de la validacion
		numeroIngresado = parseInt(numeroIngresado);
		//Validaciones para el numero ingresado, si no es un numero o es mayor a 100 o menos a -100
		while(isNaN(numeroIngresado) || numeroIngresado < -100 || numeroIngresado > 100){
			numeroIngresado = prompt("ERROR. No ha Ingresado lo pedido, Ingrese un numero entre -100 y 100");
			numeroIngresado = parseInt(numeroIngresado);
		}

		respuesta = prompt("Desea seguir Ingresando datos? SI o NO");
		//validaciones de la respuesta si quiere seguir ingresando o no. solo pueden ingresas "si" o "no"
		while(respuesta != "si" && respuesta != "no"){
			respuesta = prompt("Desea seguir Ingresando datos? SI o NO");
		}

		//Si el numero es par lo cuenta
		if(numeroIngresado %2==0){
			contadorNumerosPares++;
			//Si el numero es cero lo cuenta
			if(numeroIngresado == 0){
				contadorNumeroCero++;
			} 
			//si los numeros son impares los cuenta
		}else{
			contadorNumerosImpares++;
		}

		//Si el numero es posito los acumula y saca el promedio de todos los positivos ingresados
		if(numeroIngresado > 0){
			contador++;
			acumuladorNumerosPositivos = numeroIngresado + acumuladorNumerosPositivos;
			promedioPositivos = acumuladorNumerosPositivos / contador;
			//Si el numero es negativo lo acumula
		}else{
			acumuladorNegativos = numeroIngresado + acumuladorNegativos;
		}

		//Este if saca el numero maximo y minimo y lo muestra con la letra ingresada
		if(acumuladorMaximo < numeroIngresado){
				acumuladorMaximo = numeroIngresado;
				acumuladorLetraMaximo = letraIngresada;
		}else{
				acumuladorMinimo = numeroIngresado;
				acumuladorLetraMinimo = letraIngresada;
		}
	}

	//Se muestran todos los datos pedidos por document.write.
	document.write("La cantidad de Números pares son: " + contadorNumerosPares + "<br/>");
	document.write("La cantidad de Números impares son: " + contadorNumerosImpares + "<br/>");
	document.write("La cantidad de Números cero son: " + contadorNumeroCero + "<br/>");
	document.write("El promedio de números positivos es: " + promedioPositivos + "<br/>");
	document.write("La suma de todos los números negativos es: " + acumuladorNegativos + "<br/>");
	document.write("La Número Maximo y la letras es: " + acumuladorMaximo + acumuladorLetraMaximo + "<br/>");
	document.write("La Número Minimo y su letra es: " + acumuladorMinimo + acumuladorLetraMinimo + "<br/>");*/

	var nombre;
	var cantidadPaginas;
	var cantidadDeVentas;
	var tema;
	var respuesta;

	respuesta = "si";

	while(respuesta == "si"){

		nombre = prompt("Ingrese el nombre de un libro: ");
		while(isNaN(nombre) == false){
			nombre = prompt("ERROR. Ingrese un nombre: ");
		}

		cantidadPaginas = prompt("Ingrese la cantidadPaginas: ");
		cantidadPaginas = parseInt(cantidadPaginas);
		while(isNaN(cantidadPaginas)){
			cantidadPaginas = prompt("ERROR. Ingrese la cantidadPaginas: ");
		}

		cantidadDeVentas = prompt("Ingrese la cantidadDeVentas: ");
		cantidadDeVentas = parseInt(cantidadDeVentas);
		while(isNaN(cantidadDeVentas)){
			cantidadDeVentas = prompt("ERROR. Ingrese la cantidadDeVentas: ");
		}

		tema = prompt("Ingrese el tema del libro: ");
		while(isNaN(tema) == false){
			tema = prompt("ERROR. Ingrese un tema: ");
		}

		respuesta = prompt("Desea seguir ingresando datos? SI o NO");
		while(respuesta != "si" && respuesta != "no"){
			respuesta = prompt("ERROR. Desea seguir ingresando datos? SI o NO");
		}
	}
}
