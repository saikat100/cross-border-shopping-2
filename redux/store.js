import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import productInfoReducer from "./reducers/productInfoReducer";



const middleware = [thunk]

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const mainReducer = combineReducers({
	productReducer: productInfoReducer
})

const makeStore = () => createStore(mainReducer, enhancer)




export const wrapper = createWrapper(makeStore);

