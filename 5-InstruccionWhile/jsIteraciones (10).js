function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var positivo=0;
	var negativo=0;
	var respuesta="si";
	var caso;
	var cantidadPositivo = 0;
	var cantidadNegativo = 0;
	var numeroPar;
	var cantidadPar = 0;
	var cantidadDeCeros = 0;
	var promedioP;
	var promedioN;
	var diferenciaPyN;

	while(respuesta=="si")
	{
		contador=contador+1;
		numero=prompt("Ingrese numero" + contador + "# : ");
		numero=parseInt(numero);

		if(numero > 0)
		{
			positivo = positivo + numero;
			positivo = parseInt(positivo);
			cantidadPositivo = cantidadPositivo + 1;
		}
		else
		{
			negativo = negativo + numero;
			negativo = parseInt(negativo);
			cantidadNegativo = cantidadNegativo + 1;
		}
		if(numero % 2 == 0)
		{
			numeroPar = numero;
			cantidadPar = cantidadPar + 1;
		}
		if(numero == 0)
		{
			cantidadDeCeros = cantidadDeCeros + 1;
		}
		respuesta = prompt ("==> 'si', para continuar");
	}
		promedioP = positivo / cantidadPositivo;
		promedioN = negativo / cantidadNegativo;
		diferenciaPyN = positivo - negativo;
		diferenciaPyN = parseInt(diferenciaPyN);

		document.write("La suma de los negativos es: " + negativo);
		document.write("</br>La suma de los positivos es: " + positivo);
		document.write("</br>La cantidad de positivos es: " + cantidadPositivo);
		document.write("</br>La cantidad de negativos es: " + cantidadNegativo);
		document.write("</br>La cantidad de ceros es: " + cantidadDeCeros);
		document.write("</br>La cantidad de numeros pares es: " + cantidadPar);
		document.write("</br>El promedio de positivos es: " + promedioP);
		document.write("</br>El promedio de negativos es: " + promedioN);
		document.write("</br>La diferencia entre positivos y negativos es: " + diferenciaPyN);
}//FIN DE LA FUNCIÓN