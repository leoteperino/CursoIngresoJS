function mostrar()
{
	var notasIngresadas;
	var sexoIngresado;
	var contador;
	var acumuladorNotas;
	var promedio;
	var acumuladorNotasBajas;
	var sexo;
	var acumuladorVarones;

	contador = 0;
	acumuladorNotas = 0;
	acumuladorNotasBajas = 0;
	acumuladorVarones = 0;

	while(contador < 5){
		contador++;
		notasIngresadas = prompt("Ingrese Notas: ");
		notasIngresadas = parseInt(notasIngresadas);
		while(notasIngresadas > 10){
			notasIngresadas = prompt("Ingreso una nota no valida. Ingrese notas del 0 al 10");
			notasIngresadas = parseInt(notasIngresadas);
		}
		sexoIngresado = prompt("Ingrese el sexo: ");
		while(sexoIngresado != "f" && sexoIngresado != "m"){
			sexoIngresado = prompt("Sexo no valido; Ingrese m o f: ");
		}
		acumuladorNotas = notasIngresadas + acumuladorNotas;
		promedio = acumuladorNotas/contador;
		console.log(sexoIngresado);
		if(contador == 1){
			acumuladorNotasBajas = notasIngresadas;
			sexo = sexoIngresado;
		}else{
			if(notasIngresadas < acumuladorNotasBajas){
				acumuladorNotasBajas = notasIngresadas;	
				sexo = sexoIngresado;
			}
		}
		if(sexoIngresado == "m" && notasIngresadas >= 6){
			acumuladorVarones = notaIngresada;
		}
	}

	alert(acumuladorVarones);		
}



