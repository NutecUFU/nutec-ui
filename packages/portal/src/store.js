import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import sagas from './sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()


const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(sagaMiddleware)
)(createStore);

const store = createStoreWithMiddleware(rootReducer)

sagaMiddleware.run(sagas)

export default store
