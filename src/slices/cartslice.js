const {createSlice}=require('@reduxjs/toolkit')

const cartslice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //action
        //function to add item in cart
        addtocart:(state,action)=>{
            state.push(action.payload)
        },

        //function to remove item from cart
        removefromcart:(state,action)=>{
          return  state.filter(item=>item.id!=action.payload)
        },
//function to empty the cart

        emptycart:(state)=>{
            return state=[]
        }
        
    }
})
export const {addtocart,removefromcart,emptycart}=cartslice.actions
export default cartslice.reducer