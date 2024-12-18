import * as readlineSync from 'readline-sync';
import { TextUtils } from "../../../Utils/TextUtils";
import { Veterinaria } from "../../../veterinaria/Veterinaria";
import { RedVeterinarias } from "../../../veterinaria/Veterinarias";
import { RutinaEjecutable } from "../RutinaEjecutable";
import { IdUtils } from '../../../Utils/IdUtils';
import { Proveedor } from '../../../veterinaria/Proveedor';

export class ModificarProveedorRutina implements RutinaEjecutable {

    vet: Veterinaria;
    red: RedVeterinarias;

    constructor(vet: Veterinaria, red: RedVeterinarias) {
        this.vet = vet;
        this.red = red;
    }

    ejecutarRutina(): boolean {
        console.clear();
        console.log("Modificar Proveedor:");
        TextUtils.consoleLinea();
        const id: number = TextUtils.pedirNumeroObligatorio("Ingrese ID deL Proveedor a modificar: ");
        const existente = this.red.getProveedores().find((prov) => prov.id == id);
        if (existente) {
            const nombre = TextUtils.pedirTextoOpcionalVelorXDefecto("Nombre del Proveedor", existente.getNombre());
            const telefono = TextUtils.pedirTextoOpcionalVelorXDefecto("Telefono del Proveedor", existente.getTelefono());
            TextUtils.consoleLinea();
            console.log(`Sus datos ingresados son: Nombre: ${nombre}, Telefono: ${telefono}`);
            const opcion = readlineSync.question("Presione S si es correcto, N si quiere reintentar, C cancelar: ");
            if (opcion.toLowerCase() == 's') {
                existente.setNombre(nombre);
                existente.setTelefono(telefono);
                this.red.guardar();
                TextUtils.mensajeConEnter("Proveedor modificado exitosamente");
                return true;
            }
            if (opcion.toLowerCase() == 'n') {
                return this.ejecutarRutina();
            }
        } else {
            TextUtils.mensajeConEnter(`No se encuentra proveedor con el ID ingresado`);
            return false;
        }

        return false;
    }
}