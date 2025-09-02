class A:
    def method(self):
        print("Method from class A")

class B(A):
    def method(self):
        print("Method from class B")
        super().method()

class C(A):
    def method(self):
        print("Method from class C")
        super().method()

class D(B, C):
    def hello(self):
        print("Method from class D")
        super().method()

d = D()

print(D.mro())  # Muestra el orden de resolución de métodos
print("metodo:")
d.method()      # Llama al método, demostrando la resolución correcta