import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:[],//to store more than one value
    reducers:{
        //action
        //function to add items to the state
        addtowishlist:(state,action)=>{
            state.push(action.payload)
        },
        removefromwishlist:(state,action)=>{
            //filter returns a new array satisfying the condition 
          return state.filter(item=>item.id!=action.payload)
        }

    }
})
export const {addtowishlist,removefromwishlist}=wishlistSlice.actions
export default wishlistSlice.reducer