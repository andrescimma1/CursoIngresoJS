function mostrar()
{
	var Edad, mensaje;

	Edad = edad.value; //tomo la edad  

	Edad = parseInt(Edad);

	if(Edad > "17")
	{
		mensaje = "Mayor de edad";
	}
	else
	{
		mensaje = "Menor de edad";
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN