function mostrar()
{
	/*var sexoIngresado;
	
	sexoIngresado = prompt("Ingresar su sexo");
	
	while(sexoIngresado != "f" && sexoIngresado != "m"){
		sexoIngresado = prompt("Ingresar su sexo");
		alert("clave Incorrecta!!")
	}
	
	if(sexoIngresado == "f" || sexoIngresado == "m"){
		alert("Dato correcto");
		Sexo.value = sexoIngresado;
	}*/

	var sexo;

	sexo = prompt("Ingrese sexo: ");

	while(sexo != "m" && sexo != "f"){
		sexo = prompt(sexo + " no es valido" + "\n" + "Ingrese sexo: ");
	}

	alert("Su sexo aparecera escrito en el cuadro de abajo.");
	Sexo.value = sexo;

}//FIN DE LA FUNCIÓN