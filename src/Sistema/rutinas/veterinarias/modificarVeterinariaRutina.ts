import * as readlineSync from 'readline-sync';
import { TextUtils } from "../../../Utils/TextUtils";
import { Veterinaria } from "../../../veterinaria/Veterinaria";
import { RedVeterinarias } from "../../../veterinaria/Veterinarias";
import { RutinaEjecutable } from "../RutinaEjecutable";

export class ModificarVeterinariaRutina implements RutinaEjecutable {

    vet: Veterinaria;
    red: RedVeterinarias;

    constructor(vet: Veterinaria, red: RedVeterinarias) {
        this.vet = vet;
        this.red = red;
    }

    public listarVeterinarias() {
        TextUtils.consoleLinea();
        console.log(`  Red de Veterinarias`);
        TextUtils.consoleLinea();
        for (let index = 0; index < this.red.getVeterinarias().length; index++) {
            const vet:Veterinaria = this.red.getVeterinarias()[index];
            console.log(`     ${vet.id}  ${vet.nombre}`);
            TextUtils.consoleLinea();
        }
        TextUtils.consoleLinea();
    }

    ejecutarRutina(): boolean {
        console.clear();
        console.log("Indique que veterinaria quiere Modificar:");
        TextUtils.consoleLinea();
        this.listarVeterinarias();
        const id: number = TextUtils.pedirNumeroObligatorio("Ingrese ID de la Veterinaria a modificar: ");
        const existente = this.red.getVeterinarias().find((vet) => vet.id == id);
        if (existente) {
            const nombre = TextUtils.pedirTextoOpcionalVelorXDefecto("Nombre de la Veterinaria", existente.getNombre());
            const direccion = TextUtils.pedirTextoOpcionalVelorXDefecto("Direccion de la Veterinaria", existente.getDireccion());
            TextUtils.consoleLinea();
            console.log(`Sus datos ingresados son: nombre: ${nombre}, Direccion: ${direccion}`);
            const opcion = readlineSync.question("Presione S si es correcto, N si quiere reintentar, C cancelar: ");
            if (opcion.toLowerCase() == 's') {
                existente.setNombre(nombre);
                existente.setDireccion(direccion);
                this.red.guardar();
                TextUtils.mensajeConEnter("Veterinaria modificado exitosamente");
                return true;
            }
            if (opcion.toLowerCase() == 'n') {
                return this.ejecutarRutina();
            }
        } else {
            TextUtils.mensajeConEnter(`No se encuentra la Veterinaria con el ID ingresado`);
            return false;
        }

        return false;
    }
}