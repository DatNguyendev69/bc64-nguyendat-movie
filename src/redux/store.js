import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userReducer/userSlice";
import loadingSlice from "./LoadingReducer/loadingSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    // loadingReducer: loadingSlice,
    loadingReducer: loadingSlice,
  },
});
