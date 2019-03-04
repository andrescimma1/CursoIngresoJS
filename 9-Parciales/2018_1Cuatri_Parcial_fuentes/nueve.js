function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var respuesta = 'si';
	var contadorTemperaturas = 0;
	var contador = 0;
	var maximoPeso, maximaMarca;
	var temperaturasA0 = 0;
	var minimoPeso;
	var promedio = 0;

	while(respuesta == 'si')
	{
		contador = contador + 1;

		marca = prompt("Ingrese la marca del producto");
		peso = prompt("Ingrese el peso del producto entre 1 y 100");

		while(peso < 1 || peso > 100)
		{
			peso = prompt("Error, ingrese el peso del producto entre 1 y 100");
		}
		peso = parseInt(peso);

		promedio = promedio + peso;

		temperatura = prompt("Ingrese la temperatura de almacenamiento entre -30 y 30");
		temperatura = parseInt(temperatura);

		while(temperatura < -30 || temperatura > 30)
		{
			temperatura = prompt("Error, ingrese la temperatura de almacenamiento entre -30 y 30");
		}

		if(temperatura%2 == 0)
		{
			contadorTemperaturas = contadorTemperaturas + 1;
		}

		if(contador == 1)
		{
			maximoPeso = peso;
			maximaMarca = marca;
			minimoPeso = peso;
		}
		else
		{
			if(peso > maximoPeso)
			{
				maximoPeso = peso;
				maximaMarca = marca;
			}

			if(peso < minimoPeso)
			{
				minimoPeso = peso;
			}
		}

		if(temperatura < 0)
		{
			temperaturasA0 = temperaturasA0 + 1;
		}

		


		respuesta = prompt("Ingrese 'si' para continuar");
	}

	promedio = promedio / contador;

	document.write("La cantidad de temperaturas pares es: " + contadorTemperaturas);
	document.write("</br>La marca del producto mas pesado es: " + maximaMarca);
	document.write("</br>La cantidad de productos que se conservan a menos de 0 grados es de: " + temperaturasA0);
	document.write("</br>El promedio del peso de todos los productos es: " + promedio);
	document.write("</br>El peso máximo es: " + maximoPeso + " y el peso minimo es: " + minimoPeso);

}
