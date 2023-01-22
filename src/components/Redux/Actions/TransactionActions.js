
import {
    GET_TRANSACTIONS_REQUEST,
    GET_TRANSACTIONS_SUCCESS,
    GET_TRANSACTIONS_FAILED,


   MAKE_DEBIT_TRANSACTIONS_REQUEST,
   MAKE_DEBIT_TRANSACTIONS_SUCCESS,
   MAKE_DEBIT_TRANSACTIONS_FAILED,


} from '../Constants/TransactionConstants.js'
    
    import axios from 'axios'
    
    const baseUrl = process.env.REACT_APP_SERVERURL || 'http://localhost:5000'
    
    
    const getTransactionsActions = () => async(dispatch, getState) => {
        try{
            dispatch({
                type: GET_TRANSACTIONS_REQUEST
            })
    
            const {loginUser: {user}} = getState()
            console.log("get state customerInfo",user)
             const config = {
                headers:{
                    "Content-Type":'Application/json',
                    "authorization": `Bearer ${user.token}`
                }
             }
    
            // console.log("staff created")
            const {data} = await axios.get(`${baseUrl}/api/transactions/getusertransactions`, config)
            
            console.log("user gotten from transactions actions",data.transaction)
            dispatch({
                type: GET_TRANSACTIONS_SUCCESS,
                payload:data.transaction
            })
        }catch(err){ 
            let message = err.response && err.response.data.message ? err.response.data.message : err.message
            dispatch({
                type: GET_TRANSACTIONS_FAILED,
                payload:message
            })
        }
    }

    const debitActions = (beneficiaryAccountNumber, beneficiaryBankName, amount, swift) => async(dispatch, getState) => {
        try{
            dispatch({
                type: MAKE_DEBIT_TRANSACTIONS_REQUEST
            })
    
            const {loginUser: {user}} = getState()
            console.log("get state customerInfo",user)
             const config = {
                headers:{
                    "Content-Type":'Application/json',
                    "authorization": `Bearer ${user.token}`
                }
             }
    
            // console.log("staff created")
            const {data} = await axios.post(`${baseUrl}/api/transactions/debit`, {beneficiaryAccountNumber, beneficiaryBankName, amount, swift}, config)
            
            console.log("user debit from transactions",data)
            dispatch({
                type: MAKE_DEBIT_TRANSACTIONS_SUCCESS,
                payload:data
            })
        }catch(err){ 
            let message = err.response && err.response.data.message ? err.response.data.message : err.message
            dispatch({
                type: MAKE_DEBIT_TRANSACTIONS_FAILED,
                payload:message
            })
        }
    }
    
    export {
        getTransactionsActions,
        debitActions
    }