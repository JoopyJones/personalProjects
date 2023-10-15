//components
import App from './App';

//react
import React from 'react';

//react-dom
import ReactDOM from 'react-dom/client';

//redux
import { Provider } from 'react-redux';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>
        <App />
    </Provider>
);
