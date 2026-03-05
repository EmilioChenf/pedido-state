import EstadoPedido from './EstadoPedido.js';

class Cancelado extends EstadoPedido {
    constructor() {
        super("Cancelado");
    }

    manejar(pedido, accion) {
        // No permite más cambios
    }
}

export default Cancelado;