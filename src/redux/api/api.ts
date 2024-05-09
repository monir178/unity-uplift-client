import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'
    }),
    tagTypes: ['relief'],
    endpoints: (builder) => ({
        getAllReliefs: builder.query({
            query: () => ({
                url: '/all-relief-goods',
                method: 'GET',
            }),
            providesTags: ['relief']
        }),
        getLimitedReliefs: builder.query({
            query: () => ({
                url: '/relief-goods',
                method: 'GET',
            }),
            providesTags: ['relief']
        }),
    })
})

export const { useGetAllReliefsQuery, useGetLimitedReliefsQuery } = baseApi;