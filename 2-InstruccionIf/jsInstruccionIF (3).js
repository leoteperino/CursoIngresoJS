function mostrar()
{
	//tomo la edad
	var edadIngresada;

	edadIngresada = edad.value;

	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada > 17){	
		alert("Es mayor de edad");
	}else{
		alert("Es menor de edad");
	} 

}//FIN DE LA FUNCIÓN