import { TextUtils } from "../../../Utils/TextUtils";
import { Veterinaria } from "../../../veterinaria/Veterinaria";
import { RedVeterinarias } from "../../../veterinaria/Veterinarias";
import { RutinaEjecutable } from "../RutinaEjecutable";
import { Proveedor } from '../../../veterinaria/Proveedor';

export class ListarProveedorRutina implements RutinaEjecutable {

    vet: Veterinaria;
    red: RedVeterinarias;

    constructor(vet: Veterinaria, red: RedVeterinarias) {
        this.vet = vet;
        this.red = red;
    }

    ejecutarRutina(): boolean {
        console.clear();
        TextUtils.bannerVeterinaria(this.vet);
        console.log("Lista de Proveedores:");
        TextUtils.consoleLinea();
        for (let index = 0; index < this.vet.getProveedoresVeterinaria().length; index++) {
            const idProv:number = this.vet.getProveedoresVeterinaria()[index];
            const prov:Proveedor = this.red.getProveedores().find((prov) => prov.getId() == idProv);
            if (prov) {
                console.log(`  ID: ${prov.getId()}  Nombre: ${prov.getNombre()} Tel: ${prov.getTelefono()}`);
                TextUtils.consoleLinea();
            }
        }
        TextUtils.consoleLinea();
        TextUtils.esperarTecla();
        return true;
    }
}