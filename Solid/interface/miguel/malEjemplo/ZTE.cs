using System;

namespace malEjemplo
{
    public class ZTE : Telefono
    {
        public ZTE(string marca, int modelo, int precio, int RAM) : base(marca, modelo, precio, RAM)
        {

        }

        public override void escribir()
        {
            Console.WriteLine($"Escribiendo desde mi {marca}");
        }

        public override void llamar()
        {
            Console.WriteLine($"llamando desde mi {marca}");
        }

        public override void pagarConNFC()
        {
            Console.WriteLine("Este celular no puede hacer eso");
        }

        public override void usarAsistenteVirtual()
        {
            Console.WriteLine("Este celular no puede hacer eso");
        }

        public override void desbloquearConHuella()
        {
            Console.WriteLine("Este celular no puede hacer eso");
        }
    }
}