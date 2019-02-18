/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	//Declaro Variables
 	var lamparasIngresadas;
 	var marcaLampara;
 	var importeFinal;
 	//Todas estas variables estan de mas, no se debe hacer la multiplicacion varias veces.
 	//Correjir
 	var descuento_50;
 	var descuento_40;
 	var descuento_30;
 	var descuento_25;
 	var descuento_15;
 	var descuento_10;
 	var descuento_5;
 	var recargo_10;

 	//Inicializo las variables
 	lamparasIngresadas = Cantidad.value;
 	marcaLampara = Marca.value;
 	//Parseo las variables
 	lamparasIngresadas = parseInt(lamparasIngresadas);
 	importeFinal = lamparasIngresadas * 35;
 	descuento_50 = importeFinal * 0.5;
 	descuento_40 = importeFinal * 0.6;
 	descuento_30 = importeFinal * 0.7;
 	descuento_25 = importeFinal * 0.75;
 	descuento_15 = importeFinal * 0.85;
 	descuento_10 = importeFinal * 0.9;
 	descuento_5 = importeFinal * 0.95;
 	
 	//Logica
 	if (lamparasIngresadas > 5){
 		importeFinal = descuento_50; 
 	}else{
 		if(lamparasIngresadas == 5 ){
 			if(marcaLampara == "ArgentinaLuz"){
 				importeFinal =  0.6;
 			}else{
 				importeFinal = descuento_30;
 			}
 		}
 		if(lamparasIngresadas == 4){
 			if(marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas"){
 				importeFinal = descuento_25;
 			}else{
 				importeFinal = descuento_15;
 			}
 		}
 		if(lamparasIngresadas == 3){
 			if(marcaLampara == "ArgentinaLuz"){
 				importeFinal = descuento_15;
 			}else{
 				if(marcaLampara == "FelipeLamparas"){
 					importeFinal = descuento_10;
 				}else{
 					importeFinal = descuento_5;
 				}
 			}
 		}
 	}
 importeFinal * 0.6;
 	recargo_10 = (importeFinal * 10) / 100;
 	
 	if(importeFinal > 120){
 		alert("Usted pago: $" + recargo_10 + " de IIBB");
 		precioDescuento.value = importeFinal + recargo_10;
 	}else{
 		precioDescuento.value = importeFinal;
 	}
}
