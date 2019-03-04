function mostrar()
{
	var letra;
	var numero;
	var respuesta = "si";
	var numerosPares = 0;
	var numerosImpares = 0;
	var numeroDeCeros = 0;
	var numerosPositivos = 0;
	var contadorPositivos = 0;
	var promedioPositivos = 0;
	var numerosNegativos = 0;
	var contador = 0;
	var maximo, minimo, numMax, numMin, letraMax , letraMin;

	while(respuesta == "si")
	{
		contador = contador + 1;
		letra = prompt("Ingrese una letra");
		numero = prompt("Ingrese un numero entre -100 y 100");

		numero = parseInt(numero);

		while(numero < -100 || numero > 100)
		{
			numero = prompt("Error, ingrese un numero entre -100 y 100");
		}

		if(numero%2 == 0)
		{
			numerosPares = numerosPares + 1;
		}

		if(numero%2 == 1)
		{
			numerosImpares = numerosImpares + 1;
		}

		if(numero == 0)
		{
			numeroDeCeros = numeroDeCeros + 1;
		}

		if(numero >= 0)
		{
			contadorPositivos = contadorPositivos + 1;
			numerosPositivos = numerosPositivos + numero;
		}

		if(numero < 0)
		{
			numerosNegativos = numerosNegativos + numero;
		}

		if(contador == 1)
		{
			numMax = numero;
			numMin = numero;
			letraMax = letra;
			letraMin = letra;
		}
		else
		{
			if(numero > numMax)
			{
				numMax = numero;
				letraMax = letra;
			}

			if(numero < numMin)
			{
				numMin = numero;
				letraMin = letra;
			}
		}
		respuesta = prompt("Ingrese 'si' para continuar");

	}

	promedioPositivos = numerosPositivos / contadorPositivos;

	document.write("La cantidad de números pares es: " + numerosPares);
	document.write("</br>La cantidad de números impares es: " + numerosImpares);
	document.write("</br>La cantidad de ceros es: " + numeroDeCeros);
	document.write("</br>El promedio de todos los números positivos ingresados es: " + promedioPositivos);
	document.write("</br>La suma de todos los números negativos es: " + numerosNegativos);
	document.write("</br>El numero y la letra del maximo son: " + numMax + letraMax + ". Y el numero y la letra del minimo son: " + numMin + letraMin);

}
