import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Rating from '@components/ProductCard/Rating';
import { useGetProductDetailsQuery } from '@slices/productSlice';
import QuantitySelector from './QuantitySelector';
import Alert from '@components/Alert';
import Loader from '@components/Loader';
import { addToCart } from '@slices/cartSlice';

const ProductDetailsScreen = () => {
  const { id: productId } = useParams();

  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useGetProductDetailsQuery(productId);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };

  return (
    <div className='bg-white py-6 pb-16 sm:pb-24'>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <Link
          to='/'
          className='mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-all hover:text-slate-700'>
          <ArrowUturnLeftIcon className='h-3.5 w-3.5' /> Back
        </Link>

        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Alert type='error'>{error?.data?.message | error?.error}</Alert>
        ) : (
          <div className='lg:grid lg:grid-cols-12 lg:gap-x-8'>
            {/* Image */}
            <div className='mt-8 lg:col-span-7 lg:mt-0'>
              <img
                src={product.image}
                alt={product.name}
                className='rounded-lg'
              />
            </div>

            {/* Product name and other details */}
            <div className='lg:col-span-5 lg:col-start-8'>
              <h6 className='inline-block rounded-full border border-slate-300 px-3 py-0.5 text-sm font-medium text-slate-500'>
                {product.category}
              </h6>
              <h6 className='mt-8 text-sm font-semibold text-indigo-700'>
                {product.brand}
              </h6>
              <div className='mt-1 flex justify-between'>
                <h1 className='text-2xl font-medium text-slate-900'>
                  {product.name}
                </h1>
                <p className='text-2xl font-medium text-slate-900'>
                  ₹{product.price}
                </p>
              </div>

              {/* Rating */}
              <div className='my-1 flex items-center gap-0'>
                <Rating value={product.rating} />
                <span className='ml-8 mt-0.5 text-sm font-semibold text-slate-700'>
                  {product.numReviews} reviewes
                </span>
              </div>

              {/* Description */}
              <div className='mt-10'>
                <p className='text-slate-500'>{product.description}</p>
              </div>

              {/* Quantity Selector */}
              <QuantitySelector
                countInStock={product.countInStock}
                quantity={qty}
                setQuantity={setQty}
              />

              {/* Add To Cart Button */}
              <button
                className='mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white transition-all hover:bg-indigo-700'
                onClick={handleAddToCart}>
                Add to cart
              </button>

              {/* Content */}
              <div className='mt-10 border-t border-slate-200 pt-8'>
                <h2 className='text-sm font-medium text-slate-500'>
                  Description
                </h2>

                <div className='prose prose-sm prose-slate mt-4 text-slate-500'>
                  <ReactMarkdown>{product.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsScreen;

// import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline"
// import { Link, useParams } from "react-router-dom"
// import ReactMarkdown from 'react-markdown'
// import axios from "axios"
// import { useState,useEffect } from "react"

// import Rating from "@components/ProductCard/Rating"
// // import products from "@data/products"
// import QuantitySelector from "./QuantitySelector";

// const ProductDetailsScreen = () => {

//     const {id:productId}=useParams();
//     const [product,setProduct]=useState({})

//     useEffect(() => {
//         const fetchProduct=async () => {
//             const {data}=await axios.get(`/api/v1/products/${productId}`)
//             setProduct(data);
//         }

//         fetchProduct();
//     },[productId])

//   return (
//     <div className="bg-white pb-16 py-6 sm:pb-24">
//         <div className="sm:px-6 mx-auto max-w-2xl px-4 lg:max-w-7xl
//         lg:px-8">
//             <Link to="/" className="mb-5 inline-flex items-center gap-1.5
//              text-sm font-medium text-slate-500 transition-all hover:text-slate-700">
//                 <ArrowUturnLeftIcon className="h-3.5 w-3.5"/>Go back
//             </Link>

//             <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
//                 {/*Image*/}
//                 <div className="mt-8 lg:col-span-5 lg:mt-0">
//                     <img src={product.image} alt={product.name} className="rounded-lg"/>

//                 </div>

//                 {/* {Product name and other details */}

//                 <div className="lg:col-span-5 lg:col-start-6 ">
//                     <h6 className="inline-block rounded-full border
//                       border-slate-900 px-3 py-0.5 text-sm font-medium
//                       text-slate-900">
//                         {product.category}
//                     </h6>

//                     <h6 className="mt-8 text-sm font-semibold text-indigo-700">
//                         {product.brand}

//                     </h6>

//                     <div className="mt-1 flex justify-between">
//                         <h1 className="text-2xl font-medium text-slate-900">
//                             {product.name}

//                         </h1>

//                         <p className="text-2xl font-medium text-slate-900">
//                             ₹{product.price}
//                         </p>

//                     </div>

//                     {/* {Rating} */}
//                     <div className="my-1 flex items-center gap-0">
//                         <Rating value={product.rating}/>
//                         <span className="ml-8 mt-0.5 text-sm font-semibold text-slate-900">
//                             {product.numReviews}Reviews
//                         </span>
//                     </div>

//                     {/* {Description} */}
//                     <div className="mt-10">
//                         <p className="text-slate-500">{product.description}</p>

//                     </div>

//                     {/* {Quantity Selector} */}

//                     <QuantitySelector countInStock={product.countInStock}/>

//                     {/* {Add to cart button} */}

//                     <button className="mt-8 w-full items-center justify-center rounded-md
//                     border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white transition-all
//                     hover:bg-indigo-700">
//                         Add to Cart

//                     </button>

//                     {/* {Content} */}

//                     <div className="mt-10 border-t border-slate-200 pt-8">
//                         <h2 className="text-sm font-medium text-slate-500">
//                             Description

//                         </h2>
//                         <div className="text-slate-500 mt-4 prose prose-sm prose-grey">
//                             <ReactMarkdown>{product.content}</ReactMarkdown>

//                         </div>

//                     </div>

//                 </div>

//             </div>

//         </div>

//     </div>
//   );
// };

// export default ProductDetailsScreen;
