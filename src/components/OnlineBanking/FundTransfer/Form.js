import React, {useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Loader from "../../Loader";
import { debitActions } from "../../Redux/Actions/TransactionActions";
import { MAKE_DEBIT_TRANSACTIONS_RESET } from "../../Redux/Constants/TransactionConstants";


function TransferForm({form, confirm, checkConfirm, confirmTransfer}) {
    const dispatch = useDispatch()
    const [state, setState] = useState({ 
        beneficiaryAccountNumber: '', 
        beneficiaryBankName:'',
        amount: '',
        swift: '',
    })

    const store = useSelector((state)=> state.debit)
    const { loading, success, debit} = store;

    console.log(debit, "debitted!")
    useEffect(()=> {
      if(success=== true){
        console.log('debit successfull')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Transfer Successfull!`,
          showConfirmButton: false,
          timer: 2000
        })
        dispatch({
          type: MAKE_DEBIT_TRANSACTIONS_RESET
        })
      }

    }, [success,dispatch])


    console.log("user",debit)
    

    const changeHandler = (e) => {
        const {name, type, value, checked} = e.target
        // const value = type === 'checkbox' ? e.target.checked : e.target.value
        if(type === 'checkbox'){
            setState({
                ...state, [name]:checked
            })
        }
        
        
        setState({
            ...state,
            [name]:value
        })
       
    }

    console.log('state', state)

    const submitHandler = (e)=>{

            e.preventDefault();
        
        
            if(!state.beneficiaryAccountNumber || !state.beneficiaryBankName || !state.amount || !state.swift){
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: `Failed. Kindly check your details again.`,
                    showConfirmButton: false,
                    timer: 2000
                })
                return
            } 

            const accountnumber = parseInt(state.beneficiaryAccountNumber, 10)
            const accountamount = parseInt(state.amount, 10)
            console.log(accountnumber, "account number")
            dispatch(debitActions(accountnumber, state.beneficiaryBankName,accountamount,state.swift))
            checkConfirm()
            setState({
                beneficiaryAccountNumber:'', 
                beneficiaryBankName:'',
                amount: '',
                swift: '',
            })
            
    }
    return (
        <>
        {loading && (<Loader />)}
            {form && 
                (
                    <form className="space-y-8 divide-y divide-gray-200 p-10">
                        <div className="space-y-8 divide-y divide-gray-200">

                        <div className="pt-8">
                            <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Beneficiary's Account Detials</h3>
                            
                            </div>
                            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                {/* <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                First name
                                </label> */}
                                <div className="mt-1">
                                <input
                                    type="text"
                                    name="beneficiaryAccountNumber"
                                    id="beneficiaryAccountNumber"
                                    autoComplete="given-number"
                                    onChange={changeHandler}
                                    placeholder="Beneficiary Account Number"
                                    className=" p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                                />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                {/* <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                Last name
                                </label> */}
                                <div className="mt-1">
                                <input
                                    type="text"
                                    name="beneficiaryBankName"
                                    id="beneficiaryBankName"
                                    onChange={changeHandler}
                                    autoComplete="given-name"
                                    placeholder="Beneficiary BankName"
                                    className=" p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                                />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                                </label> */}
                                <div className="mt-1">
                                <input
                                    type="text"
                                    name="amount"
                                    id="amount"
                                    onChange={changeHandler}
                                    autoComplete="given-amount"
                                    placeholder="Amount"
                                    className=" p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                                />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                {/* <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Country
                                </label> */}
                                <div className="mt-1">
                                <input
                                    type='text'
                                    id="swift"
                                    name="swift"
                                    onChange={changeHandler}
                                    autoComplete="swift"
                                    placeholder="Swift"
                                    className=" p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                                />
                                </div>
                            </div>

                            
                        </div>
                    </div>
  
          
                        </div>
                
                                <div className="pt-5">
                                <div className="flex justify-end">
                                    
                                    <button
                                    onClick={submitHandler}
                                    type="submit"
                                    className="ml-3 inline-flex justify-center py-3 px-10 border border-transparent shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                                    >
                                    Confirm
                                    </button>
                                </div>
                                </div>
                    </form>
                )
            }

            {
                confirm && (
                    <div className="confirm flex itams-center justify-center flex-col md:p-6 md:px-10">
                        <h2 className="confirm-title text-2xl md:text-4xl text-center leading-10 text-indigo-600">Fund Transfer Initiated!</h2>
                        <p className="leading-8 md:leading-10 text-lg">
                        Dear Esteemed Customer, you have initiated an Inter-Bank Transfer Transaction. If you wish to continue with this action, kindly click on the "Start Transaction".
                        For further enquiries on this process, please contact the Customer Support Agent (support@eastdalemicrofinance.com) for help.
                        </p>
                            <div className="pt-5">
                                <div className="flex justify-end">
                                    
                                    <button
                                    onClick={confirmTransfer}
                                    type="submit"
                                    className="ml-3 inline-flex justify-center py-3 px-10 border border-transparent shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                                    >
                                    Send
                                    </button>
                                </div>
                            </div>
                    </div>
                )
            }
        </>
      
    )
  }
  

  export default TransferForm