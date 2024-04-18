const persona = {
    nombre: "Juan",
    edad: 30,
    genero: "masculino",
    ocupacion: "programador"
};
  
class Coche {
    constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
    }
  
    arrancar() {
      console.log("El coche está arrancando.");
    }
  
    conducir() {
      console.log("El coche está en movimiento.");
    }
  
    detener() {
      console.log("El coche se ha detenido.");
    }
  }
  
  const miCoche = new Coche("Toyota", "Corolla", 2022);

const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  añoPublicacion: 1967,
  genero: "Realismo mágico"
};

const numero = 42;

function suma(a, b) {
    return a + b;
}