import { Router } from "express";
import carsRouter from './cars';
import uploadsRouter from './uploads';

const router = Router();

router.use('/cars', carsRouter);
router.use('/uploads', uploadsRouter);

export default router;