// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { getItemsDB } from "../../database/firebase";
// import { fetchItems } from "../slices/itemSlice";

// export const getItemsApi = createApi({
//   reducerPath: "getItemsApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "/",
//   }),
//   endpoints: (build) => ({
//     getItems: build.query({
//       // note: an optional `queryFn` may be used in place of `query`
//       queryFn: getItemsDB(),
//       // queryFn: fetchItems(),
//       // Pick out data and prevent nested properties in a hook or selector
//       transformResponse: (response) => response.data,
//       providesTags: (result, error, id) => [{ type: "Post", id }],
//       // The 2nd parameter is the destructured `QueryLifecycleApi`

//       // The 2nd parameter is the destructured `QueryCacheLifecycleApi`
//     }),
//   }),
// });
// export const { useGetItemsQuery } = getItemsApi;
