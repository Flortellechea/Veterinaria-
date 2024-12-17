
import { Cliente } from './cliente';
import { Paciente } from './paciente';
import { Proveedor } from './proveedor';


export class RedVeterinarias {

    clientes: Cliente[] = [];
    pacientes: Paciente[] = [];
    proveedores: Proveedor[] = [];
    
   
    agregarVeterinaria(nombre: string, direccion: string): void {
      
    }


    agregarCliente(nombre: string, telefono: string): void {
        const nuevoCliente = new Cliente(nombre, telefono);
        this.clientes.push(nuevoCliente);
    }

    agregarProveedor(nombre: string, telefono: string): void {
        const nuevoProveedor = new Proveedor(nombre, telefono);
        this.proveedores.push(nuevoProveedor);
    }


   

}