import {
    GET_USER_REQUEST,
GET_USER_SUCCESS,
GET_USER_FAILED,
GET_USER_RESET,

GET_USER_ACCOUNTDETAILS_REQUEST,
GET_USER_ACCOUNTDETAILS_SUCCESS,
GET_USER_ACCOUNTDETAILS_FAILED,
GET_USER_ACCOUNTDETAILS_RESET,


CREATE_USER_REQUEST,
CREATE_USER_SUCCESS,
CREATE_USER_FAILED,
CREATE_USER_RESET,

LOGIN_USER_REQUEST,
LOGIN_USER_SUCCESS,
LOGIN_USER_FAILED,
LOGIN_USER_RESET,

ISLOGGEDIN_REQUEST,
ISLOGGEDIN_SUCCESS,
ISLOGGEDIN_FAILED,
ISLOGGEDIN_RESET,

UPDATE_USERPASSWORD_REQUEST,
UPDATE_USERPASSWORD_SUCCESS,
UPDATE_USERPASSWORD_FAILED,
UPDATE_USERPASSWORD_RESET,

LOGOUT_USER
} from '../Constants/UserConstants.js'

const getUserReducer = (state={}, action) => {
    switch (action.type){
        case GET_USER_REQUEST : 
            return { loading: true }

        case GET_USER_SUCCESS :
            return {loading: false, success: true, user: action.payload}

        case GET_USER_FAILED :
            return {loading: false, success: false, error: action.payload}

        case GET_USER_RESET :
            return {}

        default :  return state

    }
}

const getUserAccountDetailsReducer = (state={}, action) => {
    switch (action.type){
        case GET_USER_ACCOUNTDETAILS_REQUEST : 
            return { loading: true }

        case GET_USER_ACCOUNTDETAILS_SUCCESS :
            return {loading: false, success: true, accountdetails: action.payload}

        case GET_USER_ACCOUNTDETAILS_FAILED :
            return {loading: false, success: false, error: action.payload}

        case GET_USER_ACCOUNTDETAILS_RESET :
            return {}

        default :  return state

    }
}
const createUserReducer = (state={}, action) => {
    switch (action.type){
        case CREATE_USER_REQUEST : 
            return { loading: true }

        case CREATE_USER_SUCCESS :
            return {loading: false, success: true, user: action.payload}

        case CREATE_USER_FAILED :
            return {loading: false, success: false, error: action.payload}

        case CREATE_USER_RESET :
            return {}

        default :  return state

    }
}

const isLoggedInReducer = (state={}, action) => {
    switch (action.type){
        case ISLOGGEDIN_REQUEST : 
            return { loading: true }

        case ISLOGGEDIN_SUCCESS :
            return {loading: false, success: true, user: action.payload}

        case ISLOGGEDIN_FAILED :
            return {loading: false, success: false, error: action.payload}

        case ISLOGGEDIN_RESET :
            return {}

        default :  return state

    }
}
const updatePasswordReducer = (state={}, action) => {
    switch (action.type){
        case UPDATE_USERPASSWORD_REQUEST : 
            return { loading: true }

        case UPDATE_USERPASSWORD_SUCCESS :
            return {loading: false, success: true, user: action.payload}

        case UPDATE_USERPASSWORD_FAILED :
            return {loading: false, success: false, error: action.payload}

        case UPDATE_USERPASSWORD_RESET :
            return {}

        default :  return state

    }
}
const logInUserReducer = (state={}, action) => {
    switch (action.type){
        case LOGIN_USER_REQUEST : 
            return { loading: true }

        case LOGIN_USER_SUCCESS :
            return {loading: false, success: true, user: action.payload}

        case LOGIN_USER_FAILED :
            return {loading: false, success: false, error: action.payload}

        case LOGIN_USER_RESET :
            return {}

        case LOGOUT_USER : 
            return {
                user: null
            }

        default :  return state

    }
}



export {
    getUserReducer,
    logInUserReducer,
    createUserReducer,
    getUserAccountDetailsReducer,
    isLoggedInReducer,
    updatePasswordReducer
}