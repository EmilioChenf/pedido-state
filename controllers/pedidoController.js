import Pedido from '../domain/Pedido.js';
import PedidoRepository from '../repository/PedidoRepository.js';

const pedido = new Pedido();
const repo = new PedidoRepository();

export const procesarAccion = (req, res) => {
    const { accion } = req.params;

    pedido.procesarAccion(accion);
    repo.guardar(pedido);

    res.json({
        mensaje: "Acción procesada",
        estadoActual: pedido.obtenerEstado()
    });
};

export const obtenerEstado = (req, res) => {
    res.json({
        estadoActual: pedido.obtenerEstado()
    });
};