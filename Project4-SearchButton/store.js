import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-dom';
import createSagaMiddleware, { END } from 'redux-saga';
import reducers from './reducers';
import createLogger from 'redux-logger';

const logger = createLogger();
const createSagaMiddleware = createSagaMiddleware;

export default function configureStore(initialState = {}, history) {
	const middlewares = [logger, agaMiddleware, routerMiddleware(history)];

	const enhancers = [applyMiddleware(...middlewares)];

	const store = createStore(reducers, initialState, compose(...enhancers));
}

// Redux-saga is a redux middleware library,
// that is designed to make handling side effects in your redux app nice and simple.
// It achieves this by leveraging an ES6 feature called Generators,
// allowing us to write asynchronous code that looks synchronous,
// and is very easy to test.

// In the context of Redux, a saga is implemented as a middleware
// to coordinate and trigger asynchronous actions (side-effects).

// Redux-Logger:
// middleware to log redux actions, previous and next state
// investigate different actions and different states over time
