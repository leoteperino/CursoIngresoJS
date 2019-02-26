function mostrar()
{
	var notasIngresadas;
	var sexoIngresado;
	var contador;
	var acumuladorNotas;
	var promedio;
	var acumuladorNotasBajas;
	var acumuladorNotasAltas;
	var sexo;

	contador = 0;
	acumuladorNotas = 0;
	acumuladorNotasBajas = 11;
	acumuladorNotasAltas = 0;


	while(contador < 5){
		contador ++;
		notasIngresadas = prompt("Ingrese su nota: ");
		notasIngresadas = parseInt(notasIngresadas);

		while(notasIngresadas > 10){
			notasIngresadas = prompt("Ingrese solo notas del 0 al 10: ");
			notasIngresadas = parseInt(notasIngresadas);
		}

		sexoIngresado = prompt("Ingresar su sexo: ");
		while(sexoIngresado != "f" && sexoIngresado != "m"){
			sexoIngresado = prompt("Ingreso un sexo no valido, Ingrese m o f: ");
		}

		if(notasIngresadas>0){
			acumuladorNotas = acumuladorNotas + notasIngresadas;
			promedio = acumuladorNotas / contador;
			if(acumuladorNotasBajas > notasIngresadas){
				acumuladorNotasBajas = notasIngresadas;
				sexo = sexoIngresado;
			} 
		}

		if(sexoIngresado == "m"){
			if(acumuladorNotasAltas < notasIngresadas){
				acumuladorNotasAltas = notasIngresadas;
				sexo = sexoIngresado;
			}
		}
	}

	alert(acumuladorNotasAltas + " " + sexo);
}

