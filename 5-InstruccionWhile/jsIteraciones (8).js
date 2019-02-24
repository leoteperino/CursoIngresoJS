function mostrar()
{
	var numerosIngresados;
	var acumuladorPositivos;
	var acumuladorNegativos;
	var respuesta;

	acumuladorPositivos = 0;
	acumuladorNegativos = 1;
	respuesta = "si";

	while(respuesta != "no"){
		numerosIngresados = prompt("Ingrese un numero: ");
		numerosIngresados = parseInt(numerosIngresados);
			if(numerosIngresados > 0){
				acumuladorPositivos = acumuladorPositivos + numerosIngresados;
			}else{
				acumuladorNegativos = acumuladorNegativos * numerosIngresados;
			}
		respuesta = prompt("Si desea continuar coloque si");
	}

    suma.value = acumuladorPositivos;
    producto.value = acumuladorNegativos;

}//FIN DE LA FUNCIÓN