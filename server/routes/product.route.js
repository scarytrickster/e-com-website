import express from 'express';

import {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '#controllers/product.controller.js';
import { admin, protect } from '#middlewares/admin.middleware.js';

const router = express.Router();

// Route or request handler

// router.get('/',getProducts);
router.route('/').get(getProducts).post(protect, admin, createProduct);

// router.get('/:id',getProductsById );
router
  .route('/:id')
  .get(getProductsById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;
