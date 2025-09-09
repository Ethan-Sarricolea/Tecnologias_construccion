namespace Elias.utils
{
    public class Metro
    {
        public double valor { get; set; }

        public Metro(double valor)
        {
            this.valor = valor;
        }

        public static explicit operator double(Metro m) // implicita
        {
            return m.valor;
        }

        public static implicit operator Metro(double d) // explicita
        {
            return new Metro(d);
        }
    }
}