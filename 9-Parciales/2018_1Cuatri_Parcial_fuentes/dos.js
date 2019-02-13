function mostrar()
{
	/*var nombre;
	var localidad;

	nombre = elNombre.value;
	localidad = laLocalidad.value;

	alert("Usted es " + nombre + " y vive en la localidad de " + localidad);  */

	//Ejercicio 2
	var ingresaPrecio;
	var porcentaje;
	var precioFinal;

	ingresaPrecio = prompt("Ingrese el Precio");

	ingresaPrecio = parseInt(ingresaPrecio);
	
	porcentaje = (ingresaPrecio * 10) / 100;

	precioFinal = ingresaPrecio + porcentaje;

	alert("El precio en efectivo es: $" + ingresaPrecio + "\n" + 
		  "Con tarjeta ha y un recargo del 10% que es: $" + porcentaje + "\n" +
		  "El precio final del producto es: $" + precioFinal);

}
