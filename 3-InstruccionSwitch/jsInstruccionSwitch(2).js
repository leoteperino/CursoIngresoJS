function mostrar()
{

	//tomo la edad  
	/*var mesDelAño = document.getElementById('mes').value;
	var mensaje = "";

	switch(mesDelAño){
		case "Enero":
			mensaje="Ya paso el invierno, ahora hace calor";
			break;
		case "Marzo":
			mensaje="Falta para el invierno";
			break;
		case "Julio":
			mensaje="Abrigate que hace Frio";
			break;
		case "Diciembre":
			mensaje="Ya paso el invierno, ahora hace calor";
			break;
	}
	if(mensaje =! ""){
		alert(mensaje);
	}*/
	
	var mesDelAño; 
	var mensaje; 
	
	mesDelAño = mes.value;
	mensaje="";

	switch(mesDelAño){
		case "Enero":
			mensaje = "Falta para el invierno";
			break;
		case "Julio":
			mensaje = "Abrigate que hace frio";
			break;
		case "Diciembre":
			mensaje = "Ya pasamos el frio, ahora hace calor";
			break;
	}
	
	if(mensaje != ""){
		alert(mensaje);
	}

}//FIN DE LA FUNCIÓN