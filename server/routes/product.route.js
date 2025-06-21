import express from 'express';

import {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
} from '#controllers/product.controller.js';
import { admin, protect } from '#middlewares/admin.middleware.js';

const router = express.Router();

// Route or request handler

// router.get('/',getProducts);
router.route('/').get(getProducts).post(protect, admin, createProduct);

// router.get('/:id',getProductsById );
router.route('/:id').get(getProductsById).put(protect, admin, updateProduct);

export default router;
