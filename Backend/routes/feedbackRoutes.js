import express from 'express';
import { submitFeedback, getDoctorFeedback } from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/submit', submitFeedback);
router.get('/:docId', getDoctorFeedback);

export default router;
