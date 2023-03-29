import express = require('express');
import { getAllCars, createCar, getCarById, updateCarById, deleteCarById } from '../controllers/carController2';

const router = express.Router();

router.route("/").get(getAllCars).post(createCar);
router.route("/:id").patch(updateCarById).get(getCarById).delete(deleteCarById);

export default router;