import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./DetailsHeader.css"
import { BsFillHddStackFill, BsCreditCard2BackFill, BsCreditCard2Front , BsFillTelephoneFill, BsCalendar2DateFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { FcAddressBook } from "react-icons/fc";
import { TbGenderNeutrois } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { getUserAction } from '../../Redux/Actions/UserActions';
import Loader from '../../Loader';



function Detail() {
    const  dispatch = useDispatch()

    useEffect(()=> {
  
      dispatch(getUserAction())
    }, [ dispatch])
    
  const {loading, user} = useSelector(state => state.getUser)

    
  return (
    <div className='details'>
        {loading && (<Loader />)}

        <div className='detail'>
            <div className='detailHead'>
                <h3>Account No.: </h3>
            </div>
            <div className='detailData'>
                <BsFillHddStackFill />
                <p>{user? user.accountNumber: "None"}</p>
            </div>
        </div>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Account Type.: </h3>
            </div>
            <div className='detailData'>
                <BsCreditCard2BackFill />
                <p>{user? user.account: "None"}</p>
            </div>
        </div>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Account Login ID: </h3>
            </div>
            <div className='detailData'>
                <BsCreditCard2Front />
                <p>{user? user.loginid: "None"}</p>
            </div>
        </div>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Email: </h3>
            </div>
            <div className='detailData'>
                <MdEmail />
                <p>{user? user.email: "None"}</p>
            </div>
        </div>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Country: </h3>
            </div>
            <div className='detailData'>
                <TfiWorld />
                <p>{user? user.country: "None"}</p>
            </div>
        </div>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Mobile: </h3>
            </div>
            <div className='detailData'>
                <BsFillTelephoneFill />
                <p>{user? user.phone: "None"}</p>
            </div>
        </div>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Address: </h3>
            </div>
            <div className='detailData'>
                <FcAddressBook />
                <p>{user? user.address: "None"}</p>
            </div>
        </div>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Occupation: </h3>
            </div>
            <div className='detailData'>
                <GrUserWorker />
                <p>{user? user.occupation: "None"}</p>
            </div>
        </div>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Date Of Birth: </h3>
            </div>
            <div className='detailData'>
                <BsCalendar2DateFill />
                <p>{user? user.birthday: "None"}</p>
            </div>
        </div>

        <div className='detail'>
            <div className='detailHead'>
                <h3>Gender: </h3>
            </div>
            <div className='detailData'>
                <TbGenderNeutrois />
                <p>{user? user.gender: "None"}</p>
            </div>
        </div>
    </div>
  )
}

export default Detail