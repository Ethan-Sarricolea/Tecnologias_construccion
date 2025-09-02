#include <iostream>

class Animal {
    // Virtual destructor for proper cleanup in derived classes (buena practica)
    public: virtual ~Animal() = default;
    
    void respirar() const {
        std::cout << "Breathing..." << std::endl;
    }
};

struct Perro : public Animal
{
    void ladrar() const {
        std::cout << "Woof Woof!" << std::endl;
    }
};

struct Gato : public Animal
{
    void maullar() const {
        std::cout << "Meow Meow!" << std::endl;
    }
};

int main()
{
    Perro dog;
    Gato cat;

    dog.respirar();
    dog.ladrar(); 

    cat.respirar();
    cat.maullar();

    return 0;
}
