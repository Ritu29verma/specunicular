// routes/doctorRoutes.js
import { Router } from 'express';
import { registerDoctor,getAllDoctors, approveDoctor } from '../controllers/doctorController.js';

const router = Router();

router.post('/register', registerDoctor);
router.get('/all', getAllDoctors);
router.post('/:id/approve', approveDoctor);

export default router;
