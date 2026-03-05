class PedidoRepository {
    constructor() {
        this.pedidos = [];
    }

    guardar(pedido) {
        this.pedidos.push({
            estado: pedido.obtenerEstado(),
            fecha: new Date()
        });
    }
}

export default PedidoRepository;