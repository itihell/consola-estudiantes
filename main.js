import inquirer from "inquirer";
import chalk from "chalk";

import carreraController from "./app/controllers/carreraController.js";

async function init() {
  const setup = await inquirer.prompt([
    {
      type: "select",
      name: "opcion",
      message: `¿Qué deseas hacer?`,
      choices: [
        {
          name: "Carreras",
          value: "1",
        },
        {
          name: "Estudiantes",
          value: "2",
        },
        {
          name: "Salir",
          value: "3",
        },
      ],
    },
  ]);

  console.log(chalk.bgGray.black("Opción seleccionada: " + setup.opcion));
  return setup.opcion;
}

async function MainMenu(opcion) {
  if (opcion === "1") {
    const carrera = new carreraController(opcion);
    await carrera.init();
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

//(async function () {
let opcion;
do {
  console.clear();
  opcion = await init();
  await MainMenu(opcion);
} while (opcion !== "3");
//})();
