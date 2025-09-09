package solid.single_responsability.diana.cafeteria;

public class Factura {
    private String client;
    private  double amount;

    public Factura(String client, double amount) {
        this.client = client;
        this.amount = amount;
    }

    public String getClient() {
        return client;
    }

    public double getAmount() {
        return amount;
    }
    
    public void generarFactura() {
        System.out.println("Generando factura para: " + client + " por un monto de: $" + amount);
    }
}
