import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://unity-uplift-server.vercel.app/'
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
        createSupply: builder.mutation({
            query: (data) => {
                return {
                    url: '/dashboard/create-supply',
                    method: 'POST',
                    body: data,
                };
            },
            invalidatesTags: ['relief'],
        }),
        deleteSupply: builder.mutation({
            query: (id) => {
                return {
                    url: `/dashboard/supply/${id}`,
                    method: 'DELETE',
                };
            },
            invalidatesTags: ['relief'],
        }),
        updateSupply: builder.mutation({
            query: ({ id, data }) => {
                return {
                    url: `/dashboard/supply/${id}`,
                    method: 'PATCH',
                    body: data,
                };
            },
            invalidatesTags: ['relief'],
        }),

    })
})

export const {
    useGetAllReliefsQuery, useGetLimitedReliefsQuery, useGetSingleReliefQuery, useCreateSupplyMutation, useDeleteSupplyMutation,
    useUpdateSupplyMutation,
} = baseApi;