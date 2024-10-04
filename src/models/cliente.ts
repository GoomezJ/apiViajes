import { ObjectId } from "mongodb";
import { Reservas } from "./reserva";

export interface Cliente{
    _id: ObjectId;
    nombre: string;
    correo: string;
    reservas: Reservas[];
}