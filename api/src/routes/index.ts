const { Router } = require('express');
import characterRouter from "./characterRouter";
// Importar todos los routers;


const router = Router();

// Configurar los routers:
router.use('/characters', characterRouter);



export default router;