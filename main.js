import Carrera from "./app/models/carrera.js";
async function main() {
  const carrera = new Carrera("Ingeniería en Software");
  const payload = await carrera.save(carrera);
  console.log("Carrera guardada:", payload);
}
main();
