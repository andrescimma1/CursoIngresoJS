function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var positivo=0;
	var negativo=1;
	var respuesta="si";
	var caso;
	var cantidadPositivo = 0;
	var cantidadNegativo = 0;

	while(respuesta=="si")
	{
		contador=contador+1;
		numero=prompt("Ingrese numero" + contador + "# : ");
		numero=parseInt(numero);

		if(numero > 0)
		{
			positivo = numero;
			cantidadPositivo = cantidadPositivo + 1;
		}
		else
		{
			negativo = numero;
			cantidadNegativo = cantidadNegativo + 1;
		}
		respuesta = prompt ("==> Si, para continuar");
	}


	caso = prompt("Ingrese un caso entre el 1 y el 9 inclusive");
	caso = parseInt(caso);

	switch(caso)
		{
			case 1:
				negativo = negativo + numero;
				mensaje = negativo;
				document.write(negativo);
				break;
			case 2:
				positivo = positivo + numero;
				mensaje = positivo;
				document.write(positivo);
				break;
			case 3:
				document.write(cantidadPositivo);
				break;
			case 4:
				document.write(cantidadNegativo);
				break;

			default:
				break;





		}

	
		




}//FIN DE LA FUNCIÓN