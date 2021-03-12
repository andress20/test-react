import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { offerReducer } from './reducers/Offer.reducer'

const rootReducer = combineReducers({
  offerReducer
})

const middlewares = applyMiddleware(thunk)

export const store = createStore(rootReducer, middlewares)
