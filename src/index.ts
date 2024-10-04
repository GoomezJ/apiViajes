import express from 'express';
import clienteRouter from './routes/cliente.routes';
import reservaRouter from './routes/reserva.routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT = 3000;

app.use('/api/clientes', clienteRouter);
app.use('/api/reservas', reservaRouter);

app.listen(PORT,()=>{
    console.log(`Servidor escuchan el puerto ${PORT}`)
})
