function mostrar()
{
	//Declaro variables
	var productos;
	var descuentoProductos;
	var gasto;
	var descuentoGasto;
	var tipoPago;
	var recargoTarjeta;

	//Inicializo variables
	productos = prompt("Ingrese la cantidad de productos que desea comprar");
	gasto = prompt("Cuanto dinero piensa gastar?");
	tipoPago = prompt("Ingrese el tipo de pago: "+"\n"+
						  "Opcion 1 : Efectivo"+"\n"+
						  "Opcion 2 : Tarjeta de Credito"); 
	descuentoProductos = gasto * 0.9;
	descuentoGasto = gasto * 0.85;
	recargoTarjeta = gasto * 1.1;

	//Parseo las variables
	productos = parseInt(productos);
	gasto = parseInt(gasto);

	//Logica
	if(productos > 2){
		gasto = descuentoProductos;
	}else{
		if(gasto > 2000){
			gasto = descuentoGasto;
		}else{
			if(tipoPago == 2){
				gasto = recargoTarjeta;
			}
		}
	}

	alert("Usted a gastado: $" + gasto);
}
