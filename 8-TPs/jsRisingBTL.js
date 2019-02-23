/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estadoCivil;
	var sueldo;
	var legajo;
	var nacionalidad;

	//Validando la edad.
	edad = prompt("Ingrese la edad entre 18 a 90 años inclusive");
 	while(edad < 18 || edad > 90)
 	{
 		edad = prompt("Error, ingrese la edad entre 18 a 90 años inclusive");
 	}
 	document.getElementById('Edad').value=edad;

 	//Validando el sexo.
 	sexo = prompt("Ingrese el sexo, “M” para masculino y “F” para femenino");
 	while(sexo != "F" && sexo != "M")
 	{
 		sexo = prompt("Error, ingrese el sexo, “M” para masculino y “F” para femenino");
 	}
 	document.getElementById('Sexo').value=sexo;

 	//Validando el estado civil.
 	estadoCivil = prompt("Ingrese el estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 	while(estadoCivil < 1 || estadoCivil > 4)
 	{
 		estadoCivil = prompt("Error, ingrese el estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 	}
 	switch(estadoCivil)
 	{
 		case "1":
 			estadoCivil = "Soltero";
 			estadoCivil = document.getElementById('EstadoCivil').value=estadoCivil;
 			break;
 		case "2":
 			estadoCivil = "Casado";
 			estadoCivil = document.getElementById('EstadoCivil').value=estadoCivil;
 			break;
 		case "3":
 			estadoCivil = "Divorciado";
 			estadoCivil = document.getElementById('EstadoCivil').value=estadoCivil;
 			break;
 		case "4":
 			estadoCivil = "Viudo";
 			estadoCivil = document.getElementById('EstadoCivil').value=estadoCivil;
 			break;
 		default:
 			break;
 	}

 	//Validando el sueldo bruto.
 	sueldo = prompt("Ingrese su sueldo bruto, no menor a 8000.");
 	while(sueldo < 8000)
 	{
 		sueldo = prompt("Error, ingrese su sueldo bruto, no menor a 8000.");
 	}
 	document.getElementById('Sueldo').value=sueldo;

 	//Validando el legajo
 	legajo = prompt("Ingrese el numero de legajo, numérico de 4 cifras, sin ceros a la izquierda");
 	while(legajo < 1000 || legajo > 9999)
 	{
 		legajo = prompt("Error, ingrese el numero de legajo, numérico de 4 cifras, sin ceros a la izquierda");
 	}
 	document.getElementById('Legajo').value=legajo;

 	//Validando nacionalidad
 	nacionalidad = prompt("Ingrese nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
 	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
 	{
 		nacionalidad = prompt("Error, ingrese nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
 	}
 	switch(nacionalidad)
 	{
 		case "A":
 			nacionalidad = "Argentino";
 			nacionalidad = document.getElementById('Nacionalidad').value=nacionalidad;
 			break;
 		case "E":
 			nacionalidad = "Extranjero";
 			nacionalidad = document.getElementById('Nacionalidad').value=nacionalidad;
 			break;
 		case "N":
 			nacionalidad = "Nacionalizado";
 			nacionalidad = document.getElementById('Nacionalidad').value=nacionalidad;
 			break;
 		default:
 			break;
 	}


}
