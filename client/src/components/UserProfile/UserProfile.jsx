import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react'
import { FaAngleRight } from 'react-icons/fa';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { getMyOrders } from "../../redux/actions";
import './UserProfile.css'

export function UserProfile() {
    
    const dispatch = useDispatch()
    const { user, isAuthenticated, isLoading } = useAuth0()
   
    const orders = useSelector(state => state.orders)
    const [toggle, setToggle] = useState(false)
    

    const handleOrders = (e) => {
        e.preventDefault()
        dispatch(getMyOrders(user.email))
        setToggle(!toggle)
    }

    const handleToggle = (e) => {
        setToggle(!toggle)
    }

console.log('!!!!!!!!!!!!!!!!!!!!!!!!!! SOY STATE ORDER', orders)
    if (isLoading) {
        return (
            <p>LOADING...</p>
        )
    }

    if (isAuthenticated) {
        return (
           <div>
                <NavBar />
                
            {toggle ? 
            <div>
                <h1 onClick={(e) => {handleToggle(e)}}>HOLA SOY ORDER</h1>
                <div className="item-cart-cart">
                    {orders.map((orders) => {
                         return <h1>`${orders.user}`</h1>
                    })}
                </div>
            </div> 
            : 
            
            <div className='containerUserProfile'>
            <div className='userProfileContainer'>
                        <div className='userImageContainer'>
                            <img src={user.picture} alt={user.name} className='image' />
                        </div>
                        <div className='userInfo'>
                            <h1>My profile</h1>
                        </div>
                        <div className='userInfo'>
                            <h2>User details</h2>
                        </div>
                        <div className='userName'>
                            <p >User: {user.nickname}</p>
                            <p  >E-mail: {user.email}</p>
                        </div>

                        <div className='userInfo'>
                            <h2>Personal Information</h2>
                        </div>

                        <div className='userName'>
                            <p>First name: {user.given_name}</p>
                            <p>Last name: {user.family_name}</p>
                            <p>Phone: 1154710880</p>
                            <p>ID: 36395664</p>
                        </div>

                        <div className='userInfo'>
                            <h2>Shipping Adresses</h2>
                        </div>

                        <div className='userName'>
                            <p className='userData'>Dean Funes 152, Bernal, 1876, Argentina<FaAngleRight /></p>
                            <p className='userData'>Alvear 654, Quilmes, 1878, Argentina <FaAngleRight /></p>
                        </div>

                        <div className='userInfo'>
                            <h2>Cards</h2>
                        </div>

                        <div className='userName'>
                        <button onClick={(e) => {handleOrders(e)}}>X</button>
                        </div>
                    </div>
          
                </div> 
            } 
                <Footer />
            </div>
        )
    }
}