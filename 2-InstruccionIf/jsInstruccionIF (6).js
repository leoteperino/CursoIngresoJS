function mostrar()
{
	//tomo la edad 
	var edadIngresada;

	edadIngresada = edad.value;

	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada > 17){
		alert("Usted es mayor de edad");
	}else{
		if(edadIngresada<13){
			alert("Usted es un niño");
		}else{
			alert("Usted es un adolescente");
		}
	} 
}//FIN DE LA FUNCIÓN