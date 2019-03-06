function mostrar()
{
	var horaIngresada;
	var respuesta;

	horaIngresada = laHora.value;
	horaIngresada = parseInt(horaIngresada); 

	switch(horaIngresada){
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			resultado = "Es de mañana";
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			resultado = "Es de tarde";
		default:
			resultado = "Es de noche";
			if(horaIngresada < 24){
				resultado = resultado + " a dormir";
			}else{
				resultado = "ERROR. La Hora no es valida";
			}
			break;
	}
	alert(resultado);
}
