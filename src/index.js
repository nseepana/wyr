import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/reducers'
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import ReduxThunk from 'redux-thunk';
import { fetchUsers } from './redux/actionCreators/actionThunks';

const composeEnhancers =
	typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		}) : compose;

const enhancer = composeEnhancers(
	applyMiddleware(ReduxThunk)
	// other store enhancers if any
);

const store = createStore(rootReducer, enhancer);
store.dispatch(fetchUsers());

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</Provider>,
	document.getElementById('root'));


