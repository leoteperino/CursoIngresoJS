function mostrar()
{
	var sexoIngresado;
	
	sexoIngresado = prompt("Ingresar su sexo");
	
	while(sexoIngresado != "f" && sexoIngresado != "m"){
		sexoIngresado = prompt("Ingresar su sexo");
		alert("clave Incorrecta!!")
	}
	
	if(sexoIngresado == "f" || sexoIngresado == "m"){
		alert("Dato correcto");
		Sexo.value = sexoIngresado;
	}

}//FIN DE LA FUNCIÓN