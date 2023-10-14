import {configureStore} from '@reduxjs/toolkit';
import cardListReducer from './reducers/cardListSlice';

export default configureStore({
    reducer: {
        cardList: cardListReducer
    }
});