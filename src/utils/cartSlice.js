import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        ADD_ITEM :(state,action) =>{
          state.items.push( action.payload)
      
        },
        REMOVE_ITEM:(state,action)=>{
            state.items.pop(action.payload)
        },
        CLEAR_CART:(state,action) =>{
            state.items = []
        }
    }
})

export const { ADD_ITEM,REMOVE_ITEM,CLEAR_CART} = cartSlice.actions

export default cartSlice.reducer;