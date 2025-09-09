package solid.single_responsability.diana.cafeteria;

public class Notificacion {
    private String client;
    private String message = "Su pedido está listo para recoger.";

    public Notificacion(String client) {
        this.client = client;
    }

    public void enviarNotificacion() {
        System.out.println("Estimado cliente: " + client + " Le informamos que " + message);
    }
}
