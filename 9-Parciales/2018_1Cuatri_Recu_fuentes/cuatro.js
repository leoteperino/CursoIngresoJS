function mostrar()
{
	/*//Declaro variables
	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var concatenoNumeros;
	var division;
	var suma;
	var sumaMenor50 = " y es menor a 50";
	
	//Inicializo Variables
	primerNumeroIngresado = prompt("Ingrese un número: ");
	segundoNumeroIngresado = prompt("Ingrese otro número: ");
	concatenoNumeros = primerNumeroIngresado + segundoNumeroIngresado;
	//parseo variables
	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);
	division = primerNumeroIngresado / segundoNumeroIngresado;
	suma = primerNumeroIngresado + segundoNumeroIngresado;
	
	//Logica
	if (primerNumeroIngresado == segundoNumeroIngresado){
		alert(concatenoNumeros);
	}else{
		if(primerNumeroIngresado > segundoNumeroIngresado){
			alert(division);
		}else{
			if(suma < 50){
				alert("La suma es: " + suma + sumaMenor50);
			}else{
				alert(suma);
			}
		}
	}*/

	var primerNumeroIngresado;
	var segunfoNumeroIngresado;
	var mensaje;

	mensaje = "";

	primerNumeroIngresado = prompt("Ingrese un numero: ");
	segundoNumeroIngresado = prompt("Ingrese otro numero: ");

	if(primerNumeroIngresado == segundoNumeroIngresado){
		mensaje = primerNumeroIngresado + segundoNumeroIngresado;
	}else{
		primerNumeroIngresado = parseInt(primerNumeroIngresado);
		segundoNumeroIngresado = parseInt(segundoNumeroIngresado);
		if(primerNumeroIngresado > segundoNumeroIngresado){
			mensaje = primerNumeroIngresado / segundoNumeroIngresado;
		}else{
			mensaje = primerNumeroIngresado + segundoNumeroIngresado;
			if(primerNumeroIngresado + segundoNumeroIngresado < 50){
				mensaje = "La suma es: " + primerNumeroIngresado + segundoNumeroIngresado + " y es menor a 50";
			}
		}
	}

	alert(mensaje);

}
