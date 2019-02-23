function mostrar()
{
	//tomo la edad  
	/*var mesDelAño = document.getElementById('mes').value;
	var mensaje = "";

	switch(mesDelAño){
		case "Enero":
			mensaje="Que comiences bien el año";
			break;
		case "Marzo":
			mensaje="A clases!!";
			break;
		case "Julio":
			mensaje="Se vienen las vacaciones!!";
			break;
		case "Diciembre":
			mensaje="Felices Fiestas!!";
			break;
	}
	if(mensaje =! ""){
		alert(mensaje);
	}*/
	
	var mesDelAño; 
	var mensaje; 
	
	mesDelAño = mes.value;
	mensaje = "";

	switch(mesDelAño){
		case "Enero":
			mensaje = "Que comiences biren el año";
			break;
		case "Marzo":
			mensaje = "A clases!!";
			break;
		case "Julio":
			mensaje = "Se vienen las  vacaciones";
			break;
		case "Diciembre":
			mensaje = "Felices Fiestas!!!";
			break;
	}

	if(mensaje != ""){
		alert(mensaje);
	}
}//FIN DE LA FUNCIÓN