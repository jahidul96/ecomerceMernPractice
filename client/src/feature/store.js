import { configureStore } from '@reduxjs/toolkit'
import cartReducers from './cartSlice'
import showReducers from './show'

export const store = configureStore({
    reducer: {
        shopCart: cartReducers,
        show: showReducers
    }
})