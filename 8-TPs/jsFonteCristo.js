/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares(){

 	var numeroPositivo = 0;
 	var numeroAnterior = 0;

 	numeroPositivo = numero.value;


 	while(numeroPositivo < 0)
 	{
 		numeroPositivo = prompt("Error, ingrese un numero positivo");
 	}
 	numeroPositivo = parseInt(numeroPositivo);



 	for(numeroAnterior = numeroPositivo ; numeroAnterior > -1 ;)
 	{
 		if(numeroAnterior%2 == 0)
 		{
 			alert(numeroAnterior);
 		}
 		numeroAnterior = numeroAnterior - 1;
 	}

}

function NumerosImpares()
{
	numeroPositivo = numero.value;

	while(numeroPositivo < 0)
 	{
 		numeroPositivo = prompt("Error, ingrese un numero positivo");
 	}
 	numeroPositivo = parseInt(numeroPositivo);



 	for(numeroAnterior = numeroPositivo ; numeroAnterior > -1 ;)
 	{
 		if(numeroAnterior%2 == 1)
 		{
 			alert(numeroAnterior);
 		}
 		numeroAnterior = numeroAnterior - 1;
 	}

} 

function NumerosDivisibles(){

	numeroPositivo = numero.value;

	while(numeroPositivo < 0)
 	{
 		numeroPositivo = prompt("Error, ingrese un numero positivo");
 	}
 	numeroPositivo = parseInt(numeroPositivo);	

 	for(numeroAnterior = numeroPositivo ; numeroAnterior > -1 ;)
 	{
 		if(numeroPositivo%numeroAnterior == 0)
 		{
 			alert(numeroAnterior);
 		}
 		numeroAnterior = numeroAnterior - 1;
 	}

}

function VerificarPrimo(){

	numeroPositivo = numero.value;

	while(numeroPositivo < 0)
 	{
 		numeroPositivo = prompt("Error, ingrese un numero positivo");
 	}
 	numeroPositivo = parseInt(numeroPositivo);	

 	for(numeroAnterior = numeroPositivo - 1; numeroAnterior > 1; numeroAnterior-- )
 	{
 		if(numeroPositivo%numeroAnterior == 0)
 		{
 			break;
 		}

 	}

 	if(numeroAnterior == 1)
 	{
 		alert("Es primo");
 	}
 	else
 	{
 		alert("No es primo");
 	}

}

function NumerosPrimos(){

	var contador = 0;

	numeroPositivo = numero.value;

	while(numeroPositivo < 0)
 	{
 		numeroPositivo = prompt("Error, ingrese un numero positivo");
 	}
 	numeroPositivo = parseInt(numeroPositivo);	

 	for(numeroAnterior = numeroPositivo - 1; numeroAnterior > 1; numeroAnterior-- )
 	{
 		if(numeroPositivo%numeroAnterior == 0)
 		{
 			contador = contador + 1;
 		}

 	}
 	
 	alert(contador + " numeros primos");


}