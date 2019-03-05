function mostrar()
{
	//Declaro variables
	/*var tipoPago;
	var paquete;
	var precioFinal;
	var precio = 10000;

	//Inicializo variables
	tipoPago = prompt("Ingrese un tipo de pago");
	paquete = prompt("Ingrese un paquete");

	switch(tipoPago){
		case "visa":
			precioFinal = precio * 0.1;
		break;
		case "paypal":
			precioFinal = precio * 0.15
			switch(paquete){
				case "todo incluido":
					precioFinal = precio *0.1
					break;
			}
			break;
		case "mercado pago":
			precioFinal = precio * 0.1;
			break;
		case "efectivo":
			precioFinal = precio * 0.8;
			switch(paquete){
				case "solo desayuno":
					precioFinal = precio * 0.1;
					break;
				case "todo incluido":
					precioFinal = precio * 0.15
					break;
			}
			break;
		default:
			precioFinal = precio * 0.05;
			break;
	}

	alert("Usted debe pagar: " + precioFinal);*/

	var planetaIngresado;
	var resultado;

	planetaIngresado = prompt("Ingrese un planeta: ");
	resultado = "";

	switch(planetaIngresado){
		case "tierra":
			resultado = "Aqui vivimos";
			break;
		case "mercurio":
		case "venus":
			resultado = "Aca hace mas calor";
			break;
		case "marte":
		case "jupiter":
		case "urano":
		case "neptuno":
		case "saturno":
			resultado = "Aca hace más frio";
			break;
		default:
			resultado = "ERROR. Este no es un planeta. DATO NO VALIDO";
			break;
	}

	alert(resultado);

}
