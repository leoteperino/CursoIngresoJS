function mostrar()
{
	//tomo la edad  
	/*var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada = edad.value;
	estadoCivilIngresado = estadoCivil.value;

	if(edadIngresada < "18" && estadoCivilIngresado != "Soltero"){
		alert("Es muy pequeño para no ser soltero")
	}*/

	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada = edad.value;

	estadoCivilIngresado = estadoCivil.value;

	if(edadIngresada < 18 && estadoCivilIngresado == "Soltero"){
		alert("Es muy joven para ser soltero");
	}

}//FIN DE LA FUNCIÓN