import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice'

const store = configureStore({
    reducer :{
        cart : cartReducer,
        all_products : productReducer,
    }
});

export default store;