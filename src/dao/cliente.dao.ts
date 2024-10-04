import { ObjectId } from "mongodb";
import GetConnection from "../config/connections";
import { Cliente } from "../models/cliente";

export const Listar = async (): Promise<Cliente[]> => {
    try {
        let rs: Cliente[] = [];
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection = mongo.db.collection<Cliente>("clientes");
        const result = collection.find().sort({ nombre: -1 }).toArray();
        rs = (await result).map((i) => i);
        mongo.client.close();
        return rs;
    } catch (error) {
        throw error;
    }
}
export const Agregar = async (cliente: Cliente): Promise<boolean> => {
    try {
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection = mongo.db.collection<Cliente>("clientes");
        const rs = collection.insertOne(cliente);
        return (await rs).acknowledged;
    } catch (error) {
        throw error;
    }
}
export const Delete = async (id: string): Promise<boolean> => {
    try {
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection = mongo.db.collection<Cliente>("clientes");
        const rs = collection.deleteOne({ _id: { $eq: new ObjectId(id) } });
        return (await rs).acknowledged;
    } catch (error) {
        throw error;
    }
}

export const Update = async (id: string, cliente: Cliente): Promise<boolean> => {
    try {
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection = mongo.db.collection<Cliente>("clientes");
        const rs = collection.updateOne({ _id: { $eq: new ObjectId(id) } },
            {
                $set: {
                    nombre: cliente.nombre,
                    correo : cliente.correo,
                    reservas: cliente.reservas
                }
            }
        );
        return (await rs).acknowledged;
    } catch (error) {
        throw error;
    }
}