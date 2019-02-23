function mostrar()
{
	var mesDelAno;
	var mensaje;
	
	mesDelAno = mes.value;
	mensaje = "";
	
	switch(mesDelAno){
		case "Febrero":
			mensaje = "Este mes no tiene mas de 29 dias";
			break;
		default:
			mensaje = "Este mes tiene 30 o mas dias";
			break;
	}
	
	alert(mensaje);
	


}//FIN DE LA FUNCIÓN