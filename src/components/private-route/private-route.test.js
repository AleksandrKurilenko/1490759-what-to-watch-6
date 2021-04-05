import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import PrivateRoute from './private-route';
import {AuthorizationStatus} from '../../consts';
import {NameSpace} from '../../store/root-reducer';

const mockStore = configureStore({});
let history;
describe(`Test PrivateRouter`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(`/private`);
  });

  it(`Should be render component for public route, when user not authorized`, () => {
    const store = mockStore({
      [NameSpace.AUTH]: {authorizationStatus: AuthorizationStatus.NO_AUTH}
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <Route exact path="/login"><h1>Public Route</h1></Route>
            <PrivateRoute
              exact
              path="/private"
              render={() => (<h1>Private Route</h1>)}
            />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it(`Should be render component for private route, when user authorized`, () => {
    const store = mockStore({
      [NameSpace.AUTH]: {authorizationStatus: AuthorizationStatus.AUTH}
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <Route exact path="/login"><h1>Public Route</h1></Route>
            <PrivateRoute
              exact
              path="/private"
              render={() => (<h1>Private Route</h1>)}
            />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });
});
