import ProductModel from '#models/product.model.js';

/**
 * @desc		Fetch all products
 * @route		GET /api/v1/products
 * @access	public
 */

const getProducts = async (req, res) => {
  const products = await ProductModel.find({});
  res.json(products);
};

/**
 * @desc		Fetch single products
 * @route		GET /api/v1/products/:id
 * @access	public
 */

const getProductsById = async (req, res) => {
  const product = await ProductModel.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
};
/**
 * @desc		Create product
 * @route		POST /api/v1/products
 * @access	private/admin
 */
const createProduct = async (req, res) => {
  const product = new ProductModel({
    name: 'Sample product',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
    content: 'Sample content',
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

/**
 * @desc		Update product
 * @route		PUT /api/v1/products/:id
 * @access	private/admin
 */

const updateProduct = async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
    content,
  } = req.body;

  const product = await ProductModel.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    product.content = content;

    const updatedProduct = await product.save();
    res.status(404);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
};

/**
 * @desc		Delete product
 * @route		DELETE /api/v1/products/:id
 * @access	private/admin
 */
const deleteProduct = async (req, res) => {
  const product = await ProductModel.findById(req.params.id);

  if (product) {
    await ProductModel.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Product deleted' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
};

export {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
};
