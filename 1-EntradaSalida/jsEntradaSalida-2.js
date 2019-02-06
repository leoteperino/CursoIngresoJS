/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//Esto es un comentario en JavaScript
	/*
	Esto es un comenmtario de bloque en JS
	*/

	//Guardo en la variable nomre lo que se ingresa por prompt "Harry Potter" es un predeterminado que se muestra 
	var nombre = prompt("Please enter your name", "Harry Potter");
	//Muestro lo que se Ingreso en la variable
	alert(nombre);

	/*
	Otra forma de hacerlo
	*/
	//Primero Declaro la variable
	var nombre;
	//Luego inicializo la variable y guardo lo que se ingresa por prompt
	nombre=prompt("Por favor Ingresa tu nombre");
	//Muestro lo que se guardo en la variable
	alert(nombre);
	//Si el contenido del alert tiene "" se escribe el literal, no es la variable
	alert("nombre");

}

