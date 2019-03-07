import { createStore, compose } from "redux"
import rootReducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const createStoreWithMiddleware = composeEnhancers(

)(createStore);

const store = createStoreWithMiddleware(rootReducer)

export default store
