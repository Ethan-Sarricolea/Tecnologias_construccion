package solid.single_responsability.diana;

public class Main {
    public static void main(String[] args) {
        // Crear una instancia de Cafeteria
        Cafeteria cafeteria = new Cafeteria();

        // Crear un pedido
        Pedido pedido = new Pedido("Café Latte", "Juan Pérez");

        // Procesar el pedido
        cafeteria.procesarPedido(pedido);
    }
}