import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import BookSave from "./components/BookSave";
import BookList from "./components/BookList";
import App from "./App";
import BaseLayout from "./components/BaseLayout";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import bookReducer from "./store/reducer/bookReducer";
import cartReducer from "./store/reducer/cartReducer";
import userReducer from "./store/reducer/userReducer";
import thunk from "redux-thunk"; //1
import * as actionCreators from "./store/creators/actionCreators";

const rootReducer = combineReducers({
  bookReducer: bookReducer,
  userReducer: userReducer,
  cartReducer: cartReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const token = localStorage.getItem("jsonwebtoken");
store.dispatch(actionCreators.loadAuth(token));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add-book" element={<BookSave />} />
            <Route path="/registration" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/secret" element={<App />} />
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
