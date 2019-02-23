function mostrar()
{

	var clave;
	
	clave = prompt("Ingresar Password: ");
	
	while(clave != "utn750"){
		alert("Clave Incorrecta!");
		clave = prompt("Ingresar Password: ");
	}
	
	alert("Clave correcta!");
	
}//FIN DE LA FUNCIÓN
