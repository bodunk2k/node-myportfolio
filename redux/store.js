import { createStore } from 'redux'
import ActionCreators from './ActionCreators'
/* so here in store we reference back to the store with CreateStore
passing it our reducers like a function. */

export const store = createStore(ActionCreators)