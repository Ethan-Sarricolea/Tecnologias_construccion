using Producto;
using ProductosConcretos;

namespace Factory
{
    public static class PagoFactory
    {
        public static IPago crearPago(TipoPago tipopago)
        {
            return tipopago switch
            {
                tipopago.TarjetaCredito => new TarjetaCreditoPago(),
                tipopago.Paypal => new PayPalPago(),
                tipopago.Transferencia => new TransferenciaPago(),
                _ => throw new ArgumentException("Tipo de pago incorrecto")
            };
        }
    }
}