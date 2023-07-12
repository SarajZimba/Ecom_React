import { combineReducers, createStore } from "redux";
import cartReducer from "./cartReducer";
import itemReducer from "./itemReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    itemStore: itemReducer,
    cartStore: cartReducer
})

const persistConfig = {
    key: 'root',
    storage,
  }

const mypersistedReducer = persistReducer(persistConfig, rootReducer)

export const myStore = createStore(mypersistedReducer)
export const myPersistor = persistStore(myStore)