function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;

	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);

	for(numeroAnterior = numeroIngresado - 1; numeroAnterior > 1; numeroAnterior--)
	{

		console.log(numeroAnterior);
		if(numeroIngresado%numeroAnterior == 0)
		{
			break;
		}

	}

	if(numeroAnterior == 1)
	{
		alert("Es primo");
	}
	else
	{
		alert("No es primo");
	}


}