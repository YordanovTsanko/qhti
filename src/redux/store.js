import { configureStore, combineReducers } from "@reduxjs/toolkit";

const appReducer = combineReducers({
  // auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "auth/logout/fulfilled") {
    state = undefined;
  }
  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE !== "production", // enable Redux DevTools in development
});

export default store;
