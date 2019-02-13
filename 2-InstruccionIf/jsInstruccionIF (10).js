function mostrar()
{
	var notaRandom;
	//Genero el número RANDOM entre 1 y 10
	notaRandom = Math.floor((Math.random() * 10) + 1);

	if(notaRandom > 8){
		alert("EXCELENTE" + "\n" + "Su nota fue un: " + notaRandom);
	}else{
		if(notaRandom > 3){
			alert("Aprobo" + "\n" + "Su nota fue un: " + notaRandom);
		}else{
			alert("Vamos la proxima se puede" + "\n" + "Su nota fue un: " + notaRandom);
		}
	}
}//FIN DE LA FUNCIÓN