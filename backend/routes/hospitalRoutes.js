import { Router } from 'express';
import { registerHospital,getAllHospitals } from '../controllers/hospitalController.js';


const router = Router();

router.post('/register-hospital', registerHospital);
router.post('/all-hospitals', getAllHospitals);

export default router;