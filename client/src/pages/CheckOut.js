import React, { useEffect, useState } from 'react'
import './pageStyles/checkout.css'
import { useSelector, useDispatch } from 'react-redux'
import { clear, getTotal } from '../feature/cartSlice'
import { useNavigate } from "react-router-dom";


export default function CheckOut() {

    const cart = useSelector(state => state.shopCart)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [addres, setAddress] = useState('')
    const [card, setCard] = useState('')
    const [password, setPassword] = useState('')
    const [showorderDetails, setShowOrderDetails] = useState(false)



    const paymentSubmit = () => {
        if (!name || !addres || !card || !password) {
            return alert('please provide all Information')
        } else if (name.length < 6 || password.length < 6 || card.length < 6 || addres.length < 6) {
            return alert('please provide atleast 6 character in each field')
        } else {
            setShowOrderDetails(true)
            alert('payment succesful')
            dispatch(clear())

        }
    }

    const complitePayment = () => {

        navigate('/')
    }



    useEffect(() => {
        dispatch(getTotal())
    }, [cart, dispatch])
    return (
        <div className='chechoutContainer'>
            <h4>Proxy Payment</h4>

            {
                showorderDetails && <div className='complitationContainer'>
                    <div className='complitationDiv'>
                        <h4>Your Order Was Succesfully Placed</h4>
                        <p>  Name : {name}</p>
                        <p> Address : {addres}</p>
                        <p>Your Order Id : {Math.floor(Math.random() * 100)}</p>
                        <button onClick={complitePayment} className='paymentBtn'>Okay</button>
                    </div>
                </div>
            }



            <div >
                <div className='checkinputContainer'>
                    <div className='upInputDiv'>
                        <input onChange={(e) => setName(e.target.value)} className='checkinput smallDeviceInput' placeholder='Your Name ' />
                        <input onChange={(e) => setAddress(e.target.value)} className='checkinput smallDeviceInput' placeholder='Address...  ' />
                    </div>

                    <div className='downInputDiv'>
                        <input onChange={(e) => setCard(e.target.value)} className='checkinput smallDeviceInput' placeholder='proxy card number' />
                        <input onChange={(e) => setPassword(e.target.value)} className='checkinput smallDeviceInput' placeholder='proxy card password' />
                    </div>

                    <button className='paymentBtn' style={{ background: 'red', marginTop: 20 }}>Total : {cart.cartTotalAmount}</button>
                    <button onClick={paymentSubmit} className='paymentBtn'>Payment</button>
                </div>
                <div>
                    {
                        cart.cartItem.map((item, index) => (
                            <div key={item._id}>
                                {
                                    index == 0 && <p style={{ borderBottom: "1px solid #bbb", marginBottom: -10 }}></p>
                                }
                                <div className='itemDetailsWrapper smallDeviceDeatils'>

                                    <div className='flexDivWidth '>

                                        <img className='itemImgStyle' src={item.image} alt="anything" />
                                        <h5>{item.name}</h5>
                                        <h4 className='checkPrice'>{item.price}</h4>

                                    </div>

                                    <div className='flexDivWidth'>
                                        <h4 style={{ float: "right" }}>{item.price * item.cartQuantity}</h4>
                                    </div>

                                </div>


                            </div>

                        ))
                    }

                </div>

            </div>
        </div>
    )
}
