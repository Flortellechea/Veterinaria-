import * as readlineSync from 'readline-sync';
import { Veterinaria } from "../veterinaria/Veterinaria";
import { TextUtils } from '../Utils/TextUtils';
import { RedVeterinarias } from '../veterinaria/Veterinarias';
import { CrearClienteRutina } from './rutinas/clientes/CrearClienteRutina';
import { ListarClientesRutina } from './rutinas/clientes/ListarClientesRutina';
import { ModificarClienteRutina } from './rutinas/clientes/ModificarClienteRutina';
import { EliminarClienteRutina } from './rutinas/clientes/EliminarClienteRutina';
import { ListarProveedorRutina } from './rutinas/proveedores/ListarProveedoresRutina';
import { CrearProveedorRutina } from './rutinas/proveedores/CrearProveedorRutina';
import { ModificarProveedorRutina } from './rutinas/proveedores/ModificarProveedorRutina';
import { EliminarProveedorRutina } from './rutinas/proveedores/EliminarProveedorRutina';
import { CrearPacienteRutina } from './rutinas/pacientes/CrearPaciente';
import { ListarPacienteRutina } from './rutinas/pacientes/ListarPacientesRutina';
import { ModificarPacienteRutina } from './rutinas/pacientes/ModificarPacienteRutina';
import { EliminarPacienteRutina } from './rutinas/pacientes/EliminarPacienteRutina';

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
                new ListarClientesRutina(this.vet, this.red).ejecutarRutina();
                break;
            case 2:
                new CrearClienteRutina(this.vet, this.red).ejecutarRutina();
                break;
            case 3:
                new ModificarClienteRutina(this.vet, this.red).ejecutarRutina();
                break;
            case 4:
                new EliminarClienteRutina(this.vet, this.red).ejecutarRutina();
                break;
            case 5:
                new ListarPacienteRutina(this.vet, this.red).ejecutarRutina();                
                break;
            case 6:
                new CrearPacienteRutina(this.vet, this.red).ejecutarRutina();
                break;
            case 7:
                new ModificarPacienteRutina(this.vet, this.red).ejecutarRutina();
                break;
            case 8:
                new EliminarPacienteRutina(this.vet, this.red).ejecutarRutina();
                break;
            case 9:
                new ListarProveedorRutina(this.vet, this.red).ejecutarRutina();
                break;
            case 10:
                new CrearProveedorRutina(this.vet, this.red).ejecutarRutina();
                break;
            case 11:
                new EliminarProveedorRutina(this.vet, this.red).ejecutarRutina();               
                break;
            case 12:
                new ModificarProveedorRutina(this.vet, this.red).ejecutarRutina();
            default:
                console.log("Opción inválida.");
                TextUtils.esperarTecla();
                return true;
        }

        return true;
    }
}