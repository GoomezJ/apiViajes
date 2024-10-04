import * as reservaDao from "../dao/reserva.dao"
import { Reservas } from '../models/reserva';
export const listarReservas=async(): Promise<Reservas[]>=>{
    try {
        let t: Reservas[] = await reservaDao.Listar();
        return t;
    } catch (error) {
        throw error;
    }
}

export const crearReserva = async(reservas:Reservas): Promise<boolean>=>{
    try {
        return await  reservaDao.Agregar(reservas);
    } catch (error) {
        throw error;
    }
}
export const deleteReserva = async(id:string): Promise<boolean>=>{
    try {
        return await reservaDao.Delete(id)
    } catch (error) {
        throw error;
    }
}

export const updateReserva = async(id:string,Reservas:Reservas): Promise<boolean>=>{
    try {
        return await reservaDao.Update(id,Reservas)
    } catch (error) {
       throw error
    }
}
