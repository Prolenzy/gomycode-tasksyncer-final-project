import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define API base URL
const API_URI = "http://localhost/api";

// Create base query with API base URL
const baseQuery = fetchBaseQuery({ baseUrl: API_URI });

// Create API slice
export const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery,
    // tagTypes: [],
    endpoints: () => ({}),
});
