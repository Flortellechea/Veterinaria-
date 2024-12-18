import * as readlineSync from 'readline-sync';
import { TextUtils } from "../../../Utils/TextUtils";
import { Veterinaria } from "../../../veterinaria/Veterinaria";
import { RedVeterinarias } from "../../../veterinaria/Veterinarias";
import { RutinaEjecutable } from "../RutinaEjecutable";

export class EliminarProveedorRutina implements RutinaEjecutable {

    vet: Veterinaria;
    red: RedVeterinarias;

    constructor(vet: Veterinaria, red: RedVeterinarias) {
        this.vet = vet;
        this.red = red;
    }

    ejecutarRutina(): boolean {
        console.clear();
        console.log("Eliminar Cliente:");
        TextUtils.consoleLinea();
        const nombre: string = TextUtils.pedirTextoObligatorio("Ingrese nombre del Proveedor a eliminar: ");
        const existente = this.red.getProveedores().find((prov) => prov.nombre == nombre);
        if (existente) {
            console.log(`Esta seguro de eliminar: ${existente.getNombre()}`);
            const opcion = readlineSync.question("Presione S si es correcto, N si quiere reintentar, C cancelar: ");
            if (opcion.toLowerCase() == 's') {
                const nuevoArrFiltrado = this.vet.getProveedoresVeterinaria().filter((provId) => provId != existente.getId());
                this.vet.setProveedoresVeterinaria(nuevoArrFiltrado);
                this.red.guardar();
                TextUtils.mensajeConEnter("Proveedor eliminado exitosamente");
                return true;
            }
            if (opcion.toLowerCase() == 'n') {
                return this.ejecutarRutina();
            }
        } else {
            TextUtils.mensajeConEnter(`No se encuentra proveedor ingresado`);
            return false;
        }
        return false;
    }
}