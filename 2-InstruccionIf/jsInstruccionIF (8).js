function mostrar()
{
	//tomo la edad  
	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada = edad.value;
	estadoCivilIngresado = estadoCivil.value;

	if(edadIngresada > "17" && estadoCivilIngresado == "Soltero"){
		alert("Es soltero y no es menor");
	}
}//FIN DE LA FUNCIÓN