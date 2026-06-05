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

function MainMenu(opcion) {
  if (opcion === "1") {
    // Carreras
  } else if (opcion === "2") {
    // Estudiantes
  } else if (opcion === "3") {
    // Lógica para salir
  } else {
    console.log(
      chalk.bgRed.white(
        "Opción no válida. Por favor, selecciona una opción válida.",
      ),
    );
  }
}

const opcion = await init();

{
  MainMenu(opcion);
}while(opcion !== "3");
