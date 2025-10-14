import time

class Archivo:
    def __init__(self, nombre):
        self.nombre = nombre
        
    def __str__(self):
        return f"{self.nombre}"

class Carpeta:
    def __init__(self, nombre):
        self.nombre = nombre
        self.hijos: list = []

        print(f"Cargando contenido de la carpeta {self.nombre} desde el disco...")

    def agregar(self, componente):
        self.hijos.append(componente)

    def mostrar(self, indent=""):
        print(f"{indent} {self.nombre}")

        for hijo in self.hijos:
            if isinstance(hijo, Carpeta):
                hijo.mostrar(indent + " ")
            else:
                print(f"{indent} {hijo}")

if __name__=="__main__":
    print("Creando estructuras")

    start_time = time.time()
    main = Archivo("main.js")

    proyecto_alpha = Carpeta("Proyecto Alpha")
    src = Carpeta("src")
    src.agregar(main)
    src.agregar(Archivo("styles.css"))
    proyecto_alpha.agregar(src)
    proyecto_alpha.agregar(Archivo("index.html"))

    proyecto_alpha.mostrar("/")

    end_time = time.time()
