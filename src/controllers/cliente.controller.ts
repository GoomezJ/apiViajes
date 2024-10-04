import { Cliente } from "../models/cliente";
import * as clienteDao from "../dao/cliente.dao"

export const listarClientes = async (): Promise<Cliente[]>=>{
    try {
        let c: Cliente[] = await clienteDao.Listar();
        return c;
    } catch (error) {
        throw error;
    }
}
export const crearCliente = async(cliente:Cliente): Promise<boolean>=>{
try {
    return await clienteDao.Agregar(cliente)
} catch (error) {
    throw error;
}
}
export const deleteCliente = async(id:string): Promise<boolean>=>{
    try {
        return await clienteDao.Delete(id)
    } catch (error) {
        throw error;
    }
}
export const updateCliente = async(id:string,cliente:Cliente): Promise<boolean>=>{
    try {
        return await clienteDao.Update(id,cliente)
    } catch (error) {
       throw error
    }
}