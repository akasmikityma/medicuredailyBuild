import express from 'express';
import { allnhModelControllers } from '../Controllers/nhControllers.js';
const router=express.Router();

router.post('/nh/signUP',allnhModelControllers.signUp)
router.get('/nh/getall',allnhModelControllers.getall)

export default router;