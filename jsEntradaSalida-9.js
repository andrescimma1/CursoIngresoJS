/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo1;
	var resultado1;

	sueldo1 = sueldo.value;
	resultado1 = resultado.value;

	sueldo1 = parseInt(sueldo1);
	resultado1 = parseInt(resultado1);

	resultado1 = sueldo1 * 1.10;  //Aumentar un 10% al sueldo

	document.getElementById('resultado').value=resultado1;
	
}
