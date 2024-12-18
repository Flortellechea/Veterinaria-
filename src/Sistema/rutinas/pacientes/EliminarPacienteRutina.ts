import * as readlineSync from 'readline-sync';
import { TextUtils } from "../../../Utils/TextUtils";
import { Veterinaria } from "../../../veterinaria/Veterinaria";
import { RedVeterinarias } from "../../../veterinaria/Veterinarias";
import { RutinaEjecutable } from "../RutinaEjecutable";
import { Paciente } from '../../../veterinaria/Paciente';

export class EliminarPacienteRutina implements RutinaEjecutable {

    vet: Veterinaria;
    red: RedVeterinarias;
    pac: Paciente;

    constructor(vet: Veterinaria, red: RedVeterinarias) {
        this.vet = vet;
        this.red = red;
    }

  ejecutarRutina(): boolean {
          console.clear();
          console.log("Eliminar Paciente:");
          TextUtils.consoleLinea();
          const nombre: string = TextUtils.pedirTextoObligatorio("Ingrese nombre del paciente a eliminar: ");
          const existente = this.red.getPacientes().find((pac) => pac.nombre == nombre);
          if (existente) {
              console.log(`Esta seguro de eliminar: ${existente.getNombre()}`);
              const opcion = readlineSync.question("Presione S si es correcto, N si quiere reintentar, C cancelar: ");
              if (opcion.toLowerCase() == 's') {
                  const nuevoArrFiltrado = this.vet.getPacientesVeterinaria().filter((pacId) => pacId != existente.getId());
                  this.vet.setPacientesVeterinaria(nuevoArrFiltrado);
                  this.red.guardar();
                  TextUtils.mensajeConEnter("Paciente eliminado exitosamente");
                  return true;
              }
              if (opcion.toLowerCase() == 'n') {
                  return this.ejecutarRutina();
              }
          } else {
              TextUtils.mensajeConEnter(`No se encuentra el paciente con el nombre ingresado`);
              return false;
          }
          return false;
      }
  }