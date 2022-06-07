import './styles/nav.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import { hide, view, collectdata } from '../feature/show'

export default function Navbar() {

    const { cartQuantity } = useSelector((state) => state.shopCart)
    const { show } = useSelector(state => state.show);
    const dispatch = useDispatch()


    return (
        <div className="nav">
            <div className="titleDiv">
                <Link className='link' to={'/'}><h2>BuyApp</h2></Link>
            </div>
            <div className="inputDiv">
                <input type="text" placeholder='Search...' onChange={(e) => dispatch(collectdata(e.target.value))} />
                <button className="searchBtn">Search</button>
            </div>
            <div className="rightDiv">
                <Link className='link' to={'/product/cart'}><p>Cart : {cartQuantity} </p></Link>
            </div>
            <div className='menuBar'>
                {
                    show ? <button className='menuBtn' onClick={() => dispatch(view(false))}>Back</button> : <button className='menuBtn' onClick={() => dispatch(hide(true))}>Search</button>
                }
            </div>
            {
                show && <div className='showSearchBox'>
                    <div className="smallScreenInputStyle">
                        <input className='smallScreenInput' type="text" placeholder='Search...' onChange={(e) => dispatch(collectdata(e.target.value))} />
                        <button className="smallScreenBtn">Search</button>
                    </div>
                </div>
            }



            <div className='cartShow'>
                <Link className='link' to={'/product/cart'}><p className='sScreenShow'>Cart : {cartQuantity} </p></Link>
            </div>
        </div>
    )
}
