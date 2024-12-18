import * as readlineSync from 'readline-sync';
import { TextUtils } from "../../../Utils/TextUtils";
import { Veterinaria } from "../../../veterinaria/Veterinaria";
import { RedVeterinarias } from "../../../veterinaria/Veterinarias";
import { RutinaEjecutable } from "../RutinaEjecutable";
import { Paciente } from '../../../veterinaria/Paciente';

export class ModificarPacienteRutina implements RutinaEjecutable {

    vet: Veterinaria;
    red: RedVeterinarias;

    constructor(vet: Veterinaria, red: RedVeterinarias) {
        this.vet = vet;
        this.red = red;
    }

    ejecutarRutina(): boolean {
        console.clear();
        console.log("Modificar Paciente:");
        TextUtils.consoleLinea();
        const nombre: string = TextUtils.pedirTextoObligatorio("Ingrese el nombre del paciente a modificar: ");
        const existente = this.red.getPacientes().find((pac) => pac.nombre == nombre);
        if (existente) {
            const nombre = TextUtils.pedirTextoOpcionalVelorXDefecto("Nombre de Paciente", existente.getNombre());
            TextUtils.consoleLinea();
            console.log(`Sus datos ingresados son: nombre: ${nombre}`);
            const opcion = readlineSync.question("Presione S si es correcto, N si quiere reintentar, C cancelar: ");
            if (opcion.toLowerCase() == 's') {
                existente.setNombre(nombre);
                this.red.guardar();
                TextUtils.mensajeConEnter("Paciente modificado exitosamente");
                return true;
            }
            if (opcion.toLowerCase() == 'n') {
                return this.ejecutarRutina();
            }
        } else {
            TextUtils.mensajeConEnter(`No se encuentra paciente con el nombre ingresado`);
            return false;
        }

        return false;
    }
}