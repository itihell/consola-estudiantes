import Persona from "./persona";
export default class Estudiante extends Persona {
  #table = "estudiantes";
  constructor(nombre, edad, sexo, carrera) {
    super(nombre, edad, sexo, carrera);
  }
}
