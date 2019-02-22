function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(respuesta=="si")
	{
		contador=contador+1;
		numero=prompt("Ingrese numero" + contador + "# : ");
		numero=parseInt(numero);
		if(numero > 0)
		{
			positivo = positivo + numero;
		}
		else
		{
			negativo = negativo * numero;
		}
		respuesta = prompt ("==> Si, para continuar");
		if(respuesta!="si")
		{
		break;
		}
	}




document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN