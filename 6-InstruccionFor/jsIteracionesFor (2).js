function mostrar()
{
	//Ver si un nuemero es primo.
	var numeroIngresado;
	var numeroAnterior;
	var recorrido;

	numeroIngresado= prompt("Ingrese un Número: ");
	numeroIngresado= parseInt(numeroIngresado);

	for(recorrido=numeroIngresado-1; recorrido>1; recorrido--){
		for(numeroAnterior=recorrido-1; numeroAnterior>1; numeroAnterior--){
			if(numeroAnterior % numeroIngresado==0){
				console.log(numeroAnterior + " es primo");
				break;
			}
			if(numeroAnterior == 1){
				console.log("Es primo " + recorrido);
			}
		}
	}

	// if(numeroAnterior==1){
	// 	console.log("es primo");
	// }else{
	// 	console.log("no es primo");
	// }
}