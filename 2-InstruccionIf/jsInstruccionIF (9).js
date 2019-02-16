function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	numeroRandom=Math.floor((Math.random()* 10)+ 1);

	if(numeroRandom < 11)
	{
		alert(numeroRandom);
	}

}//FIN DE LA FUNCIÓN