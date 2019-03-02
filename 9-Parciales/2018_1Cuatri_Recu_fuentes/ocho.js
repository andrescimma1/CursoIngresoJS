/*	Realizar el algoritmo que permita iterar el ingreso de dos datos, un país y la
	superficie de su territorio (validar) hasta que el usuario quiera e informar al terminar
	el ingreso por document.write:
	1-La cantidad de países con superficie impar.
	2-La cantidad de países con superficie menor a 100
	3-La cantidad de países con superficie igual a 100
	4-El nombre del primer país que superó los 100 de superficie
	5-El promedio de kilómetros ingresados.
	6-El nombre del que menos territorio tiene.
*/



function mostrar()
{
	var pais;
	var superficie;
	var respuesta = "si";
	var superficiesImpares = 0;
	var superficieMenor = 0;
	var superficieIgual = 0;
	var pais100 = 0;
	var acumulador = 0;
	var contador = 0;
	var minimo;
	var minimoPais;

	while(respuesta == "si")
	{
		//Creando contador para poder sacar el promedio
		contador = contador + 1;
		pais = prompt("Ingrese un pais: ");
		superficie = prompt("Ingrese la superficie del territorio en km: ");
		superficie = parseInt(superficie);

		//Sumandole todos los datos de la superficie al acumulador
		acumulador = acumulador + superficie;

		//Calculando la cantidad de países con superficie impar
		if(superficie%2 == 1)
		{
			superficiesImpares = superficiesImpares + 1;
		}

		//La cantidad de países con superficie menor a 100
		if(superficie < 100)
		{
			superficieMenor = superficieMenor + 1;
		}

		//La cantidad de países con superficie igual a 100
		if(superficie == 100)
		{
			superficieIgual = superficieIgual + 1;
		}

		//El nombre del primer país que superó los 100 de superficie
		if(superficie > 100 && pais100 == 0)
		{
			pais100 = pais;
		}

		//El nombre del que menos territorio tiene.
		if(contador == 1)
		{
			minimo = superficie;
			minimoPais = pais;
		}

		if(superficie < minimo)
		{
			minimo = superficie;
			minimoPais = pais;
		}




		respuesta = prompt("'si' para continuar -->");
	}

	//Sacando el promedio de las superficies ingresadas en km
	acumulador = acumulador / contador;

	document.write("1-La cantidad de países con superficie impar es: " + superficiesImpares);
	document.write("</br>2-La cantidad de países con superficie menor a 100 es: " + superficieMenor);
	document.write("</br>3-La cantidad de países con superficie igual a 100 es: " + superficieIgual);
	document.write("</br>4-El nombre del primer país que superó los 100 de superficie es: " + pais100);
	document.write("</br>5-El promedio de kilómetros ingresados es: " + acumulador);
	document.write("</br>6-El nombre del que menos territorio tiene es: " + minimoPais);

}
