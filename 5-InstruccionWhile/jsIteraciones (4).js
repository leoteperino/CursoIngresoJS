function mostrar()
{

	/*var numeroIngresado;
	
	numeroIngresado = prompt("Ingresar un numero entre 0 y 9 inclusive");
	
	numeroIngresado = parseInt(numeroIngresado);
	
	console.log(numeroIngresado);
	
	while(numeroIngresado > 9 || numeroIngresado < 0){
		alert("Ese no es un numero del 0 al 9" +"\n"+ "Ingrese los numeros que se le solicitaron");
		numeroIngresado = 0;
	}
	
	if(numeroIngresado > 0){
		alert("Numero Correcto!!");
		Numero.value = numeroIngresado;	
	}*/

	var numerosIngresados;

	numerosIngresados = prompt("Ingrese solo numeros del 0 al 9 inclusive: ");

	numerosIngresados = parseInt(numerosIngresados);

	while(numerosIngresados > 9 || numerosIngresados == ""){
		numerosIngresados = prompt("El " + numerosIngresados + " no es un numero valido." + "\n" + 
								   "Ingrese solo numeros del 0 al 9 inclusive: ");
	}

	Numero.value = numerosIngresados;
	alert("Numero Validado al dar OK, su numero se pegara en la ventana de abajo");
	
}//FIN DE LA FUNCIÓN