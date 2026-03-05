import express from 'express';
import { procesarAccion, obtenerEstado } from '../controllers/pedidoController.js';

const router = express.Router();

router.post('/:accion', procesarAccion);
router.get('/', obtenerEstado);

export default router;