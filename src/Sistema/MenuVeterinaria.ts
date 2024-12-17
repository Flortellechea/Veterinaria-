import * as readlineSync from 'readline-sync';
import { Veterinaria } from "../veterinaria/Veterinaria";
import { TextUtils } from '../Utils/TextUtils';
import { RedVeterinarias } from '../veterinaria/Veterinarias';
import { CrearClienteRutina } from './rutinas/clientes/CrearClienteRutina';

export class MenuVeterinaria {
   
    vet: Veterinaria;
    red: RedVeterinarias;

    constructor(vet: Veterinaria, red: RedVeterinarias) {
        this.vet = vet;
        this.red = red;
    }

    public desplegarMenu(): boolean {
        console.clear();
        TextUtils.bannerVeterinaria(this.vet);
        console.log("Seleccione opción para operar:");
        console.log("1 - Listar Clientes");
        console.log("2 - Crear Cliente");
        console.log("3 - Modificar Cliente");
        console.log("4 - Eliminar Cliente");
        TextUtils.consoleLinea();
        console.log("5 - Listar Pacientes");
        console.log("6 - Crear Paciente");
        console.log("7 - Modificar Paciente");
        console.log("8 - Eliminar Paciente");
        TextUtils.consoleLinea();
        console.log("9 - Listar Proveedores");
        console.log("10 - Crear Proveedor");
        console.log("11 - Eliminar Proveedor");
        console.log("12 - Modificar Proveedor");
        TextUtils.consoleLinea();
        console.log("0 - Volver a la Red de Veterinarias");

        const opcion = Number(readlineSync.questionInt("Ingrese una opcion: "));
        if (opcion === 0) {
            return false;
        }
        switch (opcion) {
            case 1:
                console.log("Listar Clientes");
                break;
            case 2:
                new CrearClienteRutina(this.vet, this.red).ejecutarRutina();
                break;
            case 3:
                console.log("Modificar Cliente");
                break;
            case 4:
                console.log("Eliminar Clientes");
                break;
            case 5:
                console.log("Listar Pacientes");
                break;
            case 6:
                console.log("Crear Paciente");
                break;
            case 7:
                console.log("Modificar Paciente");
                break;
            case 8:
                console.log("Eliminar Paciente");
                break;
            case 9:
                console.log("Listar Proveedores");
                break;
            case 10:
                console.log("Crear Proveedor");
                break;
            case 11:
                console.log("Eliminar Proveedor");
                break;
            case 12:
                console.log("Modificar Proveedor");
            default:
                console.log("Opción inválida.");
                TextUtils.esperarTecla();
                return true;
        }

        return true;
    }
}