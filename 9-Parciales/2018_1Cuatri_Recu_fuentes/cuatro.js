function mostrar()
{
	/*3- en cuatro.js
		En un restaurante, un grupo de amigos quiere saber cuánto debe pagar cada uno del total, recordar que se 
		debe agregar el 10% de propina, y que los precios no incluyen el iva(21%), mostrar toda la información
		 en un solo alert*/
/*
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
*/

	var a, b, c, d, mensaje, descuento, importemod, resultado, porcentaje;

	a = prompt("Ingrese el primer valor");
	b = prompt("Ingrese el segundo valor");
	c = prompt("Ingrese el tercer valor");
	d = prompt("Ingrese el cuarto valor");	

	a = parseInt(a);
	b = parseInt(b);
	c = parseInt(c);
	d = parseInt(d);
	descuento = parseInt(descuento);
	importemod = parseInt(importemod);
	resultado = parseInt(resultado);



	if(a > b && a > c && a > d)
	{	
		if(a > 100)
		{
			porcentaje = 10;
			importemod = a;
		}
		else
		{
			if(a > 50)
			{
				porcentaje = 5;
				importemod = a;
			}
			else
			{
				porcentaje = 115;
				importemod = a;
			}
		}
	}
	else
	{
		if(b > a && b > c && b > d)
		{
			if(b > 100)
			{
				porcentaje = 10;
				importemod = b;
			}
			else
			{
			if(b > 50)
			{
				porcentaje = 5;
				importemod = b;
			}
			else
			{
				porcentaje = 115;
				importemod = b;
			}
			}
		}
		else
		{
		if(c > a && c > b && c > d)
		{
			if(c > 100)
			{
				porcentaje = 10;
				importemod = c;
			}
			else
			{
			if(c > 50)
			{
				porcentaje = 5;
				importemod = c;
			}
			else
			{
				porcentaje = 115;
				importemod = c;
			}
			}
		}
		else
		{
			if(d > a && d > b && d > c)
			{
				if(d > 100)
				{
					porcentaje = 10;
					importemod = d;
				}
				else
				{
				if(d > 50)
				{
					porcentaje = 5;
					importemod = d;
				}
				else
				{
					porcentaje = 115;
					importemod = d;
				}
				}
			}
		}

	descuento = importemod * porcentaje / 100;
	resultado = importemod - descuento;
	mensaje = "Su importe mayor es: " + importemod + ". El importe modificado es: " + resultado;
	alert(mensaje); 
}
}
}
