import { ObjectId } from "mongodb";
import GetConnection from "../config/connections";
import { Reservas } from "../models/reserva";


export const Listar = async (): Promise<Reservas[]> => {
    try {
        let rs: Reservas[] = [];
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection = mongo.db.collection<Reservas>("reservas");
        const result = collection.find().sort({ nombre: -1 }).toArray();
        rs = (await result).map((i) => i);
        mongo.client.close();
        return rs;
    } catch (error) {
        throw error;
    }
}
export const Agregar = async (reservas: Reservas): Promise<boolean> => {
    try {
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection = mongo.db.collection<Reservas>("reservas");
        const rs = collection.insertOne(reservas);
        return (await rs).acknowledged;
    } catch (error) {
        throw error;
    }
}

export const Delete = async (id: string): Promise<boolean> => {
    try {
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection = mongo.db.collection<Reservas>("reservas");
        const rs = collection.deleteOne({ _id: { $eq: new ObjectId(id) } });
        return (await rs).acknowledged;
     } catch (error) {
        throw error;
    }
}

export const Update = async (id: string, reserva: Reservas): Promise<boolean> => {

    try {
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection = mongo.db.collection<Reservas>("reservas");
        const rs = collection.updateOne({ _id: { $eq: new ObjectId(id) } }, {
            $set: {
                _id: reserva._id,
                clienteId: reserva.clienteId,
                vuelo: reserva.vuelo,
                fecha: reserva.fecha,
                precio: reserva.precio,
                descripcion: reserva.descripcion
            }
        }
        );
        return (await rs).acknowledged;

    } catch (error) {
        throw error;
    }




}


