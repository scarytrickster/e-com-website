import express from 'express';

import {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
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

router.route('/:id/reviews').post(protect, createProductReview);

export default router;
