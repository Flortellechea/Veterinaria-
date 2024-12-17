
import * as readlineSync from 'readline-sync';
import * as  fs from 'fs';
import { TextUtils } from "../Utils/TextUtils";
import { Paciente } from "./Paciente";
import { Cliente } from "./Cliente";
import { Persona } from "./Persona";
import { Veterinaria } from './Veterinaria';


export class RedVeterinarias {
    private verterinarias: Veterinaria[];
    private clientes: Cliente[];
    private pacientes: Paciente[];
    private proveedores: Persona[];

    constructor() {
        this.cargar();
    }

    public listarVeterinarias() {
        TextUtils.consoleLinea();
        console.log(`  Red de Veterinarias`);
        TextUtils.consoleLinea();
        for (let index = 0; index < this.verterinarias.length; index++) {
            const vet:Veterinaria = this.verterinarias[index];
            console.log(`     ${vet.id}  ${vet.nombre}`);
            TextUtils.consoleLinea();
        }
        TextUtils.consoleLinea();
        TextUtils.esperarTecla();
    }

    public agregarVeterinaria(veterinaria: Veterinaria) {
        this.verterinarias.push(veterinaria);
    }


    public guardar() {
        const dataGuardar = {
            veterinarias: this.verterinarias,
            clientes: this.clientes,
            pacientes: this.pacientes,
            proveedores: this.proveedores,
        }
        fs.writeFileSync('./data.txt', JSON.stringify(dataGuardar));
    }

    public cargar() {
        this.verterinarias = [];
        this.clientes = [];
        this.pacientes = [];
        this.proveedores = [];
        try {
            const datos = fs.readFileSync('./data.txt', 'utf8');
            const datosVeterinaria = JSON.parse(datos);
            for (let index = 0; index < datosVeterinaria.veterinarias.length; index++) {
                const vet = datosVeterinaria.veterinarias[index];
                const nuevaVet = new Veterinaria(vet.id, vet.nombre, vet.direccion);
                if (vet.clientesVeterinaria) {
                    nuevaVet.setClientesVeterinaria(vet.clientesVeterinaria);
                }
                if (vet.pacientesVeterinaria) {
                    nuevaVet.setPacientesVeterinaria(vet.pacientesVeterinaria);
                }
                this.verterinarias.push(nuevaVet);
            }
            for (let index = 0; index < datosVeterinaria.clientes.length; index++) {
                const cli = datosVeterinaria.clientes[index];
                this.clientes.push(new Cliente(cli.id, cli.dni, cli.nombre, cli.telefono));
            }
            for (let index = 0; index < datosVeterinaria.pacientes.length; index++) {
                const pac = datosVeterinaria.pacientes[index];
                const duenio = new Persona(pac.duenio.id, pac.duenio.dni, pac.duenio.nombre, pac.duenio.telefono);
                this.pacientes.push(new Paciente(pac.id, pac.nombre, pac.especie, duenio));
            }
            for (let index = 0; index < datosVeterinaria.proveedores.length; index++) {
                const pro = datosVeterinaria.proveedores[index];
                this.proveedores.push(new Persona(pro.id, pro.dni, pro.nombre, pro.telefono));
            }
        } catch (error) {
            console.log(error);
        }
        // console.log(this.verterinarias,this.clientes,this.pacientes,this.proveedores);
    }
    
    public getVeterinarias(): Veterinaria[] {
        return this.verterinarias;
    }

    public getClientes(): Cliente[] {
        return this.clientes;
    }

    public getPacientes(): Paciente[] {
        return this.pacientes;
    }

    public getProveedores(): Persona[] {
        return this.proveedores;
    }

}