import inquirer from "inquirer";
import chalk from "chalk";
import Estudiante from "../models/estudiante.js";
import Carrera from "../models/carrera.js";
import Helper from "../helpers/helper.js";

export default class EstudianteController {
  opcion = 0;
  opciones = [
    {
      name: "Menu anterior",
      value: 0,
    },
    {
      name: "Mostrar Estudiantes",
      value: 1,
    },
    {
      name: "Crear Estudiante",
      value: 2,
    },
  ];
  constructor(opcion) {
    this.opcion = opcion;
    this.estudiante = new Estudiante();
    this.carrera = new Carrera();
  }

  async validarMenu(opcion) {
    if (opcion == 0) {
      return;
    } else if (opcion == 1) {
      await this.read();
    } else if (opcion == 2) {
      await this.create();
    } else {
      console.log(chalk.bgRed.white("Opción no válida"));
    }
  }

  async create() {
    const carreras = await this.carrera.load();

    let payload = await inquirer.prompt([
      {
        type: "input",
        name: "nombre",
        message: "Ingrese el nombre del estudiante",
        validate: (input) => {
          if (input.trim() === "") {
            return "El nombre del estudiante no puede estar vacío.";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "apellido",
        message: "Ingrese el apellido del estudiante",
        validate: (input) => {
          if (input.trim() === "") {
            return "El apellido del estudiante no puede estar vacío.";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "edad",
        message: "Ingrese la edad del estudiante",
        validate: (input) => {
          const edad = parseInt(input);
          if (isNaN(edad) || edad <= 0) {
            return "La edad del estudiante debe ser un número positivo.";
          }
          return true;
        },
      },
      {
        type: "select",
        name: "sexo",
        message: "Seleccione el sexo del estudiante",
        choices: [
          {
            name: "Masculino",
            value: "M",
          },
          {
            name: "Femenino",
            value: "F",
          },
        ],
        validate: (input) => {
          if (input.trim() === "") {
            return "El sexo del estudiante no puede estar vacío.";
          }
          return true;
        },
      },
      {
        type: "select",
        name: "carrera",
        message: "Seleccione la carrera del estudiante",
        choices: carreras.map((carrera) => {
          return {
            name: carrera.nombre,
            value: carrera,
          };
        }),
        validate: (input) => {
          if (input.trim() === "") {
            return "La carrera del estudiante no puede estar vacía.";
          }
          return true;
        },
      },
    ]);

    const existe = await this.validateEstudiante(
      payload.nombre,
      payload.apellido,
    );

    if (existe) {
      console.log(
        chalk.bgRed.white("No se puede crear el estudiante, ya existe"),
      );
      console.log();
      await Helper.esperar();
      return;
    }

    console.log(payload);
    await Helper.esperar();

    await this.estudiante.save({
      table: this.estudiante.getTable(),
      id: Date.now(),
      nombre: payload.nombre,
      apellido: payload.apellido,
      edad: payload.edad,
      sexo: payload.sexo,
      carrera: payload.carrera,
    });
    console.log(chalk.bgGreen.white("Estudiante creado exitosamente"));
    await Helper.esperar();
  }

  async read() {
    console.log(chalk.bgBlue.white("Mostrando estudiantes..."));
    console.log();
    const estudiantes = await this.estudiante.load();
    const rows = estudiantes.map((estudiante) => {
      return {
        nombre: estudiante.nombre,
        apellido: estudiante.apellido,
        edad: estudiante.edad,
        sexo: estudiante.sexo,
        carrera: estudiante.carrera.nombre,
      };
    });
    console.table(rows);
    console.log();
    await Helper.esperar();
  }

  async validateEstudiante(nombre, apellido) {
    const estudiantes = await this.estudiante.load();
    const estudiante = estudiantes.find(
      (estudiante) =>
        estudiante.nombre.toLowerCase().trim() ===
          nombre.toLowerCase().trim() &&
        estudiante.apellido.toLowerCase().trim() ===
          apellido.toLowerCase().trim(),
    );
    return estudiante;
  }

  async init() {
    let opcion;
    do {
      console.clear();
      opcion = await Helper.menu("Menú de estudiantes", this.opciones);
      await this.validarMenu(opcion);
    } while (opcion != 0);
  }
}
