//system stuff
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cardListSlice = createSlice({
    name: 'cardList',
    initialState,
    reducers:{
        ADD_CARD: (state, action)=>{
            //console.log(`STORE - Card ${action.payload.name} added to store`);
            state.push(action.payload);
        },
        CLEAR_CARDS: ()=>{
            //console.log("STORE - Store being cleared");
            return initialState;
        },
        REMOVE_CARD: (state,action)=>{
            //console.log(`STORE - Card ${action.payload.name} removed from store`);

            return state.filter((card)=>{
                return card.name !== action.payload.name;
            })
        }
    }

});

//redux automatically generates action functions for each action in reducers, saves it as .actions
export const {ADD_CARD, CLEAR_CARDS, REMOVE_CARD} = cardListSlice.actions;

//redux automatically generates the reducer function for us, savies it as .reducer
export default cardListSlice.reducer;