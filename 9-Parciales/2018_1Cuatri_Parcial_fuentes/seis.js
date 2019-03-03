function mostrar()
{
	var hora;
	var mensaje;

	hora = laHora.value;


	switch(hora)
	{
		case "6":
			mensaje = "es de mañana";
			break;
		case "7":
			mensaje = "es de mañana";
			break;
		case "8":
			mensaje = "es de mañana";
			break;
		case "9":
			mensaje = "es de mañana";
			break;
		case "10":
			mensaje = "es de mañana";
			break;
		case "11":
			mensaje = "es de mañana";
			break;
		case "12":
			mensaje = "es de tarde";
			break;
		case "13":
			mensaje = "es de tarde";
			break;
		case "14":
			mensaje = "es de tarde";
			break;
		case "15":
			mensaje = "es de tarde";
			break;
		case "16":
			mensaje = "es de tarde";
			break;
		case "17":
			mensaje = "es de tarde";
			break;
		case "18":
			mensaje = "es de tarde";
			break;
		case "19":
			mensaje = "es de tarde";
			break;
		default:
			mensaje = "es de noche";
			break;
	}

	if(hora < 0 || hora > 24)
	{
		mensaje = "La hora ingresada no es valida";
	}

	if(hora > 19 && hora < 24)
	{
		mensaje = "A dormir";
	}

	alert(mensaje);

}
