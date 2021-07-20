import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import Reactotron from '../config/reactotron';
import rootSaga from './modules/rootSaga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, 
    compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()),
    );


sagaMiddleware.run(rootSaga);

export default store;
