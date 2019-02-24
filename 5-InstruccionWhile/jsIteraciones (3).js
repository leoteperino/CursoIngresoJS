function mostrar()
{

	/*var clave;
	
	clave = prompt("Ingresar Password: ");
	
	while(clave != "utn750"){
		alert("Clave Incorrecta!");
		clave = prompt("Ingresar Password: ");
	}
	
	alert("Clave correcta!");*/
	
	var clave;

	clave = prompt("Ingrese una clave: ");

	while(clave != "utn750"){
		clave = prompt("Clave incorrecta" + "\n" + "Ingrese una clave: ");
	}

	alert("Clave correcta!!");

}//FIN DE LA FUNCIÓN
