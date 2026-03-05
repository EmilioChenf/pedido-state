import EstadoPedido from './EstadoPedido.js';

class Enviado extends EstadoPedido {
    constructor() {
        super("Enviado");
    }

    manejar(pedido, accion) {
        // No permite más cambios
    }
}

export default Enviado;