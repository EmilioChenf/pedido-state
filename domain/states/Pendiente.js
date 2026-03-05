import EstadoPedido from './EstadoPedido.js';
import Pagado from './Pagado.js';
import Cancelado from './Cancelado.js';

class Pendiente extends EstadoPedido {
    constructor() {
        super("Pendiente");
    }

    manejar(pedido, accion) {
        if (accion === "pagar") {
            pedido.setEstado(new Pagado());
        } else if (accion === "cancelar") {
            pedido.setEstado(new Cancelado());
        }
    }
}

export default Pendiente;