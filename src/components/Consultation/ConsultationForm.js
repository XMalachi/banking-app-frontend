import React, {useState} from "react"
import Swal from "sweetalert2"


function ConsultationForm() {
  const [state, setState] = useState({ 
    firstname: '',
    lastname:'',
    email:'',
    street: '',
    city: '',
    type: ''
  })

  const changeHandler = (e) => {
    const {name, value} = e.target
    
    setState({
        ...state,
        [name]:value
    })
   
}

console.log('state', state)

const getConsultation = (e)=>{
        e.preventDefault()
 

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Mail has been sent to our correspondent. You would recieve a feedback throuugh the email inputted.`,
          showConfirmButton: false,
          timer: 2000
        })

        
        setState({
          firstname: '',
          lastname:'',
          email:'',
          street: '',
          city: '',
          type: ''
        })
        
}

  
    return (
      <form className="space-y-8 divide-y divide-gray-200 p-10">
        <div className="space-y-8 divide-y divide-gray-200">
  
          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-blue-900">Request A free Consultation</h3>
              
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                
                <div className="mt-1">
                  <input
                    type="text"
                    name="firstname"
                    id="first-name"
                    onChange={changeHandler}
                    autoComplete="given-name"
                    placeholder="First Name"
                    className=" p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                
                <div className="mt-1">
                  <input
                    type="text"
                    name="lastname"
                    id="last-name"
                    onChange={changeHandler}
                    autoComplete="given-name"
                    placeholder="Last Name"
                    className=" p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                  />
                </div>
              </div>
  
              <div className="sm:col-span-6">
                
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={changeHandler}
                    autoComplete="given-email"
                    placeholder="Email address"
                    className=" p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                  />
                </div>
              </div>
  
              <div className="sm:col-span-6">
                
                <div className="mt-1">
                  <select
                    id="type"
                    name="type"
                    onChange={changeHandler}
                    autoComplete="type"
                    className=" p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                  >
                    <option>---Choose Type of Request---</option>
                    <option>Private Banking</option>
                    <option>Free Consultations</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>
  
              <div className="sm:col-span-6">
                
                <div className="mt-1">
                  <input
                    type="text"
                    name="street"
                    id="street-address"
                    onChange={changeHandler}
                    placeholder="Street Address"
                    autoComplete="street-address"
                    className="p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                  />
                </div>
              </div>
  
              <div className="sm:col-span-6">
                
                <div className="mt-1">
                  <textarea
                    type="text"
                    rows={4}
                    name="city"
                    onChange={changeHandler}
                    id="city"
                    placeholder="Special Request"
                    autoComplete="address-level2"
                    className="p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                  />
                </div>
              </div>
  
              
            </div>
          </div>
  
          
        </div>
  
        <div className="pt-5">
          <div className="flex justify-end">
            
            <button
              type="submit"
              onClick={getConsultation}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
            >
              Submit Now
            </button>
          </div>
        </div>
      </form>
    )
  }
  

  export default ConsultationForm