import {combineReducers} from 'redux'

import { logInUserReducer, createUserReducer, getUserReducer, getUserAccountDetailsReducer, isLoggedInReducer } from './UserReducers'
import {  debitReducers, getTransactionsReducers } from './TransactionReducers'

const rootReducer = combineReducers({
    createUser: createUserReducer,
    loginUser: logInUserReducer,
    getUser: getUserReducer,
    getUserDetails: getUserAccountDetailsReducer,
    getTransactions:getTransactionsReducers,
    debit: debitReducers,
    isLoggedIn: isLoggedInReducer,
    // updateTask: updateTaskReducer,
    // deleteTask: deleteTaskReducer,
})

export default rootReducer