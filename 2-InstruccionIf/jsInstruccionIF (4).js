function mostrar()
{
	var Edad, mensaje;

	Edad=edad.value;	//tomo la edad  

	Edad=parseInt(Edad);

	if(Edad > 12 && Edad < 18)
	{
		mensaje="Es adolescente";
	}
	else
	{
		mensaje="No es adolescente";
	}
	alert(mensaje);



}//FIN DE LA FUNCIÓN