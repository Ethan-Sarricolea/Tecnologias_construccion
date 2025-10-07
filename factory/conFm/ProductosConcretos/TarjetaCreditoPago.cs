using Producto;

namespace ProductosConcretos
{
    public class TarjetaCreditoPago : IPago
    {
        public void ProcesarPago(decimal monto)
        {
            Console.WriteLine($"Procesando pago con Tarjeta de credito: ${monto}");
        }

        public bool ValidarPago()
        {
            Console.WriteLine($"Validando tarjeta de credito...");
            return true;
        }
    }
}