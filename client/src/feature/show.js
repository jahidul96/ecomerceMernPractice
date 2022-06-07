import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,
    inputVal: ""
}

export const showSlice = createSlice({
    name: "show",
    initialState,
    reducers: {
        view: (state, action) => {
            state.show = action.payload
        },
        hide: (state, action) => {
            state.show = action.payload
        },
        collectdata : (state, action)=>{
            state.inputVal = action.payload
        }
    }
})

export default showSlice.reducer;
export const { view, hide,collectdata } = showSlice.actions