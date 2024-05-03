import express from 'express';
import { allnhModelControllers } from '../Controllers/nhControllers.js';
import { allUserControllers } from '../Controllers/userControllers.js';
const router=express.Router();

router.post('/nh/signUP',allnhModelControllers.signUp)
router.get('/nh/getall',allnhModelControllers.getall)
router.post('/nh/addDoc',allnhModelControllers.addDoctor);
router.post('/nh/listDoc/',allnhModelControllers.putDoctorINtheList);
router.post('/user/signUP',allUserControllers.signUP);
router.post('/user/bookslot',allUserControllers.bookSlot);
router.delete('/user/:userID/slots/:slotID',allUserControllers.cancelSlot);
export default router;