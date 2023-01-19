import React from "react"
import "../FundTransfer/FundTransfer.css"


/* This example requires Tailwind CSS v2.0+ */
const cards = [
    {  
        userAccount: 'Front-end Developer', 
        amount: 'lindsay.walton@example.com', 
        narration: 'Member',
        period: "Pending",
        status: "Pending",
        date: 83987487,
    },
    // More people...
  ]
  
function ViewLoanTable() {
    return (
      <div className="px-4 sm:px-6 lg:px-8 mt-10">
        <div className="block bg-slate-900 p-2">
          <div className="">
            <h1 className="text-xl font-semibold text-blue-100 ">Your Loan Applications</h1>
          </div>
          
        </div>
        <div className="sm:flex sm:items-center mt-2 justify-between">
          <div>
            
            
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-end">
            <input 
                type="text"
                placeholder="Search"
                className="px-4 py-2"
            />
          </div>
        </div>
        <div className="-mx-4 mt-8 overflow-scroll shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    User Account Number
                </th>
                <th
                  scope="col"
                  className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Narration
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Period
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {cards.map((card) => (
                <tr key={card.userAccount}>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                  {card.userAccount}
                    
                  </td>
                  <td className=" px-3 py-4 text-sm text-gray-500 sm:table-cell">{card.amount}</td>
                  <td className=" px-3 py-4 text-sm text-gray-500 sm:table-cell">{card.narration}</td>
                  <td className=" px-3 py-4 text-sm text-gray-500 sm:table-cell">{card.period}</td>
                  <td className=" px-3 py-4 text-sm text-gray-500 sm:table-cell">{card.status}</td>
                  <td className=" px-3 py-4 text-sm text-gray-500 sm:table-cell">{card.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  

  export default ViewLoanTable