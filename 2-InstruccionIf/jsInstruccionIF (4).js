function mostrar()
{
	//tomo la edad
	var edadIngresada;

	edadIngresada = edad.value;

	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada > 12 && edadIngresada < 18 ){	
		alert("Es adolescente");
	}

}//FIN DE LA FUNCIÓN