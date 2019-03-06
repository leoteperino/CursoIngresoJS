function mostrar()
{
	/*var nombreAnimalIngresado;
	var pesoIngresado;
	var temparaturaHabitat;
	var respuesta;
	var contadorTemperaturasPares;
	var animalMasPesado;
	var nombreAnimalMasPesado;
	var temparaturaHabitatMasPesado;
	var contadorAnimalTemperatura;
	var contadorPeso;
	var acumuladorPeso;
	var promedioPesosIngresados;
	var pesoMaximoAnimalTemperaturaBajoCero;
	var animalMasPesadoTemperaturaBajoCero;
	var animalMenosPesadoTemperaturaBajoCero;

	respuesta = "si";
	contadorTemperaturasPares = 0;
	animalMasPesado = 0;
	contadorAnimalTemperatura = 0;
	contadorPeso = 0;
	acumuladorPeso = 0;
	animalMasPesadoTemperaturaBajoCero = 0;
	animalMenosPesadoTemperaturaBajoCero = 1000;

	while(respuesta == "si"){
		nombreAnimalIngresado = prompt("Ingrese el nombre de un animal: ");
		while(isNaN(nombreAnimalIngresado)==false){
			nombreAnimalIngresado = prompt("ERROR, Ingrese el nombre de un animal, no un numero: ");
		}

		pesoIngresado = prompt("Ingrese el peso ente 1 y 1000");
		pesoIngresado = parseInt(pesoIngresado);
		while(isNaN(pesoIngresado) || pesoIngresado < 1 || pesoIngresado > 1000){
			pesoIngresado = prompt("ERROR, Ingrese el peso entre 1 y 1000");
		}

		temparaturaHabitat = prompt("Ingrese la temperatura del habitat entre -30 y 30: ");
		temparaturaHabitat = parseInt(temparaturaHabitat);
		while(isNaN(temparaturaHabitat) || temparaturaHabitat < -30 || temparaturaHabitat > 30){
			temparaturaHabitat = prompt("ERROR, Ingrese la temperatura del habitat entre -30 y 30: ");
		}

		respuesta = prompt("Desea seguir Ingresando datos? SI o NO");
		while(respuesta != "si" && respuesta != "no"){
			respuesta = prompt("Desea seguir Ingresando datos? SI o NO");
		}

		if(temparaturaHabitat % 2 == 0){
			contadorTemperaturasPares++;
		}

		if(animalMasPesado < pesoIngresado){
			animalMasPesado = pesoIngresado;
			nombreAnimalMasPesado = nombreAnimalIngresado;
			temparaturaHabitatMasPesado = temparaturaHabitat;
		}

		if(temparaturaHabitat < 0){
			contadorAnimalTemperatura++;
			if(animalMasPesadoTemperaturaBajoCero < pesoIngresado){
				animalMasPesadoTemperaturaBajoCero = pesoIngresado;
			}else{
				if(animalMenosPesadoTemperaturaBajoCero > pesoIngresado){
				   animalMenosPesadoTemperaturaBajoCero = pesoIngresado;
				}
			}
		}

		if(pesoIngresado > 0){
			contadorPeso++;
			acumuladorPeso = pesoIngresado + acumuladorPeso;
			promedioPesosIngresados = acumuladorPeso / contadorPeso;
		}
	}

	document.write("La cantidad de temperaturas pares ingresadas es: " + contadorTemperaturasPares + "<br/>");
	document.write("El nombre del animal mas pesado es: " + nombreAnimalMasPesado  + " y su temperatura es: " + temparaturaHabitatMasPesado + "<br/>");
	document.write("La cantidad de animales que viven a menos de o grados es: " + contadorAnimalTemperatura  + "<br/>");
	document.write("El promedio del peso de todos los animales es: " + promedioPesosIngresados  + "<br/>");
	document.write("El peso maximo de todos los animales cuya temperatura es bajo Cero, es: " + animalMasPesadoTemperaturaBajoCero + "<br/>");
	document.write("El peso minimo de todos los animales cuya temperatura es bajo Cero, es: " + animalMenosPesadoTemperaturaBajoCero + "<br/>");*/

}
