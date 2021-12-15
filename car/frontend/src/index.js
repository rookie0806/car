import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import {Provider} from "react-redux";
import store, {history} from "./redux/configureStore";
import {ConnectedRouter} from "connected-react-router";

import './index.css';
import App from './components/App';

ReactDOM.render(
    
    <Provider store={store}>
          <Helmet>
                <title>mymmr.kr</title>
                <meta name="description" content="0isohee" data-react-helmet="true"/>

        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8.1/dist/polyfill.min.js"></script>

          </Helmet>
        <ConnectedRouter history={history}>
            <App />
       
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root')
);
