import { PRODUCTS_URL, UPLOADS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ pageNumber, keyword }) => ({
        url: PRODUCTS_URL,
        params: { pageNumber, keyword },
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Product'],
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Product'],
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: PRODUCTS_URL,
        method: 'POST',
      }),
      invalidatesTags: ['Product'],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Product'],
    }),
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: UPLOADS_URL,
        method: 'POST',
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}/reviews`,
        method: 'POST',
        body: data,
      }),

      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
} = productApiSlice;

// import { PRODUCTS_URL, UPLOADS_URL } from '../constants';
// import { apiSlice } from './apiSlice';

// export const productApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getProducts: builder.query({
//       query: () => ({
//         url: PRODUCTS_URL,
//       }),
//       keepUnusedDataFor: 5,
//       providesTags: ['Product'],
//     }),
//     getProductDetails: builder.query({
//       query: (productId) => ({
//         url: `${PRODUCTS_URL}/${productId}`,
//       }),
//       keepUnusedDataFor: 5,
//       providesTags: ['Product'],
//     }),
//     createProduct: builder.mutation({
//       query: () => ({
//         url: PRODUCTS_URL,
//         method: 'POST',
//       }),
//       invalidatesTags: ['Product'],
//     }),
//     updateProduct: builder.mutation({
//       query: (data) => ({
//         url: `${PRODUCTS_URL}/${data.productId}`,
//         method: 'PUT',
//         body: data,
//       }),
//       invalidatesTags: ['Product'],
//     }),
//     uploadProductImage: builder.mutation({
//       query: (data) => ({
//         url: UPLOADS_URL,
//         method: 'POST',
//         body: data,
//       }),
//       deleteProduct: builder.mutation({
//         query: (productId) => ({
//           url: `${PRODUCTS_URL}/${productId}`,
//           method: 'DELETE',
//         }),
//         invalidatesTags: ['Product'],
//       }),
//     }),
//   }),
// });

// export const {
//   useGetProductsQuery,
//   useGetProductDetailsQuery,
//   useCreateProductMutation,
//   useUpdateProductMutation,
//   useUploadProductImageMutation,
//   useDeleteProductMutation,
// } = productApiSlice;
