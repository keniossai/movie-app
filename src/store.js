import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rooteReducer from './reducers'




const middleware = [thunk]

const initialState = {}

const store = createStore(rooteReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store