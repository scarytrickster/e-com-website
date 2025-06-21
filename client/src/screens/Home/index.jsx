import { useGetProductsQuery } from '@slices/productSlice';

import ProductCard from '@components/ProductCard';
import Loader from '@components/Loader';
import Alert from '@components/Alert';

const HomeScreen = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery(); //not a function
  // console.log(error);

  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-7xl px-3 py-10 sm:p-6 lg:px-8'>
        <h1 className='text-2xl font-bold text-slate-900'>Latest Products</h1>

        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Alert type='error'>{error?.data?.message || error?.error}</Alert>
        ) : (
          <div className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeScreen;
