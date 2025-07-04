import express from 'express';

import {
  authUser,
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  logoutUser,
  registerUser,
  updateUser,
  updateUserProfile,
} from '#controllers/user.controller.js';
import { protect ,admin} from '#middlewares/admin.middleware.js';

const router =express.Router();

router.route('/').post(registerUser).get(protect,admin,getUsers);
router.post('/login',authUser)
router.post('/logout',logoutUser)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);
router.route('/:id').delete(protect,admin,deleteUser).get(protect,getUserById).put(protect,admin,updateUser);


export default router;