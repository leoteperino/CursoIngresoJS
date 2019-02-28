function mostrar()
{
	/*=============
		For(Crear variables; condicion logica; ejecucion de algo){
	
		}

		var contador;
		for(contador = 0 ; contador < 10 ; contador++){
			console.log(contador);	
		}
	============*/
	
	var contador;
	var numeroRandom;
	var contador1 = 0;
	var contador2 = 0;
	var contador3 = 0;
	var contador4 = 0;
	var contador5 = 0;
	var contador6 = 0;
	var contador7 = 0;
	var contador8 = 0;
	var contador9 = 0;
	var contador10 = 0;

	for(contador=0; contador<100; contador++){
		numeroRandom = Math.floor((Math.random() * 10) + 1);
		switch(numeroRandom){
			case 1:
				contador1++;
				break;
			case 2:
				contador2++;
				break;
			case 3:
				contador3++;
				break;
			case 4:
				contador4++;
				break;
			case 5:
				contador5++;
				break;
			case 6:
				contador6++;
				break;
			case 7:
				contador7++;
				break;
			case 8:
				contador8++;
				break;
			case 9:
				contador9++;
				break;
			case 10:
				contador10++;
				break;
		}
	}

	console.log("El 1 salio " + contador1 + " veces y es el " + (contador1*100)/contador + "% de las veces");
	console.log("El 2 salio " + contador2 + " veces y es el " + (contador2*100)/contador + "% de las veces");
	console.log("El 3 salio " + contador3 + " veces y es el " + (contador3*100)/contador + "% de las veces");
	console.log("El 4 salio " + contador4 + " veces y es el " + (contador4*100)/contador  + "% de las veces");
	console.log("El 5 salio " + contador5 + " veces y es el " + (contador5*100)/contador  + "% de las veces");
	console.log("El 6 salio " + contador6 + " veces y es el " + (contador6*100)/contador  + "% de las veces");
	console.log("El 7 salio " + contador7 + " veces y es el " + (contador7*100)/contador  + "% de las veces");
	console.log("El 8 salio " + contador8 + " veces y es el " + (contador8*100)/contador  + "% de las veces");
	console.log("El 9 salio " + contador9 + " veces y es el " + (contador9*100)/contador  + "% de las veces");
	console.log("El 10 salio " + contador10 + " veces y es el " + (contador10*100)/contador  + "% de las veces");

	var palabra = "Luz Azul";
	for(i=0;i<palabra.length;i++){
		console.log(palabra[i]);	
	}

}