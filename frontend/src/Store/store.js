import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice'
import authReducer from './auth';

const store = configureStore({
    reducer :{
        cart : cartReducer,
        all_products : productReducer,
        auth :authReducer,
    }
});

export default store;