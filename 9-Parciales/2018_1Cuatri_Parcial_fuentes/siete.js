function mostrar()
{
	/*var notasIngresadas;
	var sexoIngresado;
	var contador;
	var acumuladorNotas;
	var promedioNotasIngresadas;
	var NotaMasbaja;
	var sexoNotaMasBaja;
	var contadorNotaVarones;

	contador = 0;
	acumuladorNotas = 0;
	NotaMasbaja = 10;
	contadorNotaVarones = 0;

	while(contador < 5){
		contador++;
		notasIngresadas = prompt("Ingrese las notas del 0 al 10: ");
		notasIngresadas = parseInt(notasIngresadas);
		while(isNaN(notasIngresadas) || notasIngresadas > 10){
			notasIngresadas = prompt("ERROR. Las notas Ingresadas deben ser del 0 al 10." + "\n" +
									 "Ingrese nuevamente las notas: ");
		}

		sexoIngresado = prompt("Ingrese el sexo: m o f: ");
		while(sexoIngresado != "m" && sexoIngresado != "f"){
			sexoIngresado = prompt("ERROR. El sexo ingresado debe ser f o m." + "\n" + "Ingrese el sexo nuevamente: ");
		}

		if(notasIngresadas > 0){
			acumuladorNotas = acumuladorNotas + notasIngresadas;
			promedioNotasIngresadas = acumuladorNotas / contador;
		}

		if(NotaMasbaja > notasIngresadas){
			NotaMasbaja = notasIngresadas;
			sexoNotaMasBaja = sexoIngresado;
		}

		if(sexoIngresado == "m"){
			if(notasIngresadas >= 6){
				contadorNotaVarones++;
			}
		}
	}
	alert("El promedio de notas Ingresadas es: " + promedioNotasIngresadas + "\n" +
		  "La nota más baja es: " + NotaMasbaja + " y el sexo de esa persona es: " + sexoNotaMasBaja + "\n" +
		  "La cantidad de varones con notas mayores a 6 son: " + contadorNotaVarones);*/

	var notasIngresadas;
	var sexoIngresado;
	var acumuladorNotas;
	var promedioNotasIngresadas;
	var contadorNotas;
	var notaMasbaja;
	var sexoNotaMasBaja;
	var contadorVarones;
	var notaMasAlta;
	var sexoNotaMasAlta;

	acumuladorNotas = 0;
	contadorNotas = 0;
	//notaMasbaja = 0;
	notaMasbaja = 11;
	notaMasAlta = 0;
	contadorVarones = 0;

	for(contador=0;contador<5;contador++){
		notasIngresadas = prompt("Ingrese una notas del 0 al 10: ");
		notasIngresadas = parseInt(notasIngresadas);
		while(isNaN(notasIngresadas) || notasIngresadas > 10){
			notasIngresadas = prompt("ERROR. Ingrese nuevamente una notas del 0 al 10: ");
		}

		sexoIngresado = prompt("Ingrese el sexo: m o f: ");
		while(sexoIngresado != "m" && sexoIngresado != "f"){
			sexoIngresado = prompt("ERROR. Ingrese nuevamente el sexo: m o f: ");
		}

		if(notasIngresadas>=0){
			contadorNotas++;
			acumuladorNotas = notasIngresadas + acumuladorNotas;
			promedioNotasIngresadas = acumuladorNotas / contadorNotas;
			if(notaMasbaja > notasIngresadas){
				notaMasbaja = notasIngresadas;
				sexoNotaMasBaja = sexoIngresado;
			}
			if(notaMasAlta < notasIngresadas){
				notaMasAlta = notasIngresadas;
				sexoNotaMasAlta = sexoIngresado;
			}
			/*if(contadorNotas == 1){
				notaMasbaja = notasIngresadas;
				sexoNotaMasBaja = sexoIngresado;
				notaMasAlta = notasIngresadas;
				sexoNotaMasAlta = sexoIngresado;
			}else{
				if(notasIngresadas<notaMasbaja){
					notaMasbaja = notasIngresadas;
					sexoNotaMasBaja = sexoIngresado
				}
				if(notasIngresadas>notaMasAlta){
					notaMasAlta = notasIngresadas;
					sexoNotaMasAlta = sexoIngresado;
				}
			}*/
			if(sexoIngresado == "m" && notasIngresadas >= 6){
				contadorVarones++;
			}	
		}
	}

	alert("El promedio de las notas totales es: " + promedioNotasIngresadas + "\n" +
		  "La nota mas baja es: " + notaMasbaja + " y el sexo es: " + sexoNotaMasBaja + "\n" +
		  "La nota mas alta es: " + notaMasAlta + " y el sexo es: " + sexoNotaMasAlta + "\n" +
		  "La cantidad de varones con notas mayores o iguales a 6 son: " + contadorVarones);
}



