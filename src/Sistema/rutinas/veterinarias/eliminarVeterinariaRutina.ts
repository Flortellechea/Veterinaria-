import * as readlineSync from 'readline-sync';
import { TextUtils } from "../../../Utils/TextUtils";
import { Veterinaria } from "../../../veterinaria/Veterinaria";
import { RedVeterinarias } from "../../../veterinaria/Veterinarias";
import { RutinaEjecutable } from "../RutinaEjecutable";

export class EliminarVterinariaRutina implements RutinaEjecutable {

    red: RedVeterinarias;


    constructor(red: RedVeterinarias) {
        this.red = red;
    }

    public listarVeterinarias() {
        TextUtils.consoleLinea();
        console.log(`  Red de Veterinarias`);
        TextUtils.consoleLinea();
        for (let index = 0; index < this.red.getVeterinarias().length; index++) {
            const vet: Veterinaria = this.red.getVeterinarias()[index];
            console.log(`     ${vet.id}  ${vet.nombre}`);
            TextUtils.consoleLinea();
        }
        TextUtils.consoleLinea();
    }

    ejecutarRutina(): boolean {
        console.clear();
        console.log("Indique que veterinaria quiere Eliminar:");
        TextUtils.consoleLinea();
        this.listarVeterinarias();
        const id: number = TextUtils.pedirNumeroObligatorio("Ingrese ID de la Veterinaria a eliminar: ");
        const existente = this.red.getVeterinarias().find((vet) => vet.id == id);
        if (existente) {
            console.log(`Esta seguro de eliminar: ${existente.getNombre()}`);
            const opcion = readlineSync.question("Presione S si es correcto, N si quiere reintentar, C cancelar: ");
            if (opcion.toLowerCase() == 's') {
                const nuevoArrFiltrado = this.red.getVeterinarias().filter((vet) => vet.getId() != existente.getId());
                this.red.setVeterinarias(nuevoArrFiltrado);
                this.red.guardar();
                TextUtils.mensajeConEnter("Veteriaria eliminada exitosamente");
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