import express from "express";
import * as reservaController from '../controllers/reserva.controller';
import { Reservas } from "../models/reserva";

const router = express.Router();

router.get('/', (req, res) => {
    reservaController.listarReservas()
    .then((data) => {
        res.json(data);
      })
        .catch((e) => {
            console.log(e);
            res.status(500).send
        })
});

router.post('/add', (req, res) => {
    reservaController.crearReserva(req.body as Reservas)
       .then((f) => {
          if (f)
             res.status(201).send();
          else
             res.status(500).send;
       })
       .catch((e) => {
          console.log(e);
          res.status(500).send
       })
 });

 router.delete('/delete/:id',(req,res)=>{
   reservaController.deleteReserva(req.params.id)
   .then((f) => {
      if (f)
         res.status(201).send();
      else
         res.status(500).send;
   })
   .catch((e) => {
      console.log(e);
      res.status(500).send
   })
 })

 router.put('/update/:id', (req, res) => {
  reservaController.updateReserva(req.params.id, req.body as Reservas)
      .then((f) => {
         if (f)
            res.status(201).send();
         else
            res.status(500).send;
      })
      .catch((e) => {
         console.log(e);
         res.status(500).send
      })

})
export default router;