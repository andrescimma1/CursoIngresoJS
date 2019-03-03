function mostrar()
{
	var precio;
	var porcentaje;
	var precioFinal;
	var precioFinalConDescuento;

	precio = prompt("Ingrese el precio");
	porcentaje = prompt("Ingrese el porcentaje de descuento");

	precio = parseInt(precio);
	porcentaje = parseInt(porcentaje);

	precioFinal = precio * porcentaje / 100;
	precioFinalConDescuento = precio - precioFinal;

	document.getElementById('elPrecioFinal').value=precioFinalConDescuento;
}
