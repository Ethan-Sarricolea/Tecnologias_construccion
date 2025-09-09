namespace Elias.utils.figuras
{
    public class Circulo : Figura
    {
        private double radio { get; set; }

        public Circulo(double radio)
        {
            this.radio = radio;
        }

        public override double Area()
        {
            return Math.PI * this.radio * this.radio;
        }

        public override void dibujar()
        {
            Console.WriteLine("Dibujando un círculo con radio: " + this.radio);
        }
    }
}