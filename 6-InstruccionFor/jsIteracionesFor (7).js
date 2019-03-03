function mostrar()
{
	var numero;
	var numeroIngresado;
	var contador = 0;

	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);

	for(numeroIngresado = 0; numero > 1; )
	{
		numeroIngresado = numeroIngresado + 1;
		if(numero%numeroIngresado == 0)
		{
			document.write(numeroIngresado + "</br>");
			contador = contador + 1;
		}

		if(numeroIngresado == numero)
		{
			break;
		}

	}

	document.write("La cantidad de numeros divisores encontrados es: " + contador);


}//FIN DE LA FUNCIÓN