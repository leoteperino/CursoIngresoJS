function mostrar()
{
	//tomo la edad  
	/*var laHora = document.getElementById('hora').value;

	switch(laHora){
		case "7":
			alert("Es de mañana");
			break;
		case "8":
			alert("Es de mañana");
			break;
		case "9":
			alert("Es de mañana");
			break;
		case "10":
			alert("Es de mañana");
			break;
		case "11":
			alert("Es de mañana");
			break;
	}*/
	
	var horasDelDia;
	var mensaje;
	
	horasDelDia = hora.value;
	mensaje = "";
	
	horasDelDia = parseInt(horasDelDia);
	
	switch(horasDelDia){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana";
			break;
	}
	if(mensaje != ""){
		alert(mensaje);
	}
}//FIN DE LA FUNCIÓN