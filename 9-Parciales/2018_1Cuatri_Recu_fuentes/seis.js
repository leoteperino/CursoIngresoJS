function mostrar()
{
	var notaIngresada;
	var mensaje;

	mensaje = "";

	notaIngresada = prompt("Ingrese una nota: ");
	notaIngresada = parseInt(notaIngresada);

	switch(notaIngresada){
		case 0:
		case 1:
		case 2:
		case 3:
			mensaje = "La proxima se puede";
			break;
		case 4:
		case 5:
		case 6:
			if(notaIngresada == 4){
				mensaje = "Raspando, debes preocuparte más.";
			}else{
				mensaje = "Raspando";
			}
			break;
		default:
			if(notaIngresada >  8 && notaIngresada < 11){
				mensaje = "Aprobo, Muy Bien!";
			}else{
				mensaje = "Aprobo";
			}
			if(isNaN(notaIngresada) || notaIngresada > 10){
					mensaje = "ERROR, la nota ingresada no es valida"
				}
			break;
	}

	alert(mensaje);
}
