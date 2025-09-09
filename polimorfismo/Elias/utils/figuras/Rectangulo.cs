namespace Elias.utils.figuras
{
    public class Rectangulo : Figura
    {
        private double ancho { get; set; }
        private double alto { get; set; }

        public Rectangulo(double ancho, double alto)
        {
            this.ancho = ancho;
            this.alto = alto;
        }

        public override double Area()
        {
            return this.ancho * this.alto;
        }

        public override void dibujar()
        {
            Console.WriteLine("Dibujando un rectángulo de " + this.ancho + " x " + this.alto);
        }
    }
}