import EstadoPedido from './EstadoPedido.js';
import Enviado from './Enviado.js';

class Pagado extends EstadoPedido {
    constructor() {
        super("Pagado");
    }

    manejar(pedido, accion) {
        if (accion === "enviar") {
            pedido.setEstado(new Enviado());
        }
    }
}

export default Pagado;