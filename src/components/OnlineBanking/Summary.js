import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader'
import TransactionsTable from '../OnlineBanking/Tables/TransactionsTable'
import { getUserAccountDetailsAction } from '../Redux/Actions/UserActions'

 function Summary () {

  const  dispatch = useDispatch()

 const { loading, accountdetails} = useSelector(state => state.getUserDetails)
  console.log(accountdetails,  "the useraccountdetails from summary")
  useEffect(()=> {
    dispatch(getUserAccountDetailsAction())
  }, [dispatch])

  return (
    <div>
      {loading && (<Loader />)}
      <h2 className='text-3xl'>Welcome Back {accountdetails? accountdetails.accountOwner: "Kindly Refresh To Get Current Data"}</h2>

      <div className='md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full '>
       
            <div className="bg-slate-900 text-blue-50 my-4 leading-10">
              <div className='p-4'>
                <p className='text-sm uppercase text-slate-400'>Account Balance</p>
                <p className='text-3xl'>{accountdetails? accountdetails.accountBalance: 0}</p>
              </div>
              
              <div className='h-1 bg-slate-100 '>
              </div>
              <small className='p-4  text-slate-400'>Account Balance</small>
            </div>

       
            <div className="bg-slate-900 text-blue-50 my-4 leading-10">
              <div className='p-4'>
                <p className='text-sm uppercase text-slate-400'>Account Number</p>
                <p className='text-3xl'>{accountdetails? accountdetails.accountNumber: 0}</p>
              </div>
              
              <div className='h-1 bg-slate-100 '>
              </div>
              <small className='p-4  text-slate-400'>Account Number</small>
            </div>

            <div className="bg-slate-900 text-blue-50 my-4 leading-10">
              <div className='p-4'>
                <p className='text-sm uppercase text-slate-400'>Total Credit Transaction</p>
                <p className='text-3xl'>{accountdetails? accountdetails.totalCreditTransactions: 0}</p>
              </div>
              
              <div className='h-1 bg-slate-100 '>
              </div>
              <small className='p-4  text-slate-400'>Total Credit Transaction</small>
            </div>

            <div className="bg-slate-900 text-blue-50 my-4 leading-10">
              <div className='p-4'>
                <p className='text-sm uppercase text-slate-400'>Total Debit Transaction</p>
                <p className='text-3xl'>{accountdetails? accountdetails.totalDebitTransactions: 0}</p>
              </div>
              
              <div className='h-1 bg-slate-100 '>
              </div>
              <small className='p-4  text-slate-400'>Total Debit Transaction</small>
            </div>
          
      </div>

      <TransactionsTable />
    </div>
  )
}

export default Summary