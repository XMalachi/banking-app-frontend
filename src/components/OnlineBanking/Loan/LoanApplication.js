import React, {useEffect, useState} from 'react'
/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/solid'
import LoanForm from './LoanForm'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAccountDetailsAction } from '../../Redux/Actions/UserActions'
import Loader from '../../Loader'


const steps = [
    { id: '01', name: 'Personal Details', description: 'Bank Name, Account Name...', status: 'current' },
    { id: '02', name: 'Enter Your Loan Option', description: 'Amount, Narration and Period in Month required', status: '' },
    { id: '03', name: 'Completed', description: 'Loan Application Sent For Approval', status: '' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function LoanApplication() {

  const  dispatch = useDispatch()

  useEffect(()=> {

    dispatch(getUserAccountDetailsAction())
  }, [ dispatch])
    const {loading} = useSelector(state => state.getUser)

    const [form, showForm] = useState(true)
    const [loanType, showloanType] = useState(false)
    const [completed, showcompleted] = useState(false)

    const checkConfirm = ()  => {
        showForm(false)
        showloanType(true)
        showcompleted(false)
        steps[0].status = "complete"
        steps[1].status = "current"
        steps[2].status = ""
    }

    const chooseLoanType = ()  => {
        showForm(false)
        showloanType(false)
        showcompleted(true)
        steps[0].status = "complete"
        steps[1].status = "complete"
        steps[2].status = "current"
    }

    const confirmLoan = ()  => {
        showForm(true)
        showloanType(false)
        showcompleted(false)
        steps[0].status = "current"
        steps[1].status = ""
        steps[2].status = ""
    }


    // if(form){
    //     steps[0].status = "Current"
    //     steps[1].status = ""
    //     console.log("I am planning", steps[0], form)
    // }
    
    // if(confirm === true){
    //     steps[0].status = ""
    //     steps[0].status = "Current"
    // }
  return (
    <>
    {loading && (<Loader />)}
<div className="lg:border-t lg:border-b lg:border-gray-200">
    <h2 className='text-3xl'>Loan Application</h2>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Progress">
        <ol
          className="rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200 lg:rounded-none"
        >
          {steps.map((step, stepIdx) => (
            <li key={step.id} className="relative overflow-hidden lg:flex-1">
              <div
                className={classNames(
                  stepIdx === 0 ? 'border-b-0 rounded-t-md' : '',
                  stepIdx === steps.length - 1 ? 'border-t-0 rounded-b-md' : '',
                  'border border-gray-200 overflow-hidden lg:border-0'
                )}
                
              >
                {step.status === 'complete' ? (
                  <div className="group">
                    <span
                      className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-9' : '',
                        'px-6 py-5 flex items-start text-sm font-medium'
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full">
                          <CheckIcon className="w-6 h-6 text-white" aria-hidden="true" />
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold tracking-wide uppercase">{step.name}</span>
                        <span className="text-sm font-medium text-gray-500">{step.description}</span>
                      </span>
                    </span>
                  </div>
                ) : step.status === 'current' ? (
                  <div aria-current="step">
                    <span
                      className="absolute top-0 left-0 w-1 h-full bg-indigo-600 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-9' : '',
                        'px-6 py-5 flex items-start text-sm font-medium'
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                          <span className="text-indigo-600">{step.id}</span>
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold text-indigo-600 tracking-wide uppercase">
                          {step.name}
                        </span>
                        <span className="text-sm font-medium text-gray-500">{step.description}</span>
                      </span>
                    </span>
                  </div>
                ) : (
                  <a href={step.href} className="group">
                    <span
                      className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-9' : '',
                        'px-6 py-5 flex items-start text-sm font-medium'
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full">
                          <span className="text-gray-500">{step.id}</span>
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold text-gray-500 tracking-wide uppercase">{step.name}</span>
                        <span className="text-sm font-medium text-gray-500">{step.description}</span>
                      </span>
                    </span>
                  </a>
                )}

                {stepIdx !== 0 ? (
                  <>
                    {/* Separator */}
                    <div className="hidden absolute top-0 left-0 w-3 inset-0 lg:block" aria-hidden="true">
                      <svg
                        className="h-full w-full text-gray-300"
                        viewBox="0 0 12 82"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                      </svg>
                    </div>
                  </>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </nav>

      <div>
        <LoanForm form={form} loanType={loanType} completed={completed} checkConfirm={checkConfirm} chooseLoanType={chooseLoanType} confirmLoan={confirmLoan}  />
      </div>
    </div>
    </>
    
  )
}


export default LoanApplication