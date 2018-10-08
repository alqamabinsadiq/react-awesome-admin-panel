import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux';
import './styles/styles.scss';
import 'antd/dist/antd.css';
import { Switch } from 'react-router';
import App from './containers/App/App';
import { PublicRoute } from './components/PublicRoute';
import registerServiceWorker from './registerServiceWorker';
import configureStore, { history } from './store/configureStore';
import Login from './containers/Login/Login';
import { PrivateRoute } from './components/PrivateRoute';

const store = configureStore();
registerServiceWorker();
render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <PublicRoute path="/" component={Login} exact strict />
          <PrivateRoute path="/dashboard" component={App} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);
