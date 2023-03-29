import express = require('express');
import {  getAllUsers, createUser, getUserById, updateUserById, deleteUserById } from '../controllers/userController';

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").patch(updateUserById).get(getUserById).delete(deleteUserById);

export default router;