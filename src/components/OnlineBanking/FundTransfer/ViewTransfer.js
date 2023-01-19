import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../../Loader"
import { getTransactionsActions } from "../../Redux/Actions/TransactionActions"
import "../Tables/TransactionsTable.css"



function ViewTransactionsTable() {
  const [query, setQuery] = useState("")
    const dispatch = useDispatch()

    useEffect(()  => {
      dispatch(getTransactionsActions())
    
    }, [dispatch])
    
    const {loading, transactions}  = useSelector(state=> state.getTransactions)
  
    return (
      <>
        {loading && (<Loader />)}
        <div className="px-4 sm:px-6 lg:px-8 mt-10">
        
        <div className="block bg-slate-900 p-2">
          <div className="">
            <h1 className="text-xl font-semibold text-blue-100 ">Transactions</h1>
          </div>
          
        </div>
        <div className="sm:flex sm:items-center mt-2 justify-between">
          <div>
            
            
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-end">
            <input 
                type="text"
                placeholder="Search By Beneficiary Name"
                className="px-10 py-2"
                onChange={event => setQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="-mx-4 mt-8 overflow-scroll shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    Transaction ID
                </th>
                <th
                  scope="col"
                  className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  User Account
                </th>
                <th
                  scope="col"
                  className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Baneficiary Bank Name
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Baneficiary Bank Number
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Amount
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  Swift Code
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  Description
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
            {transactions && transactions.filter(data => {
                if(query === ""){
                  return data
                }else if (data.beneficiaryBankName.toLowerCase().includes(query.toLowerCase())){
                  return data
                }
                return data
              }).map((transaction) => (
                <tr key={transaction.transactionId}>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                    {transaction.transactionId}
                    
                  </td>
                  <td className=" px-3 py-4 text-sm text-gray-500 lg:table-cell">{transaction.senderName}</td>
                  <td className=" px-3 py-4 text-sm text-gray-500 sm:table-cell">{transaction.beneficiaryBankName}</td>
                  <td className=" px-3 py-4 text-sm text-gray-500 sm:table-cell">{transaction.beneficiaryAccountNumber}</td>
                  <td className=" px-3 py-4 text-sm text-gray-500 sm:table-cell">{transaction.amount}</td>
                  <td className=" px-3 py-4 text-sm text-gray-500 sm:table-cell">{transaction.swift}</td>
                  <td className=" px-3 py-4 text-sm text-gray-500 sm:table-cell">{transaction.desc}</td>
                  <td className="px-3 py-4 text-sm text-gray-500">{transaction.date.toLocaleString()}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </>
      
    )
  }
  

  export default ViewTransactionsTable