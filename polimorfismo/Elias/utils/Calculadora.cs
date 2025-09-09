namespace Elias.utils
{
    public class Calculadora
    {
        // Suma dos enteros
        public int Sumar(int a, int b)
        {
            return a + b;
        }

        // Suma dos números de punto flotante
        public double Sumar(double a, double b)
        {
            return a + b;
        }

        // Suma tres enteros
        public int Sumar(int a, int b, int c)
        {
            return a + b + c;
        }

        public static Calculadora operator +(Calculadora num1, Calculadora num2)
        {
            return new Calculadora();
        }
    }
}