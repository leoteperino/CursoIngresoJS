function mostrar()
{

	//Declaro variables
	/*var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var concatenoNumeros;
	var resta;
	var suma;
	var sumaMayor10=" y supero el 10";
	
	//Inicializo Variables
	primerNumeroIngresado = prompt("Ingrese un número: ");
	segundoNumeroIngresado = prompt("Ingrese otro número: ");
	concatenoNumeros = primerNumeroIngresado + segundoNumeroIngresado;
	//parseo variables
	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);
	resta = primerNumeroIngresado - segundoNumeroIngresado;
	suma = primerNumeroIngresado + segundoNumeroIngresado;
	
	//Logica
	if (primerNumeroIngresado == segundoNumeroIngresado){
		alert(concatenoNumeros);
	}else{
		if(primerNumeroIngresado > segundoNumeroIngresado){
			alert(resta);
		}else{
			if(suma > 10){
				alert("La suma es: " + suma + sumaMayor10);
			}else{
				alert(suma);
			}
		}
	}*/
 /*
	//Declaro variables
	var productos;
	var descuentoProductos;
	var gasto;
	var descuentoGasto;
	var tipoPago;
	var recargoTarjeta;

	//Inicializo variables
	productos = prompt("Ingrese la cantidad de productos que desea comprar");
	gasto = prompt("Cuanto dinero piensa gastar?");
	tipoPago = prompt("Ingrese el tipo de pago: "+"\n"+
						  "Opcion 1 : Efectivo"+"\n"+
						  "Opcion 2 : Tarjeta de Credito"); 
	descuentoProductos = gasto * 0.9;
	descuentoGasto = gasto * 0.85;
	recargoTarjeta = gasto * 1.1;

	//Parseo las variables
	productos = parseInt(productos);
	gasto = parseInt(gasto);

	//Logica
	if(productos > 2){
		gasto = descuentoProductos;
	}else{
		if(gasto > 2000){
			gasto = descuentoGasto;
		}else{
			if(tipoPago == 2){
				gasto = recargoTarjeta;
			}
		}
	}

	alert("Usted a gastado: $" + gasto);
	*/

	//Ejercicio 4js - pagina 5 esta el enunciado
	/*var numeroIngresado1;
	var numeroIngresado2;
	var numeroIngresado3;
	var numeroIngresado4;
	var numeroMayor;
	var descuento;
	var aumento;

	numeroIngresado1 = prompt("Ingrese un numero");
	numeroIngresado2 = prompt("Ingrese un numero");
	numeroIngresado3 = prompt("Ingrese un numero");
	numeroIngresado4 = prompt("Ingrese un numero");

	numeroIngresado1 = parseInt(numeroIngresado1);
	numeroIngresado2 = parseInt(numeroIngresado2);
	numeroIngresado3 = parseInt(numeroIngresado3);
	numeroIngresado4 = parseInt(numeroIngresado4);

	if(numeroIngresado1 > numeroIngresado2){
		numeroIngresado1 = numeroMayor;
	}else{
		numeroIngresado2 = numeroMayor;
		if(numeroIngresado3 > numeroIngresado4){
			numeroIngresado3 = numeroMayor;
		}else{
			numeroIngresado4 = numeroMayor
		}
	}

	alert(numeroMayor);*/

	//Siempre hacer una sola vez la cuenta


	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var resultado;
	var concatenoNumeros;
	var suma;

	primerNumeroIngresado = prompt("Ingrese un Número: ");
	segundoNumeroIngresado = prompt("Ingrese otro Número: ");

	concatenoNumeros = primerNumeroIngresado + segundoNumeroIngresado;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	if(primerNumeroIngresado == segundoNumeroIngresado){
		resultado = concatenoNumeros;
	}else{
		if(primerNumeroIngresado > segundoNumeroIngresado){
			resultado = primerNumeroIngresado - segundoNumeroIngresado
		}else{
			resultado = primerNumeroIngresado + segundoNumeroIngresado;
		}
	}

	alert(resultado);

	if(primerNumeroIngresado + segundoNumeroIngresado > 10){
			resultado = primerNumeroIngresado + segundoNumeroIngresado;
			alert("La suma es: " + resultado + " y supera el 10");
	}
}