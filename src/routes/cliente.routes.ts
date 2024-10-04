import express from 'express'
import * as clienteController from '../controllers/cliente.controller'
import { Cliente } from '../models/cliente';

const router = express.Router();

router.get('/', (req, res) => {
   clienteController.listarClientes()
      .then((data) => {
         res.json(data);
      })
      .catch((e) => {
         console.log(e);
         res.status(500).send
      })
});

router.post('/add', (req, res) => {
   clienteController.crearCliente(req.body as Cliente)
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

router.delete('/delete/:id', (req, res) => {
   clienteController.deleteCliente(req.params.id)
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
   clienteController.updateCliente(req.params.id, req.body as Cliente)
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