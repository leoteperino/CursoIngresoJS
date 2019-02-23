function mostrar()
{
	var mesDelAno;
	var mensaje;
	
	mesDelAno = mes.value;
	mensaje = "";
	
	switch(mesDelAno){
		case "Febrero":
			mensaje = mesDelAno + " tiene 28 días";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = mesDelAno + " tiene 30 días";
			break;
		default:
			mensaje = mesDelAno + " tiene 31 días";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN