import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";
import cloneDeep from "lodash/cloneDeep";
import { useDispatch } from "react-redux";
import user, { initialState } from "./user";

const PERSISTED_KEYS: string[] = ["mintt"];

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    user,
  },
  middleware: [
    ...getDefaultMiddleware({ thunk: true }),
    save({ states: PERSISTED_KEYS }),
  ],
  preloadedState: load({
    states: PERSISTED_KEYS,
    preloadedState: {
      mint: cloneDeep(initialState),
    },
  }),
});

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch();

export default store;
