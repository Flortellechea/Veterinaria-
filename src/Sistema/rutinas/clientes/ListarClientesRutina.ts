import { TextUtils } from "../../../Utils/TextUtils";
import { Veterinaria } from "../../../veterinaria/Veterinaria";
import { RedVeterinarias } from "../../../veterinaria/Veterinarias";
import { RutinaEjecutable } from "../RutinaEjecutable";
import { Cliente } from '../../../veterinaria/Cliente';

export class ListarClientesRutina implements RutinaEjecutable {

    vet: Veterinaria;
    red: RedVeterinarias;

    constructor(vet: Veterinaria, red: RedVeterinarias) {
        this.vet = vet;
        this.red = red;
    }

    ejecutarRutina(): boolean {
        console.clear();
        TextUtils.bannerVeterinaria(this.vet);
        console.log("Lista de Clientes:");
        TextUtils.consoleLinea();
        for (let index = 0; index < this.vet.getClientesVeterinaria().length; index++) {
            const idCli:number = this.vet.getClientesVeterinaria()[index];
            const cliente:Cliente = this.red.getClientes().find((cli) => cli.getId() == idCli);
            if (cliente) {
                console.log(`   ${cliente.getId()}  ${cliente.getDni()}  ${cliente.getNombre()} Tel: ${cliente.getTelefono()}`);
                TextUtils.consoleLinea();
            }
        }
        TextUtils.consoleLinea();
        TextUtils.esperarTecla();
        return true;
    }
}