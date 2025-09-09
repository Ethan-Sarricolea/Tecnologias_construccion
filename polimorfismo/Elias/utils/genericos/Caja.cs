namespace Elias.utils.figuras
{
    public class Caja<T> // T se refiere al tipo
    {
        private T contenido;

        public void Guardar(T contenido)
        {
            this.contenido = contenido;
        }

        public Caja(T contenido)
        {
            this.contenido = contenido;
        }

        public Caja()
        {
            this.contenido = default(T);
        }

        public T Abrir()
        {
            return contenido;
        }
    }
}