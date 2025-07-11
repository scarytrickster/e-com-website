import ProductModel from '#models/product.model.js';

/**
 * @desc		Fetch all products
 * @route		GET /api/v1/products?pageNumber=2&keyword=tshirt
 * @access	public
 */

const getProducts = async (req, res) => {
  const pageSize = 2;
  const page = +req.query.pageNumber || 1;

  const keyword = req.query.keyword
    ? { name: { $regex: req.query.keyword, $options: 'i' } }
    : {};

  const count = await ProductModel.countDocuments({ ...keyword });

  const products = await ProductModel.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
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

/**
 * @desc		Create a new review
 * @route		POST /api/v1/products/:id/reviews
 * @access	private
 */
const createProductReview = async (req, res) => {
  const { rating, comment } = req.body;

  const product = await ProductModel.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (review) => review.user._id.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Product already reviewed');
    }

    const review = {
      name: req.user.name,
      rating: +rating,
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((acc, currVal) => currVal.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: 'Review added' });
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
  createProductReview,
};
