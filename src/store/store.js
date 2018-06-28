import rootReducer from './rootReducer';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

const composeEnhancers = process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const store = createStore(
    combineReducers({...rootReducer}),
    composeEnhancers(
        applyMiddleware()
    )
);

export default store;