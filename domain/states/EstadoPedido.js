class EstadoPedido {
    constructor(nombre) {
        this.nombre = nombre;
    }

    manejar(pedido, accion) {
        throw new Error("Método no implementado");
    }
}

export default EstadoPedido;