function mostrar()
{
	var marcaProductoIngresada;
	var pesoProductoIngresado;
	var temperaturaAlmacenamiento;
	var respuesta;
	var contadorTemperaturasPares;
	var productoMasPesado;
	var marcaProductoMasPesado;
	var contadorProductosBajoCero;
	var contadorPesoProductos;
	var acumuladorPesoProductos;
	var promedioPesoProductos;
	var acumuladorPesoMaximo;
	var acumuladorPesoMinimo;

	respuesta = "si";
	contadorTemperaturasPares = 0;
	productoMasPesado = 0;
	contadorProductosBajoCero = 0;
	contadorProductos = 0;
	acumuladorPesoProductos = 0;
	acumuladorPesoMaximo = 0;
	acumuladorPesoMinimo = 0;
	contadorPesoProductos = 0;

	while(respuesta == "si"){
		marcaProductoIngresada = prompt("Ingrese la marca del producto:");
		while(isNaN(marcaProductoIngresada) == false){
			marcaProductoIngresada = prompt("ERROR. Ingrese la marca del producto:");
		}

		pesoProductoIngresado = prompt("Ingrese el peso del producto, entre 1 y 100: ");
		pesoProductoIngresado = parseInt(pesoProductoIngresado);
		while(isNaN(pesoProductoIngresado) || pesoProductoIngresado < 1 || pesoProductoIngresado > 100){
			pesoProductoIngresado = prompt("ERROR. Ingrese el peso del producto, entre 1 y 100: ");
		}
		contadorPesoProductos++;

		temperaturaAlmacenamiento = prompt("Ingrese la temperatura de almacenamiento, entre -30 y 30: ");
		temperaturaAlmacenamiento = parseInt(temperaturaAlmacenamiento);
		while(isNaN(temperaturaAlmacenamiento) || temperaturaAlmacenamiento < -30 || temperaturaAlmacenamiento > 30){
			temperaturaAlmacenamiento = prompt("ERROR. Ingrese la temperatura de almacenamiento, entre -30 y 30: ");
		}

		respuesta = prompt("Desea seguir ingresando datos? SI o NO");
		while(respuesta != "si" && respuesta != "no"){
			respuesta = prompt("ERROR. Desea seguir ingresando datos? SI o NO");
		}

		if(temperaturaAlmacenamiento % 2 == 0){
			contadorTemperaturasPares++;
		}

		if(productoMasPesado < pesoProductoIngresado){
			productoMasPesado = pesoProductoIngresado;
			marcaProductoMasPesado = marcaProductoIngresada;
		}

		if(temperaturaAlmacenamiento < 0){
			contadorProductosBajoCero++;
		}

		if(contadorPesoProductos > 0){
			acumuladorPesoProductos = acumuladorPesoProductos + pesoProductoIngresado;
			promedioPesoProductos = acumuladorPesoProductos / contadorPesoProductos;
			if(acumuladorPesoMaximo < pesoProductoIngresado){
				acumuladorPesoMaximo = pesoProductoIngresado;
			}else{
				acumuladorPesoMinimo = pesoProductoIngresado;
			}

		}
	}

	document.write("La cantidad de temperaturas pares es: " + contadorTemperaturasPares + "<br/>");
	document.write("La marca del producto mas pesado es: " + marcaProductoMasPesado + "<br/>");
	document.write("La cantidad de productos que estan a menos de cero grados es: " + contadorProductosBajoCero + "<br/>");
	document.write("El promedio de peso de todos los productos es: " + promedioPesoProductos + "<br/>");
	document.write("El peso maximo es: " + acumuladorPesoMaximo + "<br/>");
	document.write("El peso minimo es: " + acumuladorPesoMinimo);
	
}
