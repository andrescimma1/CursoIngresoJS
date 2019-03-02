/*		Realizar el algoritmo que permita el ingreso por prompt de las velocidades en
	kilómetros (validar entre 0 y 250) , el tipo de combustible, validar el tipo “s” o “l”
	para solido o liquido, de 5 vehículos de prueba ,informar por alert:
		1-El promedio de las velocidades totales.
		2-La velocidad más baja y el tipo de combustible de ese vehículo.
		3-La cantidad de combustibles líquidos que su velocidad supere los 100
		kilómetros.
		4-la velocidad más alta de los de combustible sólido
*/



function mostrar()
{
	var velocidadKm;
	var combustible;
	var vehiculos = 0;
	var velocidadPromedio = 0;
	var combustibleMinimo;
	var minimo;
	var velocidad100 = 0;
	var maximoSolido = 0;

	//Validando un total de 5 vehiculos
	while(vehiculos < 5)
	{
		vehiculos = vehiculos + 1;

		velocidadKm = prompt("Para el vehiculo #" + vehiculos + " Ingrese una velocidad entre 0 y 250: ");
		velocidadKm = parseInt(velocidadKm);

		while(velocidadKm < 0 || velocidadKm > 250)
		{
			velocidadKm = prompt("Error, ingrese una velocidad entre 0 y 250: ");
		}

		velocidadPromedio = velocidadPromedio + velocidadKm;

		combustible = prompt("Para el vehiculo #" + vehiculos + "Ingrese el tipo de combustible: 's' para solido o 'l' para liquido: ");

		while(combustible != "s" && combustible != "l")
		{
			combustible = prompt("Error, ingrese el tipo de combustible: 's' para solido o 'l' para liquido: ");
		}

		//Buscando el vehiculo con la velocidad mas baja y su tipo de combustible
		if(vehiculos == 1)
		{
			minimo = velocidadKm;
			maximo = velocidadKm;
			combustibleMinimo = combustible;
		}
		else
		{
			if(velocidadKm < minimo)
			{
				minimo = velocidadKm;
				combustibleMinimo = combustible;
			}	
		}
		//Cantidad de combustibles líquidos que su velocidad supere los 100 kilómetros
		if(combustible == "l" && velocidadKm > 100)
		{
			velocidad100 = velocidad100 + 1;
		}
		//la velocidad más alta de los de combustible sólido
		if(combustible == "s" && velocidadKm > maximo)
		{
			maximoSolido = velocidadKm;
		}
	}

	//Calculando el promedio de todas las velocidades
	velocidadPromedio = velocidadPromedio / vehiculos;

	alert("1) El promedio de velocidades totales es: " + velocidadPromedio);
	alert("2) La velocidad más baja es: " + minimo + " y el tipo de combustible de ese vehículo es: " + combustibleMinimo);
	alert("3) La cantidad de combustibles líquidos que su velocidad supere los 100 kilómetros es: " + velocidad100);
	alert("4) La velocidad más alta de los de combustible sólido es: " + maximoSolido);

}
