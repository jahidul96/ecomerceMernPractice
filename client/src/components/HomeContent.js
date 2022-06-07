import './styles/homecontent.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from "react-router-dom";
import { hide } from '../feature/show';

export default function HomeContent({ allproducts }) {

    const inputVal = useSelector(state => state.show.inputVal)
    const dispatch = useDispatch()



    return (
        <>
            <div className="HomeContent">
                <div className='productContainer'>

                    {
                        allproducts.length == 0 ? <p>loading....</p>

                            : allproducts.filter(product => {
                                if (inputVal == "") {
                                    return product
                                } else if (product.name.toLowerCase().includes(inputVal.toLowerCase())) {
                                    return product
                                }
                            }).map(product => (
                                <div key={product._id} className="product">
                                    <div>
                                        <img src={product.image} className="imgStyle" alt='anything' />
                                    </div>
                                    <div className='detailsContainer'>
                                        <p>{product.name}</p>
                                        <p>price : {product.price}</p>
                                        <div>
                                            <Link to={`/product/details/${product._id}`}><button onClick={() => dispatch(hide(false))} className='cartBtn'>Details/Add To Cart</button></Link>
                                        </div>


                                    </div>
                                    <div>

                                    </div>
                                </div>
                            ))
                    }




                    {/* {
                        allproducts.map(product => (
                            <div key={product._id} className="product">
                                <div>
                                    <img src={product.image} className="imgStyle" />
                                </div>
                                <div className='detailsContainer'>
                                    <p>{product.name}</p>
                                    <p>price : {product.price}</p>
                                    <div>
                                        <Link to={`/product/details/${product._id}`}><button onClick={() => dispatch(hide(false))} className='cartBtn'>Details/Add To Cart</button></Link>
                                    </div>


                                </div>
                                <div>

                                </div>
                            </div>
                        ))
                    } */}
                </div>


            </div>
            <div className='footer'>
                <h4>All Right Reserved By Jahidul Islam.</h4>
            </div>
        </>
    )
}
