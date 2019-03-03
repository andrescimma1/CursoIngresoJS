
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = prompt("Ingrese el ancho de un rectangulo");
	largo = prompt("Ingrese el largo de un rectangulo");

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	perimetro = 2*(ancho + largo);

	alert("El perimetro es " + perimetro);


}
