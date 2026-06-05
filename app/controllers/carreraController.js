import inquirer from "inquirer";
import chalk from "chalk";

export default class CarreraController {
  opcion = 0;
  opciones =[
          {
              name: "Menu anterior",
              value: 0
          },
        {
          name: "Mostrar Carreras",
          value: 1
        },
        {
          name: "Crear Carrera",
          value: 2
        },
        {
          name: "Editar Carrera",
          value: 3
        },
        {
            name: "Eliminar Carrera",
            value: 4
        }
      ];
  constructor(opcion) {
    this.opcion = opcion;
  }

  menu() {
    const setup = await inquirer.prompt([
    {
      type: "select",
      name: "opcion",
      message: `¿Qué deseas hacer?`,
      choices: opciones
    },
  ]);

  console.log(chalk.bgGray.black("Opción seleccionada: " + setup.opcion));
  return setup.opcion;

  }

  create() {}
  read() {}
  update() {}
  delete() {}
}
