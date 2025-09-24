using System;

namespace malEjemplo
{
    public class Xiaomi : Telefono
    {
        public Xiaomi(string marca, int modelo, int precio, int RAM) : base(marca, modelo, precio, RAM)
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
            Console.WriteLine($"Pagas con tu ${modelo}");
        }

        public override void usarAsistenteVirtual()
        {
            Console.WriteLine($"El asistente de mi ${modelo} responde");
        }

        public override void desbloquearConHuella()
        {
            Console.WriteLine($"El ${modelo} se desbloquea");
        }
    }
}