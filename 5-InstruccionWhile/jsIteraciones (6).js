function mostrar()
{

	/* var contador=0;
	var acumulador=0;
	var numeroIngresado;

	while(contador < 5){
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = numeroIngresado + acumulador;
		contador = contador + 1; 
	}

	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador; */
	
	/*var contador;
	var acumulador;
	var numeroIngresado;
	
	contador = 0;
	acumulador = 0;
	
	while(contador < 5){
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = numeroIngresado + acumulador;
		contador = contador + 1;
	}
	
	suma.value = acumulador;
	promedio.value = acumulador/contador;*/

	var numerosIngresados;
	var acumulador;
	var contador;

	acumulador = 0;
	contador = 0;

	while(contador < 5){
		contador = contador + 1; 
		numerosIngresados = prompt("Ingrese un Numero: ");
		numerosIngresados = parseInt(numerosIngresados);
		acumulador = numerosIngresados + acumulador;
	} 

	suma.value = acumulador;
	promedio.value = acumulador / contador;
}//FIN DE LA FUNCIÓN