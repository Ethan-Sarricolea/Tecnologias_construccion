using Producto;

namespace ProductosConcretos
{
    public class TransferenciaPago : IPago
    {
        public void ProcesarPago(decimal monto)
        {
            Console.WriteLine($"Procesando transferencia: ${monto}");
        }

        public bool ValidarPago()
        {
            Console.WriteLine($"Validando numero de transferencia...");
            return true;
        }
    }
}