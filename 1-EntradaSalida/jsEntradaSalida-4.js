/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//En casa:
	/*
	var dato
	dato = prompt("Ingrese un dato");
	document.getElementById("elNombre").value = dato;
	*/

	//En clase:
	var nombre;
	nombre = prompt("Por favor Ingrese su dato");
	//elNombre.value = nombre; //Esto es igual a lo de abajo pero no funciona con Explorer
	document.getElementById("elNombre").value = nombre;

}
	

