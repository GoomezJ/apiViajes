import { ObjectId } from "mongodb";

export interface Reservas{
    _id:ObjectId
    clienteId:ObjectId
    vuelo:string
    fecha:Date
    precio:string
    descripcion:string
}