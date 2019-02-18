function mostrar()
{  
	//Declaro variables
	var primerNumeroIngresado;
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
	}
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
}
