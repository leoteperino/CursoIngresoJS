function mostrar()
{
	/*var notasIngresadas;
	var sexoIngresado;
	var contador;
	var acumuladorNotas;
	var promedio;
	var acumuladorNotasBajas;
	var sexo;
	var acumuladorVarones;

	contador = 0;
	acumuladorNotas = 0;
	acumuladorNotasBajas = 0;
	acumuladorVarones = 0;

	while(contador < 5){
		contador++;
		notasIngresadas = prompt("Ingrese Notas: ");
		notasIngresadas = parseInt(notasIngresadas);
		while(notasIngresadas > 10){
			notasIngresadas = prompt("Ingreso una nota no valida. Ingrese notas del 0 al 10");
			notasIngresadas = parseInt(notasIngresadas);
		}
		sexoIngresado = prompt("Ingrese el sexo: ");
		while(sexoIngresado != "f" && sexoIngresado != "m"){
			sexoIngresado = prompt("Sexo no valido; Ingrese m o f: ");
		}
		acumuladorNotas = notasIngresadas + acumuladorNotas;
		promedio = acumuladorNotas/contador;
		console.log(sexoIngresado);
		if(contador == 1){
			acumuladorNotasBajas = notasIngresadas;
			sexo = sexoIngresado;
		}else{
			if(notasIngresadas < acumuladorNotasBajas){
				acumuladorNotasBajas = notasIngresadas;	
				sexo = sexoIngresado;
			}
		}
		if(sexoIngresado == "m" && notasIngresadas >= 6){
			acumuladorVarones = notaIngresada;
		}
	}

	alert(acumuladorVarones);		*/

	var notasIngresadas;
	var sexo;
	var contadorNotas;
	var NotaMasBaja;
	var sexoNotaMasBaja;
	var edad;
	var cantidadVaronesMayoresAprobados;
	var edadMasJoven;
	var sexoMasJoven;
	var notaMasJoven;
	var primeraMujerIngresada;
	var edadPrimerMujer;
	var notaPrimerMujer;
	var mensaje;
	var acumuladorNotas;
	var promedioNotas;

	contadorNotas = 0;
	NotaMasBaja = 11;
	cantidadVaronesMayoresAprobados = 0;
	edadMasJoven = 500;
	mensaje = "";
	acumuladorNotas = 0;

	for(contador = 0 ; contador < 5 ; contador++){

		notasIngresadas = prompt("Ingrese 5 notas del 1 al 10");
		notasIngresadas = parseInt(notasIngresadas);
		while(isNaN(notasIngresadas) || notasIngresadas > 10){
			notasIngresadas = prompt("ERROR. Ingrese 5 notas del 1 al 10: ");
		}

		edad = prompt("Ingrese la edad: ");
		edad = parseInt(edad);
		while(isNaN(edad)){
			edad = prompt("ERROR. Ingrese su edad: ");
		}

		sexo = prompt("Ingrese el sexo. m o f");
		while(sexo != "m" && sexo != "f"){
			sexo = prompt("ERROR. Ingrese su sexo: ");
		}

		if(notasIngresadas >= 0){
			contadorNotas++;
			acumuladorNotas = acumuladorNotas + notasIngresadas;
			promedioNotas = acumuladorNotas / contadorNotas;
			if(NotaMasBaja > notasIngresadas){
				NotaMasBaja = notasIngresadas;
				sexoNotaMasBaja = sexo;
			}
			if(sexo == "m" && notasIngresadas >= 6){
				cantidadVaronesMayoresAprobados++
			}
			if(edadMasJoven > edad){
				edadMasJoven = edad;
				sexoMasJoven = sexo;
				notaMasJoven = notasIngresadas;
			}
			if(sexo == "f"){
				edadPrimerMujer = edad;
				notaPrimerMujer = notasIngresadas;
			}else{
				mensaje = "No hubo mujeres ingresadas." + "\n";
			}
		}
	}

	alert("El promedio de todads las notas ingresadas es: " + promedioNotas + "\n" +
		  "La nota mas baja es: " + NotaMasBaja + " el sexo de la nota mas baja es: " + sexoNotaMasBaja + "\n" +
		  "La cantidad de varones mayores a 18 con notas mayores o iguales a 6 son: " + cantidadVaronesMayoresAprobados + "\n" +
		  "El sexo del mas joves es: " + sexoMasJoven + " y la nota del mas joven es: " + notaMasJoven + "\n" +
		  "La edad  de la primer mujer ingresada es: " + edadPrimerMujer + " y su nota es: " + notaPrimerMujer + "\n" +
		   mensaje);
}



