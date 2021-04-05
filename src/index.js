import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {Provider} from 'react-redux';
import {createAPI} from "./services/api";
import {AuthorizationStatus} from './consts';
import {checkLogin} from './store/api-actions';
import {redirect} from "./store/middlewares/redirect";
import {configureStore} from '@reduxjs/toolkit';
import mainReducer from './store/root-reducer';
import {authorization, authorizationFailed, postCommentError} from './store/action';
import {Router as BrowserRouter} from 'react-router-dom';
import browserHistory from "./browser-history";


const api = createAPI(
    () => store.dispatch(authorization(AuthorizationStatus.NO_AUTH)),
    () => store.dispatch(authorizationFailed()),
    () => store.dispatch(postCommentError())
);

const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

store.dispatch(checkLogin());

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);
