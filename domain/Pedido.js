import Pendiente from './states/Pendiente.js';

class Pedido {
    constructor() {
        this.estado = new Pendiente();
    }

    setEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }

    procesarAccion(accion) {
        this.estado.manejar(this, accion);
    }

    obtenerEstado() {
        return this.estado.nombre;
    }
}

export default Pedido;