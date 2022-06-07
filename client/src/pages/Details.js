import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import './pageStyles/details.css'
import { useDispatch } from 'react-redux'
import { add } from '../feature/cartSlice';
import { hide } from '../feature/show';

export default function Details() {
    let params = useParams();
    let { id } = params;

    const navigate = useNavigate()


    const [product, setProduct] = useState('')
    const dispatch = useDispatch()


    const addToCart = (product) => {
        dispatch(add(product))
        navigate('/product/cart')
        dispatch(hide(false))
    }




    useEffect(() => {
        const fetchSingleProduct = async () => {
            const result = await axios.get(`https://buyappsample.herokuapp.com/product/${id}`)
            setProduct(result.data)
        }

        fetchSingleProduct()
    }, [])

    return (
        <div className='container'>
            <div className='leftDivProduct'>
                <img src={product.image} className="detailsImageStyle" alt='anyth' />
                <p >{product.name}</p>
            </div>
            <div className='dContainerRight'>
                <div className='priceDiv'>
                    <p className='price'>Tk : {product.price}</p>
                    <p className='off'>20% off</p>
                </div>
                <hr />
                <div>
                    <p>{product.details}</p>
                </div>

                <button className='AddToCart' onClick={() => addToCart(product)}>Add To Cart</button>
                <div style={{ marginTop: 10 }}>
                    <button className='AddToCart'>Buy Now</button>
                </div>

            </div>
        </div>
    )
}
