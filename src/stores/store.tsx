import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { authenticationApi } from "./services/authentication.service";
import userReducer from "./slices/user.slice";

export const createStore = (
  options?: ConfigureStoreOptions["preloadedState"] | undefined
) =>
  configureStore({
    reducer: {
      user: userReducer,
      [authenticationApi.reducerPath]: authenticationApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authenticationApi.middleware),
    ...options,
  });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
