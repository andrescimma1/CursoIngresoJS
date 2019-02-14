
function mostrar()
{
	var mascota1, mascota2, peso1, peso2, suma;

	mascota1 = prompt("Ingrese el nombre de su mascota");
	mascota2 = prompt("Ingrese el nombre otra mascota");
	peso1 = prompt("Ingrese el peso de " + mascota1);
	peso2 = prompt("Ingrese el peso de " + mascota2);

	peso1 = parseInt(peso1);
	peso2 = parseInt(peso2);

	suma = peso1 + peso2;

    alert ("tenes dos mascotas " + mascota1 + " y " + mascota2 + ", que pesan " + peso1 + " y " + peso2 + " kilos, la suma de los kilos es " + suma);
}
