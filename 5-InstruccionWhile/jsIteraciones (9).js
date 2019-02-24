function mostrar()
{

	var numerosIngresados;
	var respuesta;
	var acumuladorMaximo;
	var acumuladorMinimo;

	respuesta = "si";
	acumuladorMaximo = 0;
	acumuladorMinimo = 0;

	while(respuesta != "no"){
		numerosIngresados = prompt("Ingrese un numero: ");
		numerosIngresados = parseInt(numerosIngresados);

		if(acumuladorMaximo < numerosIngresados){
				acumuladorMaximo = numerosIngresados;
		}else{
				acumuladorMinimo = numerosIngresados;
		}

		respuesta = prompt("Si desea seguir ingresando numeros coloque si");
	}

	maximo.value = acumuladorMaximo;
	minimo.value = acumuladorMinimo;



}//FIN DE LA FUNCIÓN