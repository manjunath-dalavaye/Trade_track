import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=8TKFL6DGPFMIDXZT' }),
  endpoints: (build) => ({
    getData: build.query<string, void>({
      query: () => "",
    }),
  }),
});

export const { useGetDataQuery } = apiSlice; 
