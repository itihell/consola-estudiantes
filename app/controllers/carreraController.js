import inquirer from "inquirer";
import chalk from "chalk";

export default class CarreraController {
  opcion = 0;
  opciones = [
    {
      name: "Menu anterior",
      value: 0,
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

  async await() {
    const setup = await inquirer.prompt([
      {
        type: "input",
        name: "awaitTime",
        message: `Teclee una tecla para continuar...`,
      },
    ]);

    console.log(chalk.bgGray.black(setup.awaitTime));
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

    console.log(chalk.bgGray.black("Opción seleccionada Carrera: " + setup.optCarrera));
    return setup.optCarrera;
  }

  async validarMenu(opcion) {
    if (opcion == 0) {
      return;
    } else if (opcion == 1) {
      await this.read();
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
  async read() {
    console.log(chalk.bgBlue.white("Mostrando carreras..."));
    await this.await();
    await this.init();
  }
  update() {
    console.log(chalk.bgYellow.white("Actualizando carrera..."));
  }
  delete() {
    console.log(chalk.bgRed.white("Eliminando carrera..."));
  }

  async init() {
    console.clear();
    const opcion = await this.menu();
    await this.validarMenu(opcion);
  }
}
