import Carrera from "./app/models/carrera.js";
import Estudiante from "./app/models/estudiante.js";

import inquirer from "inquirer";
import chalk from "chalk";
// Carreras
// Estudiantes

async function init() {
  const setup = await inquirer.prompt([
    {
      type: "input",
      name: "opcion",
      message: `¿Qué deseas hacer? 
      1: Agregar carrera,
      2: Agregar estudiante, 
      3: Salir`,
    },
  ]);

  console.log(chalk.bgGray.black("Opción seleccionada: " + setup.opcion));
  return setup.opcion;
}

const opcion = await init();
if (opcion === "1") {
  // Lógica para agregar carrera
  const carrera = await new Carrera("Licenciatura en Informatica");
  const payloar = await carrera.save();
  const datos = await carrera.load();
  console.table(datos);
} else if (opcion === "2") {
  // Lógica para agregar estudiante
  const estudiante = await new Estudiante(
    "Francelis Miranda",
    24,
    "Licenciatura en Informatica",
  );
  const payload = await estudiante.save();
  const datos = await estudiante.load();
  console.table(datos);
} else if (opcion === "3") {
  // Lógica para salir
} else {
  console.log(
    chalk.bgRed.white(
      "Opción no válida. Por favor, selecciona una opción válida.",
    ),
  );
}
