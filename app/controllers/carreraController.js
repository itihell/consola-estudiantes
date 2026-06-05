import inquirer from "inquirer";
import chalk from "chalk";

export default class CarreraController {
  opcion = 0;
  opciones = [
    {
      name: "Menu anterior",
      value: 5,
    },
    {
      name: "Mostrar Carreras",
      value: 1,
    },
    {
      name: "Crear Carrera",
      value: 2,
    },
    {
      name: "Editar Carrera",
      value: 3,
    },
    {
      name: "Eliminar Carrera",
      value: 4,
    },
  ];

  constructor(opcion) {
    this.opcion = opcion;
  }

  async menu() {
    console.clear();
    console.log(chalk.bgCyan.white("**** Menú de Carreras ****"));
    const setup = await inquirer.prompt([
      {
        type: "select",
        name: "optCarrera",
        message: `¿Qué deseas hacer?`,
        choices: this.opciones,
      },
    ]);

    console.log(chalk.bgGray.black("Opción seleccionada: " + setup.optCarrera));
    return setup.opcion;
  }

  validarMenu(opcion) {
    if (opcion == 0) {
      return;
    } else if (opcion == 1) {
      this.read();
    } else if (opcion == 2) {
      this.create();
    } else if (opcion == 3) {
      this.update();
    } else if (opcion == 4) {
      this.delete();
    } else {
      console.log(chalk.bgRed.white("Opción no válida"));
    }
  }

  create() {
    console.log(chalk.bgGreen.white("Creando carrera..."));
  }
  read() {
    console.log(chalk.bgBlue.white("Mostrando carreras..."));
  }
  update() {
    console.log(chalk.bgYellow.white("Actualizando carrera..."));
  }
  delete() {
    console.log(chalk.bgRed.white("Eliminando carrera..."));
  }

  async init() {
    const opcion = await this.menu();
  }
}
