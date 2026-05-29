import Model from "./model";
export default class Persona extends Model {
  #table = "personas";
  constructor(nombre, edad, sexo, carrera) {
    this.id = Date.now();
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.carrera = carrera;
  }
}
