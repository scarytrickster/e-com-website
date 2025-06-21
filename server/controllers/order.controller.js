import OrderModel from '#models/order.model.js';

/**
 * @desc		Create new order
 * @route		POST /api/v1/orders
 * @access	private
 */

const createOrder = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const order = new OrderModel({
      orderItems: orderItems.map((item) => ({ ...item, product: { ...item } })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingAddress,
      taxPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
};

/**
 * @desc		Create logged in users order
 * @route		POST /api/v1/orders/my-orders
 * @access	private
 */

const getMyOrders = async (req, res) => {
  const orders = await OrderModel.find({ user: req.user._id });
  res.status(200).json(orders);
};

/**
 * @desc		Get order by ID
 * @route		GET /api/v1/orders/:id
 * @access	private
 */
const getOrderById = async (req, res) => {
  const order = await OrderModel.findById(req.params.id).populate(
    'user',
    'name email'
  );

  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
};

/**
 * @desc		Update order to paid
 * @route		PUT /api/v1/orders/:id/pay
 * @access	private
 */
const updateOrderToPaid = async (req, res) => {
  res.send('Update order to paid');
};

/**
 * @desc		Update order to delivered
 * @route		PUT /api/v1/orders/:id/deliver
 * @access	private
 */
const updateOrderToDelivered = async (req, res) => {
  const order = await OrderModel.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();

    res.status(200).json(updatedOrder);
  } else {
    res.status(400);
    throw new Error('Order not Found');
  }
};

/**
 * @desc		Get all orders
 * @route		GET /api/v1/orders
 * @access	private/admin
 */
const getAllOrders = async (req, res) => {
  const orders = await OrderModel.find({}).populate('user', 'name email');
  res.status(200).json(orders);
};

export {
  createOrder,
  getAllOrders,
  getMyOrders,
  getOrderById,
  updateOrderToDelivered,
  updateOrderToPaid,
};
