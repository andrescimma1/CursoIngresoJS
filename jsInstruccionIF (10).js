function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom, mensaje;
	numeroRandom=Math.floor((Math.random()* 10)+ 1);

	if(numeroRandom > 8)
	{
		mensaje="Excelente, su nota es: " + numeroRandom;
	}
	if(numeroRandom > 4)
	{
		mensaje="Aprobó, su nota es: " + numeroRandom;
	}
	else
	{
		mensaje="Vamos, la próxima se puede! Su nota es: " + numeroRandom;
	}
	alert(mensaje);



}//FIN DE LA FUNCIÓN