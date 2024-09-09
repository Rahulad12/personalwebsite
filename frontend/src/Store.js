import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apliSlices";
import authSlicereducer from "./slices/authSlices";


const Store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlicereducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default Store;