/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var operadoresLogicos;
var primerNumero;
var segundoNumero;

function comenzar()
{
	operadoresLogicos = new Array('1','2','3','4');
	operadoresLogicos = operadoresLogicos[Math.floor(Math.random()*operadoresLogicos.length)];

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	primerNumero = Math.floor((Math.random() * 10) + 1);
	segundoNumero =Math.floor((Math.random() * 10) + 1);

	PrimerNumero.value = primerNumero;
	SegundoNumero.value = segundoNumero;

	if(operadoresLogicos == 1){
		Operador.value = +;
	}
	if(operadoresLogicos == 2){
		Operador.value = -;
	}
	if(operadoresLogicos == 3){
		Operador.value = *;
	}
}//FIN DE LA FUNCIÓN

function Responder()
{
	alert(respuesta);
}//FIN DE LA FUNCIÓN
