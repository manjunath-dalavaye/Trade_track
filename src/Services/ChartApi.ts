import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const chartApi = createApi({
    reducerPath:"chartApi",
    baseQuery:fetchBaseQuery({ baseUrl:"http://localhost:4000/" }),
    endpoints:(builder)=>({
        getChartData:builder.query<string,void>({query:()=>"data"})
    })
})
export const { useGetChartDataQuery } = chartApi;