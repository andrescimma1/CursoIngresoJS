function mostrar()
{
	var sistemaSolar;

	sistemaSolar = prompt("Ingrese un planeta");


	switch(sistemaSolar)
	{
		case "tierra":
			mensaje = "acá vivimos";
			break;
		case "mercurio":
			mensaje = "acá hace más calor";
			break;
		case "venus":
			mensaje = "acá hace más calor";
			break;
		default:
			mensaje = "acá hace más frio";
			break;
	}

	alert(mensaje);
}
