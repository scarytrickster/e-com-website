import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import AdminRoute from '@components/AdminRoute';
// import HomeScreen from "@screens/Home";
import Layout from '@components/Layout';
// import ErrorScreen from '@screens/Error';
// import ProductDetailsScreen from '@screens/ProductDetails';

import {
  HomeScreen,
  ErrorScreen,
  ProductDetailsScreen,
  CartScreen,
  LoginScreen,
  RegisterScreen,
  ShippingScreen,
  PaymentScreen,
  PlaceOrderScreen,
  OrderScreen,
  ProfileScreen,
  OrderListScreen,
  ProductListScreen,
  ProductEditScreen,
  UserListScreen,
  UserEditScreen,
} from '@screens';
import store from './store';
import PrivateRoute from '@components/Private Route';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorScreen />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: '/page/:pageNumber',
        element: <HomeScreen />,
      },
      {
        path: '/search/:keyword',
        element: <HomeScreen />,
      },
      {
        path: '/search/:keyword/page/:pageNumber',
        element: <HomeScreen />,
      },
      {
        path: '/product/:id',
        element: <ProductDetailsScreen />,
      },
      {
        path: '/cart',
        element: <CartScreen />,
      },
      {
        path: '/login',
        element: <LoginScreen />,
      },
      {
        path: '/register',
        element: <RegisterScreen />,
      },
      {
        path: '',
        element: <PrivateRoute />,
        children: [
          {
            path: '/shipping',
            element: <ShippingScreen />,
          },
          {
            path: '/payment',
            element: <PaymentScreen />,
          },
          {
            path: '/placeorder',
            element: <PlaceOrderScreen />,
          },
          {
            path: '/order/:id',
            element: <OrderScreen />,
          },
          {
            path: '/profile',
            element: <ProfileScreen />,
          },
        ],
      },
      {
        path: '',
        element: <AdminRoute />,
        children: [
          {
            path: '/admin/orderlist',
            element: <OrderListScreen />,
          },
          {
            path: '/admin/productlist',
            element: <ProductListScreen />,
          },
          {
            path: '/admin/product/:id/edit',
            element: <ProductEditScreen />,
          },
          {
            path: '/admin/userlist',
            element: <UserListScreen />,
          },
          {
            path: '/admin/user/:id/edit',
            element: <UserEditScreen />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <PayPalScriptProvider
        deferLoading
        options={{
          currency: 'USD',
        }}>
        <ToastContainer
          position='bottom-right'
          hideProgressBar={true}
          autoClose={5000}
          theme='colored'
          transition={Bounce}
        />
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  );
};

export default App;
