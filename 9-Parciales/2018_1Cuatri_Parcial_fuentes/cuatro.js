function mostrar()
{
	var numero1;
	var numero2;
	var resta;
	var suma;

	numero1 = prompt("Ingrese el primer numero");
	numero2 = prompt("Ingrese el segundo numero");

	if(numero1 == numero2)
	{
		alert(numero1 + numero2);
	}

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	if(numero1 > numero2)
	{
		resta = numero1 - numero2;
		alert(resta);
	}
	else
	{
		suma = numero1 + numero2;
		alert(suma);
	}

	if(suma > 10)
	{
		alert("La suma es " + suma + " y supero el 10");
	}

}
