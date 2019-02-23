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
	var sexoMin;
	var contadorVarones = 0;

	promedio = parseInt(promedio);

	while(contador < 5)
	{
		contador = contador + 1;
		nota = prompt("Ingrese la nota del alumno #" + contador + " entre 0 y 10");
		nota = parseInt(nota);

		while(nota < 0 || nota > 10)
		{
			nota = prompt("Error, ingrese la nota del alumno #" + contador + " entre 0 y 10");
		}
		nota = parseInt(nota);

		sexo = prompt("Ingrese el sexo del alumno #" + contador + " presionando 'f' o 'm'");

		while(sexo != "f" && sexo != 'm')
		{
			sexo = prompt("Error, ingrese la nota del alumno #" + contador + " presionando 'f' o 'm'");
		}

		/*Sumando promedio + nota para asignar los valores nuevos de nota a promedio
		(0 = 0 + 9) ==> (9 = 9 + 7) ==> (16 = 16 + 7) etc.
		*/
		promedio = promedio + nota;

		//Calculando el minimo para poder saber cual es la nota mas baja.
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
			sexoMin = sexo;
			}
		}

		//La cantidad de varones que su nota sea mayor o igual a 6.
		if(sexo == "m" && nota >= 6)
		{
			contadorVarones = contadorVarones + 1;
		}

		
	}

	//Calculando el promedio
	promedio = promedio / contador;

	alert("El promedio de las notas ingresadas es de: " + promedio);
	alert("La nota mas baja es: " + minimo + ", y el sexo de esa persona es: " + sexoMin);
	alert("La cantidad de varones que su nota es mayor o igual a 6 es de: " + contadorVarones);

}
