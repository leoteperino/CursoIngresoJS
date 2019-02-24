function mostrar()
{

	/*var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta == "si"){
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = numeroIngresado + acumulador;
		contador = contador + 1;
		respuesta = prompt("Ingrese si para continuar sumando"); 
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;*/

	var numerosIngresados;
	var acumulador;
	var contador;
	var respuesta;

	acumulador = 0;
	contador = 0;
	respuesta = "si";

	while(respuesta  != "no"){
		contador = contador + 1;
		numerosIngresados = prompt("Ingrese un Numero: ");
		numerosIngresados = parseInt(numerosIngresados);
		acumulador = numerosIngresados + acumulador;
		respuesta = prompt("Desea continuar Ingresando Numeros?");
	} 

	suma.value = acumulador;
	promedio.value = acumulador / contador;

}//FIN DE LA FUNCIÓN