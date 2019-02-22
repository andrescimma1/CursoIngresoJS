function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var respuesta='si';

	while(respuesta=="si")
	{
		contador=contador+1;
		numero=prompt("Ingrese numero" + contador + "# : ");
		numero=parseInt(numero);

		if(contador == 1)
		{
			maximo = numero;
			minimo = numero;
		}
		else
		{
			if(numero > maximo)
			{
			maximo = numero;
			}

			if(numero < minimo)
			{
			minimo = numero;
			}
		}
		

		respuesta = prompt ("==> Si, para continuar");
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN