import './pageStyles/home.css'
import React, { useState, useEffect } from 'react'
import HomeContent from '../components/HomeContent'
import axios from 'axios'


export default function Home() {

    const [allproducts, setAllProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://buyappsample.herokuapp.com/alldata');
            setAllProducts(result.data)
        }

        fetchData()

    }, [])
    return (
        <HomeContent allproducts={allproducts} />
    )
}
