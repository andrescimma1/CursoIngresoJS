/*	Cuando cargamos un celular pedir la marca, el tamaño (en pulgadas) y el precio.

	1) Mayor precio y la marca de ese mayor precio.
	2) Promedio precio.
	3) Cantidad de celulares que valen > 2000
	4) Celular, marca y tamaño del mas caro
	5) Celular, marca y tamaño del mas barato
	6) El primer celular que sale 1000
	7) El precio del ultimo celular "LG"

	*/

function mostrar()
{
	var marca;
	var precio;
	var respuesta="si";
	var contador = 0;
	var mayorPrecio;
	var mayorPrecioMarca;
	var promedio = 0;

	while(respuesta=="si")
	{
		contador=contador+1;
		precio=prompt("Ingrese el precio de su celular #" + contador + ": ");
		precio=parseInt(precio);
		marca=prompt("Ingrese la marca de su celular #" + contador + ": ");
		
		if(contador==1)
		{
			mayorPrecio = precio;
			mayorPrecioMarca = marca;
		}
		else
		{
			if(precio > mayorPrecio)
			{
				mayorPrecio = precio;
				mayorPrecioMarca = marca;
			}
		}

		//Calcular promedio del precio

		promedio = promedio + precio;
		promedio = promedio / contador;

		respuesta = prompt("'si' para continuar: ");
		
	}

	document.write("El mayor precio del celular es: $" + mayorPrecio + " y su marca es: " + mayorPrecioMarca);
	document.write("</br>El promedio del precio es: $" + promedio);
}