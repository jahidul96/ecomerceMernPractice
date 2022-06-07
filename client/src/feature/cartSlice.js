import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    cartItem: localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : [],
    cartQuantity: 0,
    cartTotalAmount: 0
}


export const cartSlice = createSlice({
    name: "shopCart",
    initialState,
    reducers: {
        add: (state, action) => {
            const index = state.cartItem.findIndex(item => item._id === action.payload._id)
            if (index >= 0) {
                state.cartItem[index].cartQuantity += 1
            } else {
                const newItem = { ...action.payload, cartQuantity: 1 }
                state.cartItem.unshift(newItem)
            }
            localStorage.setItem('cartItem', JSON.stringify(state.cartItem))

        },
        remove: (state, action) => {
            const newItem = state.cartItem.filter(c => c._id !== action.payload)
            state.cartItem = newItem
            localStorage.setItem('cartItem', JSON.stringify(state.cartItem))
        },
        clear: (state, action) => {
            state.cartItem = []
            localStorage.setItem('cartItem', JSON.stringify(state.cartItem))
        },
        decreaseCartQuantity: (state, action) => {
            const index = state.cartItem.findIndex(cart => cart._id === action.payload._id)
            if (state.cartItem[index].cartQuantity > 1) {
                state.cartItem[index].cartQuantity -= 1
            } else if (state.cartItem[index].cartQuantity === 1) {
                const newItem = state.cartItem.filter(c => c._id !== action.payload._id)
                state.cartItem = newItem
            }
            localStorage.setItem('cartItem', JSON.stringify(state.cartItem))
        },
        getTotal: (state, action) => {
            const { total, quantity } = state.cartItem.reduce((cartTotal, cart) => {
                const { price, cartQuantity } = cart
                const itemTotal = price * cartQuantity

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal
            }, {
                total: 0,
                quantity: 0
            })

            state.cartTotalAmount = total;
            state.cartQuantity = quantity
        }
    }
})


export const { add, remove, decreaseCartQuantity, getTotal, clear } = cartSlice.actions
export default cartSlice.reducer

