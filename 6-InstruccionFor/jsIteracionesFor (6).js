function mostrar()
{

	var numero = 1;
	var contador = 0;
	var numeroIngresado;

	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);


	for(numeroIngresado = 1; numero > 1; )
	{
		numeroIngresado = numeroIngresado + 1;
		if(numeroIngresado%2 == 0)
		{
			alert(numeroIngresado);
			contador = contador + 1;
		}

		if(numeroIngresado == numero)
		{
			break;
		}

	}

	alert("La cantidad de numeros pares es de: " + contador);


}//FIN DE LA FUNCIÓN