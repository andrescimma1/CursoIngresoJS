function mostrar()
{
   var compra, desc, iva, resultado;

   compra = elPrecioFinal.value;

   compra = parseInt(compra);
   desc = parseInt(desc);
   iva = parseInt(iva);

   desc = compra * 0.90;
   iva = desc * 0.21;
   resultado = desc + iva;

   alert("tu compra es de $" + compra + " tenes un descuento del 10% queda en $" + desc + ", mas el iva es $" + resultado);
}

