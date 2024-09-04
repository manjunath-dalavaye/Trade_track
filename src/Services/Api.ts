import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TableInterfaceCollection,TableInterface } from '../Interface/TableInterface';
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (build) => ({
    getData: build.query<TableInterface[], void>({
      query: () => "portfolio",
    }),
  }),
});

export const { useGetDataQuery } = apiSlice; 
