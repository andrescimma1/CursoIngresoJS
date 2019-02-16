function mostrar()
{
	var Edad, mensaje;

	Edad=edad.value;	//tomo la edad  

	Edad=parseInt(Edad);

	if(Edad < 13)
	{
		mensaje="No es adolescente";
	}
	if(Edad > 17)
	{
		mensaje="No es adolescente";
	}

	alert(mensaje);
		
}//FIN DE LA FUNCIÓN