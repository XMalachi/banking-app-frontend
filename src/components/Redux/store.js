
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools}  from 'redux-devtools-extension'
import rootReducer from './Reducers/index'

const middleware = [thunk]

let devTools;
if(process.env.NODE_ENV === 'development') {
    devTools = composeWithDevTools(applyMiddleware(...middleware))
}else {
    devTools = applyMiddleware(...middleware)
}


const userInfoFromLocalStorage = localStorage.getItem('customerInfo') ?  JSON.parse(localStorage.getItem('customerInfo')) : null
console.log("the axis",userInfoFromLocalStorage)

const initialState = {
    loginUser: {user: userInfoFromLocalStorage}
}

const store = createStore(rootReducer,initialState , devTools)

export default store