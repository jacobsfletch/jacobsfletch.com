import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './components/apps/main/';

const mount = document.querySelector('.mount')

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>, mount
);
