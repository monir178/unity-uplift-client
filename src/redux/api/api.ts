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
        getSingleRelief: builder.query({
            query: (id) => ({
                url: `/relief-goods/${id}`,
                method: 'GET',
            }),

        }),
    })
})

export const { useGetAllReliefsQuery, useGetLimitedReliefsQuery, useGetSingleReliefQuery } = baseApi;