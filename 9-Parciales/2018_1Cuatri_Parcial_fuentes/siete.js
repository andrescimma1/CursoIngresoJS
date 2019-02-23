/* Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo
  (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/

function mostrar()
{
	var nota;
	var sexo;
	var contador = 0;
	var promedio = 0;
	var maximo;
	var minimo;

	promedio = parseInt(promedio);

	while(contador < 5)
	{
		contador = contador + 1;
		nota = prompt("Ingrese la nota del alumno #" + contador + " entre 0 y 10");
		nota = parseInt(nota);
		sexo = prompt("Ingrese el sexo 'f' o 'm' del alumno #" + contador);


		promedio = promedio + nota;

		if(contador == 1)
		{
			maximo = nota;
			minimo = nota;
		}
		else
		{
			if(nota > maximo)
			{
			maximo = nota;
			}

			if(nota < minimo)
			{
			minimo = nota;
			}
		}

		
	}

	promedio = promedio / contador;
	alert("El promedio de las notas ingresadas es de: " + promedio);

	alert("La nota mas baja es: " + minimo);



}
