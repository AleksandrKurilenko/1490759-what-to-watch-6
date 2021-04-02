import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {ActionCreator} from './store/action';
import {AuthorizationStatuses} from './consts';
import {checkLogin} from './store/api-actions';
import {redirect} from "./store/middlewares/redirect";


const api = createAPI(
    () => store.dispatch(ActionCreator.authorization(AuthorizationStatuses.NO_AUTH)),
    () => store.dispatch(ActionCreator.authorizationFailed())
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkLogin());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
