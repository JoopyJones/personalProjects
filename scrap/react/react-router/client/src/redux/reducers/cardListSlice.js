import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cardListSlice = createSlice({
    name: 'cardList',
    initialState,
    reducers:{
        ADD_CARD: (state, action)=>{
            state.push(action.payload);
        },
        REMOVE_CARD: (state,action)=>{
            //TODO
        }
    }

});

//redux automatically generates action functions for each action in reducers, saves it as .actions
export const {ADD_CARD, REMOVE_CARD} = cardListSlice.actions;

//redux automatically generates the reducer function for us, savies it as .reducer
export default cardListSlice.reducer;