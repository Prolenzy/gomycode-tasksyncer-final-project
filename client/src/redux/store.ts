import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";


// Define RootState type for the entire Redux store state
export type RootState = ReturnType<typeof store.getState>;

// Combine reducers
const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer, // Use apiSlice's reducerPath as key
    auth: authReducer, // Use authReducer for the 'auth' slice
  });
  
// Configure the Redux store
const store = configureStore({
  reducer: rootReducer, // Pass combined reducers to configureStore
//    {
//     // Define reducers for API slice and auth slice
//     [apiSlice.reducerPath]: apiSlice.reducer, // Use apiSlice's reducerPath as key
//     auth: authReducer, // Use authReducer for the 'auth' slice
//   },
  middleware: (getDefaultMiddleware) =>
  // Use Redux Toolkit's getDefaultMiddleware and add API slice middleware
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true, // Enable Redux DevTools extension
});

export default store;
