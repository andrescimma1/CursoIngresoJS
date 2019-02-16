function mostrar()
{
//tomo la edad  
var mensaje;
var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño){
		case "Enero":
			mensaje="que comiences bien el año!!!.";
			break;
		case "Marzo":
			mensaje="a clases!!!.";
			break;
		case "Julio":
			mensaje="se vienen las vacaciones!!!.";
			break;
		case "Diciembre":
			mensaje="Felices fiestas!!!.";
			break;
	}
	alert(mensaje);


}//FIN DE LA FUNCIÓN