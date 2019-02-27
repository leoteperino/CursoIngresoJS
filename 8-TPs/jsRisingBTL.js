/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	 var edadIngresada;
	 var sexoIngresado;
	 var estadoCivilIngresado;
	 var sueldoBrutoIngresado;
	 var numeroLegajoIngresado;
	 var nacionalidadIngresada;

	 edadIngresada = prompt("Ingrese la edad: ");
	 edadIngresada = parseInt(edadIngresada);

	while(isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90){
	 	 edadIngresada = prompt("Error, Ingrese la edad");
	 }

	 sexoIngresado = prompt("Ingrese sexo: ");

	 while(sexoIngresado != "f" && sexoIngresado != "m"){
	 		sexoIngresado = prompt("Error, Ingresa de nuevo: ");
	 } 

	 estadoCivilIngresado = prompt("Ingrese estado civil: ");
	 estadoCivilIngresado = parseInt(estadoCivilIngresado);

	 while(isNaN(estadoCivilIngresado) || estadoCivilIngresado <= 0 || estadoCivilIngresado > 4){
	 	estadoCivilIngresado = prompt("Error, Ingrese de nuevo");
	 } 

	 sueldoBrutoIngresado = prompt("Ingrese sueldo: ");
	 sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);

	 while(isNaN(sueldoBrutoIngresado) || sueldoBrutoIngresado < 8000 ){
	 	sueldoBrutoIngresado = prompt("Error, Ingrese de nuevo: ");
	 }

	 numeroLegajoIngresado = prompt("Ingrese el numero de Legajo");
	 numeroLegajoIngresado = parseInt(numeroLegajoIngresado);

	 while(isNaN(numeroLegajoIngresado) || numeroLegajoIngresado < 1000 || numeroLegajoIngresado < 0){
	 	numeroLegajoIngresado = prompt("Error, Ingrese de nuevo: ");
	 }

	 nacionalidadIngresada = prompt("Ingrese la nacionalidad: ");

	 while(nacionalidadIngresada != "a" && nacionalidadIngresada != "e" && nacionalidadIngresada != "n"){
	 	nacionalidadIngresada = prompt("Error, Ingrese de nuevo: "); 
	 }

	 Edad.value=edadIngresada;
	 Sexo.value=sexoIngresado;
	 EstadoCivil.value=estadoCivilIngresado;
	 Sueldo.value=sueldoBrutoIngresado;
	 Legajo.value=numeroLegajoIngresado;
	 Nacionalidad.value=nacionalidadIngresada;


 
}
