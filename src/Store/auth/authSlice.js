import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: {},
    },
    reducers:{
        login: (state, action)=>{
            state.isAuthenticated = true;
            state.user = action.payload.user;
        },
        logout: (state)=>{
            state.isAuthenticated = false;
            state.user = {};
        }
    }
});

export const {login, logout} = authSlice.actions