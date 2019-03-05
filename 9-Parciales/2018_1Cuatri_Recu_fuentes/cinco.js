function mostrar()
{
	var diasIngresados;
	var mensaje;

	diasIngresados = prompt("Ingrese un dia de la semana: ");

	mensaje = "";

	switch(diasIngresados){
		case "sabado":
		case "domingo":
			mensaje = "Buen Finde";
			break;
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			mensaje = "A trabajar";
			break;
		default:
			mensaje = "No es un dia valido";
			break;	
	}
	
	alert(mensaje);		
} 