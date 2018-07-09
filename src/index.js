import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
// import Root from './components/Root';
import Root from './containers/Root';
import configureStore, { history } from './store/configureStore';
import 'antd/dist/antd.css';
// require('./favicon.ico'); // Tell webpack to load favicon.ico
import NotFound from './components/NotFoundPage/NotFoundPage';
import { PrivateRoute } from './components/PrivateRoute';
// import App from './containers/App/App';
import Login from './containers/Login/Login';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
// import routes from './containers/App';
require('./favicon.ico'); // Tell webpack to load favicon.ic

const store = configureStore();
render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={Login} exact strict />
          <PrivateRoute path="/dashboard" component={Root} />
          <PrivateRoute exact path="*" component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </Provider>
    {/* <Root store={store} history={history} /> */}
  </AppContainer>,
  document.getElementById('app')
);
