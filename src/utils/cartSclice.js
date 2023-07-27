import { createSlice } from "@reduxjs/toolkit";

const cartSclice= createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItems:(state,action)=>{
            state.items.pop();
        },
        clearItems:(state,action)=>{
            state.items.length = 0;
        }
    } 
})

export default cartSclice.reducer;
export const {addItems, removeItems, clearItems} = cartSclice.actions;