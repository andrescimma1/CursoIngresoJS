function mostrar()
{
	var Edad, mensaje;

	Edad=edad.value;	//tomo la edad  

	Edad=parseInt(Edad);

	if(Edad < 13)
	{
		mensaje="Es un niño";
	}
	else
	{
		mensaje="Adolescente";
	}

	if(Edad > 17)
	{
		mensaje="Es mayor de edad";
	}

	alert(mensaje);
		
}//FIN DE LA FUNCIÓN