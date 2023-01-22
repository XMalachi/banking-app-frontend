import {
GET_USER_REQUEST,
GET_USER_SUCCESS,
GET_USER_FAILED,


GET_USER_ACCOUNTDETAILS_REQUEST,
GET_USER_ACCOUNTDETAILS_SUCCESS,
GET_USER_ACCOUNTDETAILS_FAILED,


CREATE_USER_REQUEST,
CREATE_USER_SUCCESS,
CREATE_USER_FAILED,


LOGIN_USER_REQUEST,
LOGIN_USER_SUCCESS,
LOGIN_USER_FAILED,


ISLOGGEDIN_REQUEST,
ISLOGGEDIN_SUCCESS,
ISLOGGEDIN_FAILED,

LOGOUT_USER
} from '../Constants/UserConstants.js'

import axios from 'axios'

const baseUrl = process.env.REACT_APP_SERVERURL || 'http://localhost:5000'

const logout = (dispatch) => {
    localStorage.removeItem('customerInfo');
    dispatch({type: LOGOUT_USER})
}

const getUserAction = () => async(dispatch, getState) => {
    try{
        dispatch({
            type: GET_USER_REQUEST
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
        const {data} = await axios.get(`${baseUrl}/api/users/getuser`, config)
        
        console.log("user gotten",data.user)
        dispatch({
            type: GET_USER_SUCCESS,
            payload:data.user
        })
    }catch(err){ 
        let message = err.response && err.response.data.message ? err.response.data.message : err.message
        dispatch({
            type: GET_USER_FAILED,
            payload:message
        })
    }
}

const getUserAccountDetailsAction = () => async(dispatch, getState) => {
    try{
        dispatch({
            type: GET_USER_ACCOUNTDETAILS_REQUEST
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
        const {data} = await axios.get(`${baseUrl}/api/users/getaccountdetails`, config)
        
        console.log("user gotten",data.user)
        dispatch({
            type: GET_USER_ACCOUNTDETAILS_SUCCESS,
            payload:data.user
        })
    }catch(err){ 
        let message = err.response && err.response.data.message ? err.response.data.message : err.message
        dispatch({
            type: GET_USER_ACCOUNTDETAILS_FAILED,
            payload:message
        })
    }
}

const createUserAction = ( name, email, password, phone, gender, birthday, address, country, occupation) => async(dispatch) => {

    try{
        dispatch({
            type:CREATE_USER_REQUEST
        })

        const config = {
            headers:{
                "Content-Type":'Application/json'
            }
        }

        const {data} = await axios.post(`${baseUrl}/api/users/register`, { name, email, password, phone, gender, birthday, address, country, occupation}, config)
        
        console.log("user created",data)
            dispatch({
            type:CREATE_USER_SUCCESS,
            payload:data.user
        })
    }catch(err){ 
        let message = err.response && err.response.data.message ? err.response.data.message : err.message
        dispatch({
            type:CREATE_USER_FAILED,
            payload:message
        })
    }
     
}

const loginUserAction = (loginid, password) => async(dispatch) => {
    try{
        dispatch({
            type:LOGIN_USER_REQUEST
         })

         const config = {
            headers:{
                "Content-Type":'Application/json'
            }
         }

         const {data} = await axios.post(`${baseUrl}/api/users/login`, {loginid, password}, config)
          
         console.log('USER logged in',data)
         localStorage.setItem('customerInfo', JSON.stringify(data.user))
         dispatch({
            type:LOGIN_USER_SUCCESS,
            payload:data.user
         })

         
         
    }catch(err){ 

        let message = err.response && err.response.data.message ? err.response.data.message : err.message
        dispatch({
            type:LOGIN_USER_FAILED,
            payload:message
        })
    }
     
}

const isLoggedInAction = () => async(dispatch) => {
    try{
        dispatch({
            type:ISLOGGEDIN_REQUEST
         })

         const config = {
            headers:{
                "Content-Type":'Application/json'
            }
         }

         const data = await axios.get(`${baseUrl}/api/users/loggedin`, {}, config)
          
         console.log('USER logged in', data.data)
        
         dispatch({
            type:ISLOGGEDIN_SUCCESS,
            payload:data.data
         })

         
         
    }catch(err){ 

        let message = err.response && err.response.data.message ? err.response.data.message : err.message
        dispatch({
            type:ISLOGGEDIN_FAILED,
            payload:message
        })
    }
     
}


export {
    getUserAction,
    createUserAction,
    loginUserAction,
    getUserAccountDetailsAction,
    isLoggedInAction,
    logout
}