using Factory;
using Producto;

class Program
{
    static void Main()
    {
        TipoPago tipo = new TipoPago();
        ProcesarPago(tipo.TarjetaCredito, 100.5);
        ProcesarPago(tipp.PayPal, 175);
        ProcesarPago(tipo.Transferencia, 200.1);
    }

    static void ProcesarPago(TipoPago tipo, decimal monto)
    {
        IPago pago = PagoFactory.crearPago(tipo);
        if (pago.ValidarPago())
        {
            pago.ProcesarPago(monto);
        }
    }
}