import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
// import { ConnectedRouter } from 'react-router-redux';
import './styles/styles.scss';
import 'antd/dist/antd.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore, { history } from './store/configureStore';

const store = configureStore();
registerServiceWorker();
render(
  <AppContainer>
    <Provider store={store}>
      <App>
        <div>Admin Panel's Content</div>
      </App>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);
