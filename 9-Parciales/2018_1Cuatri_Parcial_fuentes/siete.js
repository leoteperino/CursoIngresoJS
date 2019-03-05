function mostrar()
{
	var notasIngresadas;
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
		  "La cantidad de varones con notas mayores a 6 son: " + contadorNotaVarones);
}
