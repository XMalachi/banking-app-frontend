import {
    GET_TRANSACTIONS_REQUEST,
    GET_TRANSACTIONS_SUCCESS,
    GET_TRANSACTIONS_FAILED,
    GET_TRANSACTIONS_RESET,

    MAKE_DEBIT_TRANSACTIONS_REQUEST,
    MAKE_DEBIT_TRANSACTIONS_SUCCESS,
    MAKE_DEBIT_TRANSACTIONS_FAILED,
    MAKE_DEBIT_TRANSACTIONS_RESET

} from '../Constants/TransactionConstants.js'


const getTransactionsReducers = (state={}, action) => {
    switch (action.type){
        case GET_TRANSACTIONS_REQUEST : 
            return { loading: true }

        case GET_TRANSACTIONS_SUCCESS :
            return {loading: false, success: true, transactions: action.payload}

        case GET_TRANSACTIONS_FAILED :
            return {loading: false, success: false, error: action.payload}

        case GET_TRANSACTIONS_RESET :
            return {}

        
        default :  return state

    }
}

const debitReducers = (state={}, action) => {
    switch (action.type){
        case MAKE_DEBIT_TRANSACTIONS_REQUEST : 
            return { loading: true }

        case MAKE_DEBIT_TRANSACTIONS_SUCCESS :
            return {loading: false, success: true, debit: action.payload}

        case MAKE_DEBIT_TRANSACTIONS_FAILED :
            return {loading: false, success: false, error: action.payload}

        case MAKE_DEBIT_TRANSACTIONS_RESET :
            return {}

        
        default :  return state

    }
}

export {
    getTransactionsReducers,
    debitReducers
}