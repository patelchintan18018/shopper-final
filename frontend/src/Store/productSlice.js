import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import all_products from '../Assets/all_product';


export const getAllProducts = createAsyncThunk('all_products/getAllProducts', async()=>{
    const response = await fetch('/api/allproducts');
    const data = await response.json();
    return data;
})

// const initialState = {all_products}
const initialState ={
    all_products : [],
    
}

const productSlice = createSlice({
    name : 'all_products',
    initialState ,
    reducers :{

    },
    extraReducers : (builder) =>{
        builder.addCase(getAllProducts.fulfilled, (state,action)=>{
            state.all_products = action.payload;
        })
    }
});



export default productSlice.reducer;