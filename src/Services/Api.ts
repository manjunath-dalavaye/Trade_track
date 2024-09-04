import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TableInterfaceCollection } from '../Interface/TableInterface';
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (build) => ({
    getData: build.query<TableInterfaceCollection, void>({
      query: () => "portfolio",
    }),
  }),
});

export const { useGetDataQuery } = apiSlice; 
