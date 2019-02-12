function mostrar(){
	//tomo la edad
	var edadIngresada;

	edadIngresada = edad.value;

	edadIngresada = parseInt(edadIngresada);

	//Esto funciona tambien
	/*if (!(edadIngresada>12 && edadIngresada<18) ){	
		alert("No es adolescente");
	} */ 

	if (edadIngresada < 12 || edadIngresada > 18 ){	
		alert("No es adolescente");
	}


}//FIN DE LA FUNCIÓN