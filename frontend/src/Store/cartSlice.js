import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    myBag : [],
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        
        addToCart(state,action){
            
            const tempIndex = state.myBag.findIndex((item) => item.id === action.payload.id);

            if(tempIndex>=0){
                state.myBag[tempIndex].itemQuantity +=1;
            }else{
                const temp = {...action.payload, itemQuantity:1};
                state.myBag.push(temp)
            }
            
        },

        removeFromCart(state,action){
            const updatedBasket = state.myBag.filter((item) => item.id !== action.payload.id);
            state.myBag = updatedBasket;
        },

        incrementQuantity(state,action){
            const itemIndex = state.myBag.findIndex(
                (currItem) => currItem.id === action.payload.id
              );
              state.myBag[itemIndex].itemQuantity += 1;
        },

        decrementQuantity(state,action){
            const itemIndex = state.myBag.findIndex(
                (currItem) => currItem.id === action.payload.id
              );
              if(state.myBag[itemIndex].itemQuantity === 1){
                state.myBag[itemIndex].itemQuantity = 1;
              }else{
                state.myBag[itemIndex].itemQuantity -= 1;
              }
              
        },
    }
}
    
);

export const {addToCart , removeFromCart , incrementQuantity , decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;