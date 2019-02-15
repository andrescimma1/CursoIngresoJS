function mostrar()
{
	/*3- en cuatro.js
		En un restaurante, un grupo de amigos quiere saber cuánto debe pagar cada uno del total, recordar que se 
		debe agregar el 10% de propina, y que los precios no incluyen el iva(21%), mostrar toda la información
		 en un solo alert*/

	var grupo, precio, propina, total, repartir;

	grupo = prompt("¿Cuantos son en el grupo de amigos?");
	precio = prompt("Ingrese el importe a pagar");

	grupo = parseInt(grupo);
	precio = parseInt(precio);
	propina = parseInt(propina);
	total = parseInt(total);
	repartir = parseInt(repartir);

	propina = precio * 0.10;
	total = precio + propina;
	repartir = total / grupo;

	alert("Ustedes son " + grupo + ", si el importe a pagar es $" + precio + " y sumandole la propina son $" + total + ". Cada uno tiene que pagar $" + repartir);
 
}
