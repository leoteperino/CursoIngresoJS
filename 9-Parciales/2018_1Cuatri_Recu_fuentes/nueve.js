function mostrar()
{
		var nombreIngresado;
		var pesoIngresado;
		var temperaturaIngresada;
		var respuesta;
		var seguirIngresando;

		respuesta = "si"; 

		while(respuesta == "si"){
			nombreIngresado = prompt("Ingrese el nombre de un animal: ");
			while(!isNaN(nombreIngresado)){
				nombreIngresado = prompt("ERROR. Le dije que Ingrese un nombre, no un numero");
			}
			pesoIngresado = prompt("Ingrese el peso, debe ser entre 1 y 1000: ");
			pesoIngresado = parseInt(pesoIngresado);
			while(pesoIngresado == 0 || pesoIngresado > 1000){
				pesoIngresado = prompt("ERROR. le dije entre 1 y 1000, Ingreselo nuevamente: ");
			}
			temperaturaIngresada = prompt("Ingrese la temperatura entre -30 y 30:"); 
			respuesta = prompt("Desea seguir ingresando animales? si o no?")
			
		}




}
