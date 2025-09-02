#include <iostream>

// using namespace std;
using std::cout;
using std::endl;


class Volador {
    public:
    virtual ~Volador() = default;

    void volar(); // Metodo abstracto
};

class Nadador {
    public:
    virtual ~Nadador() = default;

    void nadar(); // Metodo abstracto
};

class Pato : public Volador, public Nadador {
    public:
        void volar() const {
            cout << "El pato esta volando" << endl;
        }

        void nadar() const {
            cout << "El pato esta nadando" << endl;
        }

        void quack() {
            cout << "Quack Quack!" << endl;
        }
};

int main(int argc, char const *argv[])
{
    Pato donald;
    donald.volar();
    donald.nadar();
    return 0;
}
