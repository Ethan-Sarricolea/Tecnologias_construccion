package solid.single_responsability.diana.cafeteria;

public class MaquinaCafe {
    private String tipoCafe;

    public MaquinaCafe(String tipoCafe) {
        this.tipoCafe = tipoCafe;
    }

    public void prepararCafe() {
        System.out.println("Preparando café de tipo: " + tipoCafe);
    }

    public String getTipoCafe() {
        return tipoCafe;
    }
}
