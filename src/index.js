import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers'
import { Provider } from 'react-redux';

import ReduxThunk from 'redux-thunk';
import { fetchUsers } from './redux/actionCreators/userActionThunk';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
store.dispatch(fetchUsers());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));


