import * as readlineSync from 'readline-sync';
import { TextUtils } from "../../../Utils/TextUtils";
import { Veterinaria } from "../../../veterinaria/Veterinaria";
import { RedVeterinarias } from "../../../veterinaria/Veterinarias";
import { RutinaEjecutable } from "../RutinaEjecutable";
import { IdUtils } from '../../../Utils/IdUtils';
import { Cliente } from '../../../veterinaria/Cliente';

export class ModificarClienteRutina implements RutinaEjecutable {

    vet: Veterinaria;
    red: RedVeterinarias;

    constructor(vet: Veterinaria, red: RedVeterinarias) {
        this.vet = vet;
        this.red = red;
    }

    ejecutarRutina(): boolean {
        console.clear();
        console.log("Modificar Cliente:");
        TextUtils.consoleLinea();
        const dni: number = TextUtils.pedirNumeroObligatorio("Ingrese DNI de Cliente a modificar: ");
        const existente = this.red.getClientes().find((cli) => cli.dni == dni);
        if (existente) {
            const nombre = TextUtils.pedirTextoOpcionalVelorXDefecto("Nombre de Cliente", existente.getNombre());
            const telefono = TextUtils.pedirTextoOpcionalVelorXDefecto("Telefono de Cliente", existente.getTelefono());
            TextUtils.consoleLinea();
            console.log(`Sus datos ingresados son: nombre: ${nombre}, telefono: ${telefono}`);
            const opcion = readlineSync.question("Presione S si es correcto, N si quiere reintentar, C cancelar: ");
            if (opcion.toLowerCase() == 's') {
                existente.setNombre(nombre);
                existente.setTelefono(telefono);
                this.red.guardar();
                TextUtils.mensajeConEnter("Cliente modificado exitosamente");
                return true;
            }
            if (opcion.toLowerCase() == 'n') {
                return this.ejecutarRutina();
            }
        } else {
            TextUtils.mensajeConEnter(`No se encuentra cliente con el DNI ingresado`);
            return false;
        }

        return false;
    }
}