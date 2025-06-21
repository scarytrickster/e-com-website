import colors from 'colors';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import connectDB from '#config/db.config.js';
import productsRoutes from '#routes/product.route.js';
import { errorHandler } from '#middlewares/error.middleware.js';
import userRoutes from '#routes/user.route.js';
import orderRoutes from '#routes/order.route.js';
import uploadRoutes from '#routes/upload.route.js';

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json()); //middleware   //req.body  //Request body parsing
app.use(express.urlencoded({ extented: true })); // Form Data Parsing
app.use(cookieParser()); //Cookies parsing

app.use(morgan('dev'));

// // Route or request handler
// app.get('/', (req, res) => {
//   res.json({ message: 'API is running' });
// });

// app.get('/api/v1/products',(req,res) => {
//     res.json(products);
// });

// app.get('/api/v1/products/:id', (req,res) =>{
//     const product= products.find((prod) => prod._id === req.params.id);
//     res.json(product);
// });

app.use('/api/v1/products', productsRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/uploads', uploadRoutes);

app.use('/api/v1/config/paypal', (req, res) => {
  res.json({ clientId: process.env.PAYPAL_CLIENT_ID });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.cyan
  );
});
