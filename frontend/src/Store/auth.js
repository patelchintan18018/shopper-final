import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    token : localStorage.getItem('token'),
    userData : {}
}

export const getUserData = createAsyncThunk('userData/getUserData', async(_, { getState })=>{
    const { token } = getState().auth;
    const response = await fetch('/api/user',{
        method : "GET",
        headers : {
            Authorization : `Bearer ${token}`
        }
    });
    const userData = await response.json();
    return userData;
})

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers :{
        storeTokenInLS(state,action){
            state.token = action.payload;
            return localStorage.setItem('token', action.payload)
        },
        removeTokenFromLS(state,action){
            state.token = null;
            state.userData = {}
            localStorage.removeItem("token");
        }
    },
    extraReducers :(builder) =>{
        builder.addCase(getUserData.fulfilled, (state,action)=>{
            state.userData = action.payload;
        })
    }
});

export const {storeTokenInLS,removeTokenFromLS} = authSlice.actions;
export default authSlice.reducer;