package solid.single_responsability.diana.cafeteria;

public class SistemaPedidos {
       private String client;
       private String coffee;

    public SistemaPedidos(String client, String coffee) {
        this.client = client;
        this.coffee = coffee;
    }

    public String getClient() {
        return client;
    }

    public String getCoffee() {
        return coffee;
    }

    public void realizarPedido() {
        System.out.println("Pedido realizado para: " + client + " de café: " + coffee);
    }
}
