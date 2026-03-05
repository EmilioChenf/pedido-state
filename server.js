import express from 'express';
import pedidoRoutes from './routes/pedidoRoutes.js';

const app = express();
app.use(express.json());

app.use('/api/pedido', pedidoRoutes);

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});