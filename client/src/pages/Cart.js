import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove, decreaseCartQuantity, add, getTotal } from '../feature/cartSlice'
import { hide } from '../feature/show'
import './pageStyles/cart.css'
import { Link } from 'react-router-dom'

export default function Cart() {

    const cart = useSelector(state => state.shopCart)
    const dispatch = useDispatch()

    const removeFromCart = (id) => {
        dispatch(remove(id))
        dispatch(hide(false))
    }

    const decreaseQuantity = (item) => {
        dispatch(decreaseCartQuantity(item))
    }

    const addQuantity = (item) => {
        dispatch(add(item))
    }

    useEffect(() => {
        dispatch(getTotal())
    }, [cart, dispatch])


    return (
        <div>

            {
                cart.cartItem.length === 0 ? (

                    <div className='emptyCartStyle'>
                        <h4>Your cart is empty</h4>
                        <div style={{ textAlign: 'center' }}>
                            <Link to={'/'}><button className='buynowButton'>Buy Now</button></Link>
                        </div>
                    </div>)

                    :
                    <div>
                        <div className='headDiv'>
                            <h3>Your Product's</h3>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Link to={'/'}><button className='buynowButton' style={{ backgroundColor: "red", color: '#fff', cursor: 'pointer' }}>Buy More</button></Link>
                        </div>
                        <div className='smallDevicestyle'>
                            <div className='topTitleDiv'>
                                <div className='flexDivWidth'>
                                    <h4>Product</h4>
                                </div>
                                <div className='flexDivWidth'>
                                    <h4>Price</h4>
                                </div>
                                <div className='flexDivWidth'>
                                    <h4 style={{ textAlign: 'center' }}>Quantity</h4>
                                </div>

                                <div className='flexDivWidth'>
                                    <h4 style={{ float: "right" }}>Total</h4>
                                </div>

                            </div>

                            <div>
                                {
                                    cart.cartItem.map((item, index) => (
                                        <div key={item._id}>
                                            {
                                                index == 0 && <p style={{ borderBottom: "1px solid #bbb", marginBottom: -10 }}></p>
                                            }
                                            <div className={'itemDetailsWrapper'}    >
                                                <div className='flexDivWidth '>
                                                    <img className='itemImgStyle' src={item.image} alt="image" />
                                                    <h5>{item.name}</h5>
                                                    <div className='showPrice'>
                                                        <h4>{item.price}</h4>
                                                    </div>
                                                    <button onClick={() => removeFromCart(item._id)} className='removeBtn'>Remove</button>
                                                </div>
                                                <div className='flexDivWidth hidePrice'>
                                                    <h4>{item.price}</h4>
                                                </div>
                                                <div className='quantityDivStyle'>
                                                    <button onClick={() => addQuantity(item)} className='increaseBtn'>+</button>
                                                    <h4>{item.cartQuantity}</h4>
                                                    <button onClick={() => decreaseQuantity(item)} className='decreaseBtn'>-</button>
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


                        <div style={{ float: 'right', marginRight: 20, marginBottom: 40 }}>
                            <h3>Total : {cart.cartTotalAmount}</h3>

                            <div className='checkOutDiv'>

                                <Link to={'/product/checkout'}><button className='checkoutBtn'>Checkout</button></Link>

                            </div>
                        </div>
                    </div>




            }
        </div>
    )
}
