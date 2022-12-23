import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from './api'


export const goodsApi = createApi({
    reducerPath: 'goodsApi',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (build) => ({
        getEyewear: build.query({
            query: () => `products`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Products', id })),
                        { type: 'Products', id: 'LIST' },
                    ]
                    : [{ type: 'Products', id: 'LIST' }],
        }),

        addProduct: build.mutation({
            query: (body) => ({
                url: 'products',
                method: 'POST',
                body,
            })
        })
    })

})

export const { useGetEyewearQuery, useAddProductMutation } = goodsApi;

