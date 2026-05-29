import Carrera from "./app/models/carrera.js";
async function main() {
  const carrera = new Carrera("Administracion de Empresas");
  const payload = await carrera.save(carrera);
  console.log("Carrera guardada:", payload);
}
main();
